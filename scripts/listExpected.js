const fs=require('fs');
const path=require('path');

const countries=['united-states','india','hong-kong','singapore','indonesia','malaysia','new-zealand','pakistan','philippines','united-kingdom'];
const expected=[];
for(const c of countries){
  const data=fs.readFileSync(`src/countries/${c}/data.ts`,'utf8');
  const cats=[...data.matchAll(/slug: "([^"]+)",/g)].map(m=>m[1]);
  // categories are after name/description lines
  // Actually data.ts has category blocks with slug, name, description, overview, calculators: [...], guides: [...], faqs: [...]
  // Use a simpler approach: find all calculator slugs within each category
  const lines=data.split('\n');
  let currentCat=null;
  for(let i=0;i<lines.length;i++){
    const calMatch=lines[i].match(/slug: "([^"]+)",\s+name: "([^"]+)",\s+description: "([^"]+)"/);
    if(calMatch && lines[i].includes('calculators')){
      // not helpful
    }
  }

  // Simpler: extract all { slug: "...", name: "...", description: "..." } after "calculators: ["
  const calculatorBlocks=[...data.matchAll(/calculators:\s*\[([\s\S]*?)\],/g)];
  for(const block of calculatorBlocks){
    const content=block[1];
    const slugs=[...content.matchAll(/slug: "([^"]+)",/g)].map(m=>m[1]);
    const names=[...content.matchAll(/name: "([^"]+)",/g)].map(m=>m[1]);
    const descs=[...content.matchAll(/description: "([^"]+)",/g)].map(m=>m[1]);
    for(let j=0;j<slugs.length;j++){
      const catSlug=slugs[j]; // we need category slug... this is harder
    }
  }
}
console.log('Need a better parser');
