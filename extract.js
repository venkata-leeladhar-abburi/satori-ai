const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const url = 'https://nexcrm.framer.website/';
  const domain = new URL(url).hostname;
  
  // Create Phase 0 folders
  const tasksDir = path.join(__dirname, '.tasks', `clone-${domain}`);
  const screenshotsDir = path.join(tasksDir, 'screenshots');
  const publicDir = path.join(__dirname, 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  [screenshotsDir, imagesDir].forEach(dir => fs.mkdirSync(dir, { recursive: true }));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to ' + url);
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  // Phase 1: Screenshot
  console.log('Taking full page screenshot...');
  await page.screenshot({ path: path.join(screenshotsDir, 'full-page-1920x1080.png'), fullPage: true });
  
  // Phase 2: Extraction
  console.log('Extracting assets and styles...');
  const extraction = await page.evaluate(() => {
    // Collect all images
    const imgNodes = document.querySelectorAll('img');
    const images = Array.from(imgNodes).map(img => img.src).filter(src => src && src.startsWith('http'));
    
    // Background images
    const allElements = document.querySelectorAll('*');
    const bgImages = [];
    allElements.forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        const match = bg.match(/url\(['"]?(.*?)['"]?\)/);
        if (match && match[1]) {
            if (match[1].startsWith('http')) {
                bgImages.push(match[1]);
            }
        }
      }
    });

    const typography = new Set();
    allElements.forEach(el => {
      const cs = window.getComputedStyle(el);
      if(cs.fontFamily) typography.add(cs.fontFamily);
    });
    
    return {
      images: [...new Set([...images, ...bgImages])],
      typography: Array.from(typography)
    };
  });
  
  console.log('Found ' + extraction.images.length + ' images.');
  // Download images
  let i = 0;
  for (const imgSrc of extraction.images) {
    if (imgSrc.startsWith('data:')) continue;
    i++;
    // Get extension or default to png
    let ext = imgSrc.split('.').pop().split('?')[0].split('#')[0] || 'png';
    if(ext.length > 4) ext = 'png';
    const filename = `asset-${i}.${ext}`;
    const dest = path.join(imagesDir, filename);
    
    try {
      const response = await fetch(imgSrc);
      const buffer = await response.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Downloaded ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${imgSrc}`);
    }
  }

  // Create context.md
  const contextContent = `# Extraction Context: ${domain}

## Typography
${extraction.typography.map(t => `- ${t}`).join('\n')}

## Assets Downloaded
${Array.from({length: i}).map((_, idx) => `- asset-${idx+1}.png`).join('\n')}

## Component Context
Based on general visual inspection of standard templates and text content:
- Layout uses grid for features and workflow tools.
- Modern SaaS aesthetic.
`;

  fs.writeFileSync(path.join(tasksDir, 'context.md'), contextContent);
  console.log('Saved context.md');
  
  await browser.close();
})();
