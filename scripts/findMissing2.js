const fs=require('fs');
const countries=['united-states','india','hong-kong','singapore','indonesia','malaysia','new-zealand','pakistan','philippines','united-kingdom'];
const expected=new Set();
for(const c of countries){
  const data=fs.readFileSync(`src/countries/${c}/data.ts`,'utf8');
  // Find category blocks and their calculators
  const catRegex=/slug: "([^"]+)",\s*\n\s*name: "([^"]+)"/g;
  // Since categories and calculators are in the same file with repeated patterns,
  // let's extract all { slug: "...", name: "...", description: "..." } blocks under "calculators: ["
  const calcBlocks=[...data.matchAll(/calculators:\s*\[([\s\S]*?)\]/g)];
  for(const block of calcBlocks){
    const content=block[1];
    // Find preceding category slug by looking backwards from this block
    const before=data.substring(0, block.index);
    const cats=[...before.matchAll(/slug: "([^"]+)",\s*\n\s*name:/g)];
    const catSlug=cats.length?cats[cats.length-1][1]:null;
    if(!catSlug) continue;
    const slugs=[...content.matchAll(/slug: "([^"]+)"/g)].map(m=>m[1]);
    for(const slug of slugs){
      expected.add(`${c}-${catSlug}-${slug}`);
    }
  }
}
const taxRules=fs.readFileSync('src/config/taxRules.ts','utf8');
const existing=new Set([...taxRules.matchAll(/id: "([^"]+)",/g)].map(m=>m[1]));
const missing=[...expected].filter(id=>!existing.has(id));
console.log('Expected calculators:', expected.size);
console.log('Existing rule IDs:', existing.size);
console.log('Missing:', missing.length);
console.log(JSON.stringify(missing, null, 2));
