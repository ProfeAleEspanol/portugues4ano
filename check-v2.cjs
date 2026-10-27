const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const script=fs.readFileSync('dist/content.js','utf8')+fs.readFileSync('dist/app.js','utf8');
function setup(initial={},blocked=false){
 const elements=new Map(),storage={...initial};let answers=[];
 function element(id){if(!elements.has(id))elements.set(id,{innerHTML:'',classList:{toggle(){},add(){}},scrollIntoView(){}});return elements.get(id)}
 const app=element('app');app.querySelectorAll=selector=>{
  if(selector==='[data-answer]'){
   answers=[...app.innerHTML.matchAll(/data-answer="(\d+)"/g)].map(m=>({dataset:{answer:m[1]},classList:{values:[],add(v){this.values.push(v)}}}));return answers;
  }
  return [];
 };
 const context=vm.createContext({document:{getElementById:element},location:{hash:'#inicio'},window:{addEventListener(){},scrollTo(){}},localStorage:{getItem(k){if(blocked)throw Error('blocked');return storage[k]??null},setItem(k,v){if(blocked)throw Error('blocked');storage[k]=v}},console});
 vm.runInContext(script,context);return{context,storage,app,elements,getAnswers:()=>answers};
}
const run=setup();
vm.runInContext(`
if(maxStars!==60)throw Error('Expected 60 stars');
const prompts=new Set();
for(const island of lessons){
 if(island.missions.length!==3)throw Error('Expected three missions per island');
 intro(island);
 for(const [mi,mission] of island.missions.entries()){
  if(mission.questions.length!==5)throw Error('Expected five challenges per mission');
  for(const q of mission.questions){
   if(!Number.isInteger(q.a)||!q.options[q.a]||!q.why)throw Error('Missing answer');
   if(new Set(q.options).size!==q.options.length)throw Error('Duplicate options');
   const signature=JSON.stringify([q.q,q.options]);
   if(prompts.has(signature))throw Error('Duplicate question');prompts.add(signature);
  }
  startMission(island,mi);
  if(island.id==='leitura'&&!session.l.passage)throw Error('Reading passage missing');
  for(let i=0;i<5;i++){
   session.index=i;question();answer(session.l.questions[i].a);answer(session.l.questions[i].a);
  }
  if(session.score!==5)throw Error('Duplicate click changes score');finish();
  startMission(island,mi);
  for(let i=0;i<5;i++){
   session.index=i;question();const q=session.l.questions[i];answer((q.a+1)%q.options.length);
  }
  if(session.score!==0||session.missed.length!==5)throw Error('Incorrect answer tracking');finish();
  if(progress[island.id+'-'+mi]!==5)throw Error('Best score was reduced');
 }
 if(islandScore(island)!==15)throw Error('Island total mismatch');
}
if(total()!==60)throw Error('Total mismatch');
achievements();
`,run.context);
assert.equal(Object.values(JSON.parse(run.storage['palavras-v2'])).reduce((a,b)=>a+b,0),60);
assert.match(run.app.innerHTML,/60 de 60 estrelas/);
const reloaded=setup(run.storage);assert.equal(vm.runInContext('total()',reloaded.context),60);
const legacy=setup({'palavras-v1':JSON.stringify({acentos:4,nomes:5,leitura:3,oxitonas:2})});
assert.equal(vm.runInContext('total()',legacy.context),14);
assert.equal(vm.runInContext("progress['acentos-0']",legacy.context),4);
assert.equal(vm.runInContext("progress['acentos-1']",legacy.context),undefined);
const blocked=setup({},true);assert.match(blocked.app.innerHTML,/não permitiu salvar/);
vm.runInContext('startMission(lessons[0],1);answer(0);',blocked.context);
const passage=setup();vm.runInContext('startMission(lessons[3],1)',passage.context);assert.match(passage.app.innerHTML,/O bilhete de Miguel/);assert.doesNotMatch(passage.app.innerHTML,/O jardim de Clara/);
vm.runInContext('session.score=3;finish()',passage.context);
passage.elements.get('choose-mission').onclick();
assert.match(passage.app.innerHTML,/Escolha sua missão/);
assert.match(passage.app.innerHTML,/A ponte de papel/);
console.log('PASS: 60 distinct questions, 12 missions, answer feedback, duplicate clicks, best scores, reload, v1 migration, blocked storage, correct reading passages and 60-star totals.');
