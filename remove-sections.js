const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove Testimonial Section
const testStartTag = '{/* Testimonial Section */}';
const testEndTag = '{/* Pricing Section */}';
if (code.includes(testStartTag) && code.includes(testEndTag)) {
  const start = code.indexOf(testStartTag);
  const end = code.indexOf(testEndTag);
  code = code.substring(0, start) + code.substring(end);
}

// Remove FAQ Section
const faqStartTag = '{/* FAQ Section */}';
const faqEndTag = '{/* Blogs and Insights Section */}';
if (code.includes(faqStartTag) && code.includes(faqEndTag)) {
  const start = code.indexOf(faqStartTag);
  const end = code.indexOf(faqEndTag);
  code = code.substring(0, start) + code.substring(end);
}

fs.writeFileSync('src/app/page.tsx', code);
console.log('Removed Testimonials and FAQ sections.');
