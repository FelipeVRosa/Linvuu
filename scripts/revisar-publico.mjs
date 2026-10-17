// Executado em CI contra servidor local, sem credenciais, cadastro ou pagamento.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
const base = 'http://127.0.0.1:4328';
const server = spawn(process.execPath, ['--import','tsx','server.ts'], {env:{...process.env,NODE_ENV:'production',PORT:'4328'},stdio:'inherit'});
let browser;
try {
  let ready = false;
  for (let i=0;i<60;i++) {try {if ((await fetch(base+'/healthz')).ok) {ready=true;break;}} catch {} await new Promise(r=>setTimeout(r,500));}
  assert.ok(ready,'servidor local iniciou');
  await fs.mkdir('revisao-publica',{recursive:true});
  browser=await chromium.launch();
  for (const [nome,viewport] of [['desktop',{width:1440,height:1000}],['celular',{width:390,height:844}],['estreito',{width:320,height:740}]]) {
    const context=await browser.newContext({viewport,reducedMotion:'reduce'});
    const page=await context.newPage();
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    for (const [rota,arquivo] of [['/','home'],['/cursos','cursos'],['/curso/en','curso-en'],['/assinatura','assinatura']]) {
      await page.goto(base+rota);
      await page.getByRole('heading',{level:1}).waitFor();
      await page.evaluate(()=>document.fonts.ready);
      // Uma screenshot é salva mesmo quando há falha de largura.
      await page.screenshot({path:`revisao-publica/${nome}-${arquivo}.png`,fullPage:true});
      const sizes=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
      assert.ok(sizes.document<=sizes.viewport+1,`${nome} ${rota}: sem rolagem horizontal (${JSON.stringify(sizes)})`);
      assert.equal(await page.getByRole('heading',{level:1}).count(),1,`${rota}: um título principal`);
    }
    await page.goto(base+'/');
    await page.getByRole('heading',{level:1}).waitFor();
    for (const [plano,limite] of [['Start',1],['Basic',2],['Intermediário',3],['Premium',6]]) {
      await page.getByRole('article').filter({hasText:plano}).getByRole('button',{name:'Explorar este plano'}).click();
      const group=page.getByRole('group',{name:'Idiomas de interesse'});
      const options=group.getByRole('button');
      for (let n=0;n<limite;n++) await options.nth(n).click();
      assert.equal(await group.locator('[aria-pressed="true"]').count(),limite);
      if (limite<6) assert.equal(await options.nth(limite).isEnabled(),false);
      await options.first().click();
      if (limite<6) assert.equal(await options.nth(limite).isEnabled(),true);
    }
    await page.goto(base+'/assinatura#oferta-atual');
    await page.getByRole('heading',{name:'Assinatura atual',exact:true}).waitFor();
    await page.waitForFunction(()=>document.getElementById('oferta-atual')?.getBoundingClientRect().top < 300);
    assert.equal(errors.length,0,`${nome}: erros JS: ${errors.join('; ')}`);
    await context.close();
  }
  console.log('Revisão pública: desktop, 390px, 320px, seleção de idiomas e âncora de assinatura passaram.');
} finally {await browser?.close();server.kill();}
