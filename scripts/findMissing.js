const fs=require('fs');
const countries=['united-states','india','hong-kong','singapore','indonesia','malaysia','new-zealand','pakistan','philippines','united-kingdom'];
const expected=[];
for(const c of countries){
  const data=fs.readFileSync(`src/countries/${c}/data.ts`,'utf8');
  const lines=data.split('\n');
  let inCalcBlock=false;
  let currentCat=null;
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    const catMatch=line.match(/slug: "([^"]+)",\s*\n?\s*name: "([^"]+)"/);
    if(catMatch && i>0 && lines[i-1].includes('{') && !inCalcBlock){
      currentCat=catMatch[1];
    }
    if(line.includes('calculators: [')){
      inCalcBlock=true;
      continue;
    }
    if(inCalcBlock && line.includes(']')){
      inCalcBlock=false;
      continue;
    }
    if(inCalcBlock){
      const slugMatch=line.match(/slug: "([^"]+)"/);
      if(slugMatch && currentCat){
        expected.push(`${c}-${currentCat}-${slugMatch[1]}`);
      }
    }
  }
}
const taxRules=fs.readFileSync('src/config/taxRules.ts','utf8');
const existing=[...taxRules.matchAll(/id: "([^"]+)",/g)].map(m=>m[1]);
const missing=expected.filter(id=>!existing.includes(id));
console.log('Expected:', expected.length);
console.log('Existing:', existing.length);
console.log('Missing:', missing.length);
console.log(JSON.stringify(missing, null, 2));
