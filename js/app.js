let categoriaAtiva='tudo', receitaAtual=null;
let favoritos=JSON.parse(localStorage.getItem('hk_fav')||'[]');
let recentes=JSON.parse(localStorage.getItem('hk_rec')||'[]');
let timersAtivos={};
try{
  const raw=JSON.parse(localStorage.getItem('hk_timers')||'{}');
  Object.keys(raw).forEach(k=>{
    const t=raw[k];
    if(t && t.titulo){
      if(t.pausado && t.restante>0) timersAtivos[k]=t;
      else if(t.fim && t.fim > Date.now()) timersAtivos[k]=t;
    }
  });
}catch(e){ localStorage.removeItem('hk_timers'); }

function salvarTimers(){ localStorage.setItem('hk_timers', JSON.stringify(timersAtivos)); }
function getReceitasBase(){ if(window.TODAS_RECEITAS) return window.TODAS_RECEITAS; if(window.RECEITAS) return window.RECEITAS; return []; }
function init(){ renderCategorias(); filtrar(); restaurarTimersGlobais(); if(Notification.permission!=='granted') Notification.requestPermission(); }
function renderCategorias(){
  const c=document.getElementById('categorias'); if(!c||!CATEGORIAS) return;
  const RECEITAS=getReceitasBase();
  const ord=[...CATEGORIAS].sort((a,b)=>a.nome.localeCompare(b.nome));
  const contar=(id)=>{ if(id==='tudo') return RECEITAS.length; if(id==='airfryer') return RECEITAS.filter(r=>r.airfryer===true).length; if(id==='rapida') return RECEITAS.filter(r=>getTempo(r)<=12).length; const nome=CATEGORIAS.find(x=>x.id===id)?.nome.toLowerCase()||id; return RECEITAS.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)).length; };
  c.innerHTML=[{id:'tudo',nome:'Tudo',icone:'✨'},...ord].map(cat=>`<button class="cat-btn ${categoriaAtiva===cat.id?'ativo':''}" onclick="setCategoria('${cat.id}')">${cat.icone}<br>${cat.nome}<br>(${contar(cat.id)})</button>`).join('');
}
function setCategoria(id){ categoriaAtiva=id; renderCategorias(); filtrar(); }
function getTempo(r){ const m=(r.tempo||'').match(/(\d+)/); return m?parseInt(m[1]):999; }

// FILTRO PREMIUM ATUALIZADO - MAIS FÁCIL NO LUGAR DE MENOS KCAL
function filtrar(){
  let RECEITAS=getReceitasBase(); if(!RECEITAS) return;
  const busca=(document.getElementById('busca')?.value||'').toLowerCase();
  const ordem=document.getElementById('ordem')?.value||'padrao';
  let lista=[...RECEITAS];
  if(categoriaAtiva!=='tudo'){ if(categoriaAtiva==='airfryer') lista=lista.filter(r=>r.airfryer===true); else if(categoriaAtiva==='rapida') lista=lista.filter(r=>getTempo(r)<=12); else{ const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva; lista=lista.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)); }}
  if(busca) lista=lista.filter(r=>r.titulo.toLowerCase().includes(busca));
  
  if(ordem==='az') lista.sort((a,b)=>a.titulo.localeCompare(b.titulo)); 
  else if(ordem==='tempo') lista.sort((a,b)=>getTempo(a)-getTempo(b));
  else if(ordem==='facil' || ordem==='kcal'){
    const peso = { 'fácil':1, 'facil':1, 'médio':2, 'medio':2, 'difícil':3, 'dificil':3 };
    lista.sort((a,b)=>{
      const pa = peso[(a.nivel||'').toLowerCase()] || 2;
      const pb = peso[(b.nivel||'').toLowerCase()] || 2;
      return pa - pb;
    });
  }
  window.RECEITAS=RECEITAS; renderReceitas(lista,'grid-receitas');
}
function renderReceitas(lista, alvoId){
  const cont=document.getElementById(alvoId); if(!cont) return;
  if(lista.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px">Nenhuma receita</div>`; return; }
  cont.innerHTML=lista.map(r=>{ const isFav=favoritos.includes(r.id); return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" onclick="event.stopPropagation();toggleFav('${r.id}')">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div class="card-body"><span class="badge">${r.categoria_principal}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>⏰ ${r.tempo}</span><span>🍽️ ${r.porcoes||''}</span><span>📊 ${r.nivel||''}</span></div></div></div>`}).join('');
}
function normalizarPasso(p){ if(typeof p==='string') return {texto:p, tempoMin: extrairMin(p)}; return {texto:p.texto||p.passo||'', tempoMin: p.timer||p.tempoMin||extrairMin(p.texto||''), label:p.label||''}; }
function extrairMin(t){ const m=(t||'').match(/(\d+)\s*min/); return m?parseInt(m[1]):0; }
function detalharPasso(p, idx, total){
  let base = p.texto;
  let dica = idx===0 ? "<br><small style='color:#9A8C83'>💡 Dica: Separe todos antes.</small>" : idx===total-1 ? "<br><small style='color:#FF6B35;font-weight:700'>🔥 Finalização: Sirva imediatamente!</small>" : "";
  return {texto: base + dica, tempoMin: p.tempoMin>0?p.tempoMin:0, label: p.label || `Passo ${idx+1}`};
}
function compartilharWhatsApp(){
  if(!receitaAtual) return;
  const ingList = receitaAtual.ingredientes.map(i=>`• ${i.nome||i.name} - ${i.qtd||''}`).join('\n');
  const passosList = receitaAtual.passos.map((p,i)=>`${i+1}. ${p.texto||p}`).join('\n');
  const texto = `*${receitaAtual.titulo}* - ${receitaAtual.tempo}\n\n*🛒 INGREDIENTES:*\n${ingList}\n\n*👨‍🍳 MODO:*\n${passosList}\n\n hk-receitas.vercel.app`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}
function abrirReceita(id){
  const RECEITAS=getReceitasBase();
  const r=RECEITAS.find(x=>x.id===id); if(!r) return; receitaAtual=r;
  if(!recentes.includes(id)){ recentes.unshift(id); recentes=recentes.slice(0,12); localStorage.setItem('hk_rec',JSON.stringify(recentes)); }
  const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo'); 
  const passosNorm=r.passos.map(normalizarPasso);
  const passosDetalhados=passosNorm.map((p,i)=>detalharPasso(p,i,passosNorm.length));
  corpo.innerHTML=`
  <style>
    .flip-wrapper{ perspective:1200px; } .flip-inner{ position:relative; width:100%; transition: transform 0.7s; transform-style: preserve-3d; }
    .flip-inner.virando{ transform: rotateY(180deg); } .view{ backface-visibility:hidden; }
    #view-preparo{ position:absolute; top:0; left:0; width:100%; transform: rotateY(180deg); }
    .btn-whatsapp{ width:100%; background:#25D366; color:white; border:none; padding:14px; border-radius:14px; font-weight:900; font-size:15px; margin-top:16px; cursor:pointer; }
    .btn-modo{ width:100%; background:#FF6B35; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:12px; cursor:pointer; }
    .btn-voltar{ width:100%; background:#1A1A1A; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:24px; cursor:pointer; }
    .passo-detalhado{ background:white; border:1.5px solid #FFE9DC; border-radius:16px; padding:16px; margin-bottom:14px; display:flex; gap:12px; }
    .timer-controls{ display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; align-items:center; }
    .timer-btn-main{ background:#1A1A1A; color:white; border:none; padding:10px 18px; border-radius:20px; font-weight:800; cursor:pointer; }
    .timer-btn-sec{ background:white; color:#1A1A1A; border:1.5px solid #E8DDD6; padding:8px 14px; border-radius:20px; font-weight:700; cursor:pointer; font-size:12px; }
  </style>
  <img class="capa" src="${r.foto}">
  <div class="flip-wrapper"><div class="flip-inner" id="flip-inner">
    <div class="view" id="view-ingredientes"><div class="modal-conteudo">
      <h1 style="font-size:24px;font-weight:900">${r.titulo}</h1>
      <div style="display:flex;gap:8px;margin:12px 0;flex-wrap:wrap">
        <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">⏰ ${r.tempo}</span>
        <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">🍽️ ${r.porcoes||''}</span>
        <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">📊 ${r.nivel||''}</span>
      </div>
      <h3 style="margin:20px 0 12px">🛒 Ingredientes (${r.ingredientes.length})</h3>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;padding:0">
        ${r.ingredientes.map((i,idx)=>`<li style="background:#FFFBF8;border:1px solid #FFE9DC;padding:14px;border-radius:14px;display:flex;gap:12px"><input type="checkbox" style="width:22px;height:22px;accent-color:#FF6B35"><span><b>${i.nome||i.name}</b><br><small>${i.qtd||''}</small></span></li>`).join('')}
      </ul>
      <button id="btn-fav-dentro" onclick="toggleFavAtual()" style="width:100%;background:${favoritos.includes(r.id)?'#FFE9DC':'#fff'};color:#1A1A1A;border:1.5px solid #FFE9DC;padding:14px;border-radius:14px;font-weight:900;font-size:15px;margin-top:12px;cursor:pointer;">${favoritos.includes(r.id)?'❤️ Favoritada - Clique para desfavoritar':'🤍 Favoritar essa receita'}</button>
      <button class="btn-whatsapp" onclick="compartilharWhatsApp()">📲 Exportar WhatsApp</button>
      <button class="btn-modo" onclick="irParaModoPreparo()">👨‍🍳 MODO DE PREPARO →</button><div style="height:30px"></div>
    </div></div>
    <div class="view" id="view-preparo"><div class="modal-conteudo">
      <h1 style="font-size:22px;font-weight:900">${r.titulo}</h1>
      ${passosDetalhados.map((p,i)=>{
        const key=`${r.id}-${i}`; const t=timersAtivos[key];
        let htmlBtns='';
        if(!t){ if(p.tempoMin>0) htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}" onclick="iniciarTimer(${p.tempoMin},${i})">⏱ Timer ${p.tempoMin} min</button>`; else htmlBtns=`<span style="font-size:12px;color:#9A8C83">Sem timer</span>`; }
        else if(t.pausado){ const m=Math.floor(t.restante/60); const s=t.restante%60; htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}">⏸️ ${m}:${(s+'').padStart(2,'0')} pausado</button><button class="timer-btn-sec" onclick="continuarTimer('${key}',${i})">▶️ Continuar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${i},${t.min})">🔄 Zerar</button>`; }
        else{ const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60; htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}">⏳ ${m}:${(s+'').padStart(2,'0')} rodando</button><button class="timer-btn-sec" onclick="pausarTimer('${key}',${i})">⏸️ Pausar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${i},${t.min})">🔄 Zerar</button>`; }
        return `<div class="passo-detalhado"><input type="checkbox"><div style="flex:1"><b style="color:#FF6B35;font-size:13px">${p.label}</b> <span style="font-size:12px;background:#FFF0E6;padding:4px 8px;border-radius:8px">Passo ${i+1}/${passosDetalhados.length}</span><div style="font-weight:600;margin-top:6px">${p.texto}</div><div class="timer-controls" id="controls-${i}">${htmlBtns}</div></div></div>`;
      }).join('')}
      <button class="btn-voltar" onclick="voltarIngredientes()">← INGREDIENTES</button><div style="height:30px"></div>
    </div></div>
  </div></div>`;
  modal.classList.add('mostrar');
  document.getElementById('flip-inner').classList.remove('virando');
  document.getElementById('view-ingredientes').style.display='block';
  document.getElementById('view-preparo').style.display='none';
  rolarTopoModal();
}
function rolarTopoModal(){
  const modal = document.getElementById('modal');
  const corpo = document.getElementById('modal-corpo');
  if(modal) modal.scrollTo({top:0, behavior:'smooth'});
  if(corpo) corpo.scrollTo({top:0, behavior:'smooth'});
  window.scrollTo({top:0, behavior:'smooth'});
}
function irParaModoPreparo(){ 
  const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); 
  flip.classList.add('virando'); 
  rolarTopoModal();
  setTimeout(()=>{ v1.style.display='none'; v2.style.display='block'; v2.style.position='relative'; v2.style.transform='rotateY(180deg)'; rolarTopoModal(); },350); 
}
function voltarIngredientes(){ 
  const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); 
  flip.classList.remove('virando'); 
  rolarTopoModal();
  setTimeout(()=>{ v2.style.display='none'; v1.style.display='block'; rolarTopoModal(); },350); 
}
function fecharModal(){ document.getElementById('modal').classList.remove('mostrar'); }
function toggleFav(id){ if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id); localStorage.setItem('hk_fav',JSON.stringify(favoritos)); filtrar(); atualizarBotaoFavDentro(); }
function toggleFavAtual(){
  if(!receitaAtual) return;
  const id = receitaAtual.id;
  if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id);
  localStorage.setItem('hk_fav',JSON.stringify(favoritos));
  atualizarBotaoFavDentro();
  filtrar();
  const pagFav = document.getElementById('page-favoritos');
  if(pagFav && pagFav.classList.contains('ativa')){
    const RECEITAS = getReceitasBase();
    renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos');
  }
}
function atualizarBotaoFavDentro(){
  const btn = document.getElementById('btn-fav-dentro');
  if(!btn || !receitaAtual) return;
  const isFav = favoritos.includes(receitaAtual.id);
  btn.innerHTML = isFav ? '❤️ Favoritada - Clique para desfavoritar' : '🤍 Favoritar essa receita';
  btn.style.background = isFav ? '#FFE9DC' : '#fff';
}

// TIMER COM CONFIRMAÇÃO
function iniciarTimer(min, idx){ if(!receitaAtual||min<=0) return; const key=`${receitaAtual.id}-${idx}`; const fim=Date.now()+min*60*1000; timersAtivos[key]={fim, titulo:receitaAtual.titulo, passo:idx+1, min, idReceita:receitaAtual.id, pausado:false}; salvarTimers(); renderControlesTimer(key, idx, min); atualizarPaginaTimers(); }
function pausarTimer(key, idx){ const t=timersAtivos[key]; if(!t||t.pausado) return; const restante=Math.max(0, Math.floor((t.fim-Date.now())/1000)); t.restante=restante; t.pausado=true; delete t.fim; salvarTimers(); renderControlesTimer(key, idx, t.min); atualizarPaginaTimers(); }
function continuarTimer(key, idx){ const t=timersAtivos[key]; if(!t||!t.pausado) return; t.fim=Date.now()+t.restante*1000; t.pausado=false; delete t.restante; salvarTimers(); renderControlesTimer(key, idx, t.min); atualizarPaginaTimers(); }
function zerarTimer(key, idx, minOriginal){ 
  const t = timersAtivos[key];
  const nome = t ? `${t.titulo} - Passo ${t.passo}` : 'esse timer';
  if(!confirm(`Tem certeza que quer zerar?\n\n${nome}\n\nO tempo será perdido.`)) return;
  delete timersAtivos[key]; salvarTimers(); renderControlesTimer(key, idx, minOriginal, true); atualizarPaginaTimers(); 
}
function renderControlesTimer(key, idx, minOriginal, zerado=false){
  const cont=document.getElementById(`controls-${idx}`); if(!cont) return;
  if(zerado){ cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}" onclick="iniciarTimer(${minOriginal},${idx})">⏱ Timer ${minOriginal} min</button>`; return; }
  const t=timersAtivos[key]; if(!t) return;
  if(t.pausado){ const m=Math.floor(t.restante/60); const s=t.restante%60; cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}">⏸️ ${m}:${(s+'').padStart(2,'0')} pausado</button><button class="timer-btn-sec" onclick="continuarTimer('${key}',${idx})">▶️ Continuar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${idx},${t.min})">🔄 Zerar</button>`; }
  else{ const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60; cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}">⏳ ${m}:${(s+'').padStart(2,'0')} rodando</button><button class="timer-btn-sec" onclick="pausarTimer('${key}',${idx})">⏸️ Pausar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${idx},${t.min})">🔄 Zerar</button>`; }
}
function restaurarTimersGlobais(){
  setInterval(()=>{
    let mudou=false;
    Object.keys(timersAtivos).forEach(k=>{ const t=timersAtivos[k]; if(!t) { delete timersAtivos[k]; mudou=true; return; } if(t.pausado) return; if(!t.fim) return; const rest=Math.floor((t.fim-Date.now())/1000); if(receitaAtual && k.startsWith(receitaAtual.id+'-')){ const idx=k.split('-').pop(); const btn=document.getElementById(`btn-main-${idx}`); if(btn){ if(rest>0) btn.innerText=`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`; else btn.innerText=`✅ Finalizado!`; } } if(rest<=0){ delete timersAtivos[k]; mudou=true; if(Notification.permission==='granted') new Notification(`⏰ Finalizado!`, {body: `${t.titulo} - Passo ${t.passo}`}); } });
    if(mudou) salvarTimers(); if(document.getElementById('page-timer')?.classList.contains('ativa')) atualizarPaginaTimers();
  },1000);
}
function atualizarPaginaTimers(){
  const global=document.getElementById('timer-global'); if(!global) return;
  const chaves=Object.keys(timersAtivos);
  if(chaves.length===0){ global.innerHTML=`<div style="text-align:center;padding:30px;color:#9A8C83">Nenhum timer ativo</div>`; return; }
  global.innerHTML=chaves.map(key=>{
    const t=timersAtivos[key]; if(!t) return '';
    let tempoStr=t.pausado?`⏸️ ${Math.floor(t.restante/60)}:${(t.restante%60+'').padStart(2,'0')} pausado`:`⏱ ${Math.max(0,Math.floor((t.fim-Date.now())/1000/60))}:${(Math.max(0,Math.floor((t.fim-Date.now())/1000)%60)+'').padStart(2,'0')}`;
    const botoesPausa=t.pausado?`<button onclick="continuarTimer('${key}',${t.passo-1})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white;margin-right:6px">▶️ Continuar</button>`:`<button onclick="pausarTimer('${key}',${t.passo-1})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white;margin-right:6px">⏸️ Pausar</button>`;
    return `<div style="background:white;border:1.5px solid #FFE9DC;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center"><div style="flex:1"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:28px;font-weight:900;margin-top:4px">${tempoStr}</div><div style="margin-top:8px">${botoesPausa}<button onclick="zerarTimer('${key}',${t.passo-1},${t.min})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white">🔄 Zerar</button></div></div><button onclick="voltarParaModoPreparo('${t.idReceita}','${key}')" style="background:#1A1A1A;color:white;border:none;width:48px;height:48px;border-radius:50%;font-size:20px;cursor:pointer;margin-left:10px">📖</button></div>`;
  }).join('')+`<div style="text-align:center;margin-top:20px"><button onclick="limparTodosTimers()" style="background:#FF6B35;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 LIMPAR TODOS</button></div>`;
}
function voltarParaModoPreparo(idReceita, key){ if(!idReceita){ const t=timersAtivos[key]; if(t) idReceita=t.idReceita; } if(!idReceita) return; mudarPage('home'); setTimeout(()=>{ abrirReceita(idReceita); setTimeout(()=>{ irParaModoPreparo(); }, 600); },200); }
function voltarParaReceita(idReceita, key){ voltarParaModoPreparo(idReceita, key); }
function limparTodosTimers(){ 
  const qtd = Object.keys(timersAtivos).length;
  if(qtd === 0) return;
  if(!confirm(`Tem certeza que quer apagar TODOS os ${qtd} timers?\n\nEssa ação não pode ser desfeita.`)) return;
  localStorage.removeItem('hk_timers'); timersAtivos={}; salvarTimers(); atualizarPaginaTimers(); 
}
function mudarPage(nome){ document.querySelectorAll('.page').forEach(p=>p.classList.remove('ativa')); document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo')); document.getElementById(`page-${nome}`)?.classList.add('ativa'); document.getElementById(`nav-${nome}`)?.classList.add('ativo'); const RECEITAS=getReceitasBase(); if(nome==='favoritos') renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos'); if(nome==='recentes') renderReceitas(recentes.map(id=>RECEITAS.find(r=>r.id===id)).filter(Boolean),'grid-recentes'); if(nome==='timer') atualizarPaginaTimers(); }
document.addEventListener('DOMContentLoaded',init);

// ===== GELADEIRA - FINAL LIMPO =====
const CONDIMENTOS_TIRAR = ['agua','água','alho','caldo','curcuma','cúrcuma','acucar','açucar','açúcar','sal','pimenta','oleo','óleo','azeite','vinagre','manteiga','margarina','cominho','oregano','orégano','salsinha','cebolinha','coentro','alecrim','manjericão','canela','cravo','noz moscada','paprica','páprica','curry','açafrão','cheiro verde','shoyu','molho shoyu','sal grosso','pimenta reino','limão','azeite de dendê','água com gás','amido','polvilho','fermento','louro','folha de louro','tempero verde','mix de folhas','mix folhas','folhas','folha','nori','gengibre'];
let ingredientesSelecionados = JSON.parse(localStorage.getItem('hk_ing_possuo')||'[]');
function paraRaiz(nome){nome=nome.toLowerCase().trim();let s=nome.normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(s.includes('guacamole'))return'abacate';if(s.includes('gema')||s.includes('clara'))return'ovo';if(s.includes('ovo'))return'ovo';if(s.includes('tomate'))return'tomate';if(s.includes('pimentao'))return'pimentão';if(s.includes('cebola'))return'cebola';if(s.includes('abobora'))return'abóbora';if(s.includes('batata'))return'batata';if(s.includes('feijao'))return'feijão';if(s.includes('tortilha')||s.includes('tortilla'))return'tortilha';if(s.includes('requeijao'))return'requeijão';if(s.includes('frango'))return'frango';if(s.includes('carne')||s.includes('patinho'))return'carne';if(s.includes('queijo')||s.includes('mucarela')||s.includes('mussarela')||s.includes('parmesao')||s.includes('cheddar')||s.includes('catupiry')||s.includes('meia cura')||s.includes('presunto'))return'queijo';if(s.includes('leite condensado'))return'leite condensado';if(s.includes('leite de coco'))return'leite de coco';if(s.includes('leite'))return'leite';if(s.includes('farinha')||s.includes('panko')||s.includes('massa')||s.includes('espaguete')||s.includes('macarrao'))return'massa';if(s.includes('abobrinha'))return'abobrinha';if(s.includes('cenoura'))return'cenoura';if(s.includes('couve'))return'couve';if(s.includes('alface'))return'alface';if(s.includes('arroz'))return'arroz';if(s.includes('grao de bico')||s.includes('lentilha')||s.includes('ervilha'))return'grãos';if(s.includes('quinoa')||s.includes('aveia'))return'grãos';if(s.includes('pao'))return'pão';if(s.includes('linguica')||s.includes('bacon')||s.includes('calabresa')||s.includes('paio')||s.includes('costela'))return'linguiça';if(s.includes('camarao')||s.includes('robalo')||s.includes('salmao'))return'peixe';if(s.includes('abacate'))return'abacate';if(s.includes('pepino'))return'pepino';if(s.includes('brocolis'))return'brócolis';if(s.includes('repolho'))return'repolho';if(s.includes('milho'))return'milho';if(s.includes('morango'))return'morango';if(s.includes('coco'))return'coco';if(s.includes('chocolate')||s.includes('cacau')||s.includes('pacoca')||s.includes('bolacha')||s.includes('doce de leite'))return'doce';return nome;}
function getIngredientesObrigatoriosDaReceita(receita){let obrigatorios=[];if(!receita.ingredientes)return[];receita.ingredientes.forEach(ing=>{let nome=(ing.nome||'').toLowerCase().trim();if(!nome)return;if(CONDIMENTOS_TIRAR.some(c=>nome.includes(c)))return;let raiz=paraRaiz(nome);if(raiz.length>=3&&!CONDIMENTOS_TIRAR.includes(raiz))obrigatorios.push(raiz);});return[...new Set(obrigatorios)];}
function getTodosIngredientesUnicos(){const map=new Map();if(!RECEITAS)return[];RECEITAS.forEach(r=>{getIngredientesObrigatoriosDaReceita(r).forEach(raiz=>{if(!map.has(raiz))map.set(raiz,raiz);});});return Array.from(map.keys()).map(k=>({id:k,label:k})).sort((a,b)=>a.label.localeCompare(b.label));}
function abrirModalIngredientesPossuo(){const modal=document.getElementById('modal-ingredientes');const lista=document.getElementById('lista-todos-ingredientes');if(!modal||!lista){alert('Use o index.html novo');return;}if(!document.getElementById('style-topo-fixo-final')){const style=document.createElement('style');style.id='style-topo-fixo-final';style.innerHTML=`#modal-ingredientes > div{ display: flex !important; flex-direction: column !important; max-height: 85vh !important; overflow: hidden !important; } #modal-ingredientes > div > div:first-child{ position: sticky !important; top: 0 !important; background: white !important; z-index: 100 !important; flex-shrink: 0 !important; padding-bottom: 12px !important; border-bottom: 1.5px solid #FFE9DC !important; } #lista-todos-ingredientes{ overflow-y: auto !important; flex: 1 !important; padding-top: 12px !important; }`;document.head.appendChild(style);}const todos=getTodosIngredientesUnicos();lista.innerHTML=todos.map(item=>{const checked=ingredientesSelecionados.includes(item.id)?'checked':'';const bg=checked?'#FFF0E6':'#FFFBF8';return`<label style="display:flex;align-items:center;gap:12px;background:${bg};border:1.5px solid #FFE9DC;padding:12px;border-radius:12px;cursor:pointer;margin-bottom:8px"><input type="checkbox" value="${item.id}" ${checked} onchange="toggleIngredientePossuo(this.value)" style="width:20px;height:20px"><span style="font-weight:600;text-transform:capitalize">${item.label}</span></label>`;}).join('');modal.style.display='flex';}
function fecharModalIngredientesPossuo(){document.getElementById('modal-ingredientes').style.display='none';salvarEFiltrar();}
function filtrarListaIngredientes(){const termo=document.getElementById('busca-ingrediente').value.toLowerCase();document.querySelectorAll('#lista-todos-ingredientes label').forEach(l=>{const txt=l.innerText.toLowerCase();l.style.display=txt.includes(termo)?'flex':'none';});}
function toggleIngredientePossuo(id){if(ingredientesSelecionados.includes(id)){ingredientesSelecionados=ingredientesSelecionados.filter(x=>x!==id);}else{ingredientesSelecionados.push(id);}localStorage.setItem('hk_ing_possuo',JSON.stringify(ingredientesSelecionados));const todos=getTodosIngredientesUnicos();const lista=document.getElementById('lista-todos-ingredientes');if(!lista)return;lista.innerHTML=todos.map(item=>{const checked=ingredientesSelecionados.includes(item.id)?'checked':'';const bg=checked?'#FFF0E6':'#FFFBF8';return`<label style="display:flex;align-items:center;gap:12px;background:${bg};border:1.5px solid #FFE9DC;padding:12px;border-radius:12px;cursor:pointer;margin-bottom:8px"><input type="checkbox" value="${item.id}" ${checked} onchange="toggleIngredientePossuo(this.value)" style="width:20px;height:20px"><span style="font-weight:600;text-transform:capitalize">${item.label}</span></label>`;}).join('');const cont=document.getElementById('contador-ingredientes-possuo');if(cont)cont.innerText=`${ingredientesSelecionados.length} selecionados`;}
function limparSelecaoIngredientes(){ingredientesSelecionados=[];localStorage.setItem('hk_ing_possuo',JSON.stringify([]));abrirModalIngredientesPossuo();salvarEFiltrar();}
function salvarEFiltrar(){const contador=document.getElementById('contador-ingredientes-possuo');if(contador)contador.innerText=`${ingredientesSelecionados.length} selecionados`;if(ingredientesSelecionados.length===0){const box=document.getElementById('receitas-filtradas-possuo');if(box)box.innerHTML='';filtrar();return;}let filtradas=[...RECEITAS];if(categoriaAtiva!=='tudo'){if(categoriaAtiva==='airfryer')filtradas=filtradas.filter(r=>r.airfryer===true);else{const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva;filtradas=filtradas.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome));}}filtradas=filtradas.filter(receita=>{const obrigatorios=getIngredientesObrigatoriosDaReceita(receita);if(obrigatorios.length===0)return false;return obrigatorios.every(ob=>ingredientesSelecionados.includes(ob));});const box=document.getElementById('receitas-filtradas-possuo');if(box){if(filtradas.length===0){box.innerHTML=`<div style="text-align:center;padding:16px;background:#FFF0E6;border-radius:12px">Com <b>${ingredientesSelecionados.join(', ')}</b> ainda não dá pra fazer nenhuma receita completa</div>`;}else{box.innerHTML=`<div style="font-weight:800;margin-bottom:8px">✅ Você consegue fazer ${filtradas.length} receitas com: ${ingredientesSelecionados.join(', ')}</div>`;}}renderReceitas(filtradas,'grid-receitas');}
document.addEventListener('DOMContentLoaded',init);
