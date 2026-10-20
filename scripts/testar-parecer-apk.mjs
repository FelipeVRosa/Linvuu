import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base='http://127.0.0.1:4347', rows=[];
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--outDir','dist-apk','--host','127.0.0.1','--port','4347','--strictPort'],{stdio:'ignore'});
let browser;
try {
 for(let i=0;i<60;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));}
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_EXECUTABLE_PATH,args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:320,height:640},reducedMotion:'reduce'});const page=await context.newPage();
 await page.route('https://linvuu.com.br/**',r=>r.abort());
 for(const tema of ['claro','escuro'])for(const path of ['/','/cursos','/curso/en','/curso/en/dia/1','/curso/en/dia/4','/curso/en/dia/9','/entrar','/assinatura','/gramatica/en']){
  if(page.url()!=='about:blank')await page.evaluate(()=>localStorage.clear());
  await page.goto(base+path);await page.locator('#conteudo h1').waitFor();
  await page.evaluate(t=>{localStorage.setItem('linvuu:tema-app',t);document.documentElement.dataset.temaAluno=t},tema);
  await page.waitForTimeout(150);
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
  const issues=axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}));
  await page.evaluate(()=>document.documentElement.style.setProperty('--app-text-scale','2'));
  const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,bar:document.querySelector('.lv-tabbar')?.getBoundingClientRect().height??0}));
  if(layout.overflow)console.log(await page.evaluate(()=>Array.from(document.querySelectorAll('body *')).filter(e=>e.getBoundingClientRect().right>innerWidth+1 || e.scrollWidth>e.clientWidth+1).map(e=>({cls:e.className,text:e.textContent?.slice(0,50),right:e.getBoundingClientRect().right,sw:e.scrollWidth,cw:e.clientWidth})).slice(0,12)));
  assert.equal(layout.overflow,false,`${tema} ${path} overflow`);assert.ok(layout.bar<=96,`${tema} ${path} nav ${layout.bar}`);
  if(path==='/assinatura'){assert.equal(await page.locator('#excluir-conta').count(),1);assert.match(await page.locator('#excluir-conta a.btn').getAttribute('href'),/^mailto:hello\.linvuu@gmail\.com\?/);}
  if(path==='/curso/en'){
   assert.equal(await page.locator('a[href="/curso/en/dia/9"]').count(),0);
   for(const width of [320,360,393,412]){
    await page.setViewportSize({width,height:640});
    assert.ok(await page.locator('.app-unidade-num').first().isVisible(),`unidade visível ${width}`);
    assert.ok(await page.locator('.app-sessao-num').first().isVisible(),`sessão visível ${width}`);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`percurso ${width} sem overflow`);
   }
   await page.setViewportSize({width:320,height:640});
  }
  if(path==='/curso/en/dia/9')assert.ok(await page.locator('.paywall a[href="/curso/en"]').isVisible(),'bloqueio oferece revisão');
  if(path==='/curso/en/dia/4'){
   await page.locator('.app-sessao').waitFor();
   await page.locator('.app-navegador-etapas summary').click();
   await page.locator('.passo').filter({hasText:'Exercícios'}).first().click();
   const audio=page.locator('.ex-audio button');await audio.waitFor();
   assert.equal(await audio.getAttribute('aria-label'),'Ouvir');
   if(await page.locator('.ex-texto').count()){
    await page.locator('.ex-texto').fill('resposta deliberadamente incorreta');
    await page.locator('.ex-acoes .btn-primary').click();
    const resposta=await page.locator('.ex-feedback.erro strong').innerText();
    assert.equal((await page.locator('.app-sessao .sr-only[role=status]').count())>0,true);
    assert.ok((await page.locator('.app-sessao .sr-only[role=status]').innerText()).includes(resposta),'região viva inclui resposta correta');
   }
  }
  if(tema==='escuro' && path==='/curso/en/dia/1')await page.screenshot({path:'design/apk/rodada1-aula-escura.png'});
  rows.push({tema,path,layout,violations:issues,incomplete:axe.incomplete.map(v=>({id:v.id,nodes:v.nodes.length}))});console.log(tema,path,JSON.stringify(issues));
 }
 fs.writeFileSync('design/apk/parecer-rodada1-testes.json',JSON.stringify({limite:'Chromium; sem Android/TalkBack/login real',rows},null,2));
 assert.equal(rows.flatMap(r=>r.violations).length,0);
}finally{await browser?.close();server.kill();}
