const fs=require('fs');
const taxRules=fs.readFileSync('src/config/taxRules.ts','utf8');
const ruleIds=[...taxRules.matchAll(/id: "([^"]+)",/g)].map(m=>m[1]).filter(id=>id.includes('-calculator'));
console.log(JSON.stringify(ruleIds, null, 2));
