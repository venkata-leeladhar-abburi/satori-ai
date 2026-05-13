
const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const tags = [];
const regex = /<(\/?[a-zA-Z0-9.]+)/g;
let match;

while ((match = regex.exec(content)) !== null) {
    const tag = match[1];
    if (tag.startsWith('/')) {
        const lastTag = tags.pop();
        if (lastTag !== tag.substring(1)) {
            console.log(`Mismatch: Expected </${lastTag}> but found <${tag}> at index ${match.index}`);
            // Find line number
            const lines = content.substring(0, match.index).split('\n');
            console.log(`Line: ${lines.length}`);
            // Skip to help find more
        }
    } else {
        // Ignore self-closing tags like <br/>, <img/>, etc.
        // Also ignore components that might be self-closing but we don't know
        // For simplicity, let's just check the ones that have a closing tag in the file
        if (!content.substring(match.index, match.index + 100).includes('/>')) {
            tags.push(tag);
        }
    }
}

if (tags.length > 0) {
    console.log("Unclosed tags:", tags);
} else {
    console.log("All tags balanced (roughly)");
}
