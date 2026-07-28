const fs = require('fs');
const file = 'src/config/taxRules.ts';
let text = fs.readFileSync(file, 'utf8');

// Remove lines containing 2026/27 or 2026-27 as options or defaults
const lines = text.split('\n');
const filtered = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Skip lines with 2026/27 or 2026-27 in options/values
  if ((line.includes('2026/27') || line.includes('2026-27')) && !line.includes('AY 2026-27')) {
    continue;
  }
  // Remove defaultValue: "2026/27" or defaultValue: "2026-27"
  if (/defaultValue:\s*"2026[\/-]27"/.test(line)) {
    continue;
  }
  filtered.push(line);
}
text = filtered.join('\n');

fs.writeFileSync(file, text);
console.log('Removed all 2026/27 and 2026-27 options from taxRules.ts');
