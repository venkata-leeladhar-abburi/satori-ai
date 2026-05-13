const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The dashboard mockup cards need to be moved OUT of the orange gradient container, 
// and the orange gradient container needs to end.

// First, find where the orange gradient starts:
// <div className="relative bg-gradient-to-br from-[#FF5C00] to-[#E24E00] overflow-hidden">
code = code.replace(/<div className="relative bg-gradient-to-br from-\[#FF5C00\] to-\[#E24E00\] overflow-hidden">/, '<div className="relative bg-gradient-to-br from-[#FF5C00] to-[#E24E00] pb-40 lg:pb-52 overflow-hidden">');

// Then, we find where the dashboard mockup starts:
// {/* Dashboard Mockup - Coded Version matching the image */}
// <motion.div ... className="mt-14 flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto items-stretch relative z-20">
const dashStart = code.indexOf('{/* Dashboard Mockup');
const dashEnd = code.indexOf('</section>\n        </div>');

let dashboardBlock = code.substring(dashStart, dashEnd);

// Remove it from the current location
code = code.substring(0, dashStart) + code.substring(dashEnd);

// Now change the dashboardBlock class to include the negative margin
dashboardBlock = dashboardBlock.replace(/className="mt-14 flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto items-stretch relative z-20"/, 'className="-mt-32 lg:-mt-40 flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto items-stretch relative z-20 px-4"');

// Replace the right card content inside dashboardBlock
const rightCardStart = dashboardBlock.indexOf('{/* Key Insights Card */}');
const rightCardReplace = `
            {/* Key Insights Card */}
            <div className="flex-1 bg-white rounded-[2rem] p-8 pb-6 text-left shadow-xl flex flex-col border border-white/50 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-[#1A0A00] font-bold text-lg">Key insights</h3>
                <div className="flex gap-0.5 bg-stone-50 p-1 rounded-lg border border-stone-100/50">
                  {['1D', '5D', '1M', 'ALL'].map(t => (
                    <button key={t} className={\`px-2.5 py-1 text-[9px] font-bold rounded-[4px] transition-all \${t === '1M' ? 'bg-white text-[#3E1C00] shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-stone-400 hover:text-stone-600'}\`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex items-center justify-between gap-4 mb-4">
                {[
                  { label: 'Total Leads', val: '5K', stroke: 220, color: '#FF5C00' },
                  { label: 'Closed Deals', val: '3K', stroke: 150, color: '#3E1C00' },
                  { label: 'Lost Deals', val: '2K', stroke: 80, color: '#3E1C00' },
                ].map((dial, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 flex-1">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                       {/* SVG Dial */}
                       <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="40" fill="none" stroke="#F6F3EC" strokeWidth="8" />
                         <circle cx="50" cy="50" r="40" fill="none" stroke={dial.color} strokeWidth="8" strokeDasharray={\`\${dial.stroke} 251\`} strokeLinecap="round" />
                       </svg>
                       {/* Inner Hexagon */}
                       <div className="relative z-10 w-[3.25rem] h-[3.25rem] bg-[#3E1C00] flex flex-col items-center justify-center shadow-md" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white mb-0.5"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/></svg>
                          <span className="text-[12px] font-bold text-white leading-none tracking-tight">{dial.val}</span>
                       </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#3E1C00] tracking-tight text-center leading-tight">{dial.label}</span>
                  </div>
                ))}
              </div>
            </div>
`;

dashboardBlock = dashboardBlock.substring(0, rightCardStart) + rightCardReplace;

// Now place the dashboard block right after `</section>\n        </div>\n\n        <main className="pt-0">`
const mainStart = code.indexOf('<main className="pt-0">');
code = code.substring(0, mainStart + '<main className="pt-0">'.length) + '\n\n' + dashboardBlock + '\n\n' + code.substring(mainStart + '<main className="pt-0">'.length);

fs.writeFileSync('src/app/page.tsx', code);
console.log('Hero overlap and Key Insights updated.');
