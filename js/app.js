let categoriaAtiva='tudo', receitaAtual=null;
let favoritos=JSON.parse(localStorage.getItem('hk_fav')||'[]');
let recentes=JSON.parse(localStorage.getItem('hk_rec')||'[]');
let timersAtivos={};
try{
  const raw=JSON.parse(localStorage.getItem('hk_timers')||'{}');
  Object.keys(raw).forEach(k=>{
    const t=raw[k];
    if(t && typeof t.fim==='number' && !isNaN(t.fim) && t.titulo && t.fim > Date.now()){
      timersAtivos[k]=t;
    }
  });
  localStorage.setItem('hk_timers', JSON.stringify(timersAtivos));
}catch(e){ localStorage.removeItem('hk_timers'); timersAtivos={}; }

function salvarTimers(){ localStorage.setItem('hk_timers', JSON.stringify(timersAtivos)); }
function enviarParaSW(type, payload){
  if('serviceWorker' in navigator && navigator.serviceWorker.controller){
    navigator.serviceWorker.controller.postMessage({type, ...payload});
  } else if(navigator.serviceWorker){
    navigator.serviceWorker.ready.then(reg=>{
      if(reg.active) reg.active.postMessage({type, ...payload});
    });
  }
}
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').then(()=>console.log('SW ok')); }

// GARANTE TODAS_RECEITAS - junta tudo
function getReceitasBase(){
  if(window.TODAS_RECEITAS) return window.TODAS_RECEITAS;
  if(window.RECEITAS) return window.RECEITAS;
  if(typeof RECEITAS !== 'undefined') return RECEITAS;
  return [];
}

function init(){ renderCategorias(); filtrar(); restaurarTimersGlobais(); if(Notification.permission!=='granted') Notification.requestPermission(); }

function renderCategorias(){
  const c=document.getElementById('categorias'); if(!c||!CATEGORIAS) return;
  const RECEITAS = getReceitasBase();
  const ord=[...CATEGORIAS].sort((a,b)=>a.nome.localeCompare(b.nome));
  const contar=(id)=>{
    if(id==='tudo') return RECEITAS.length;
    if(id==='airfryer') return RECEITAS.filter(r=>r.airfryer===true).length;
    if(id==='rapida') return RECEITAS.filter(r=>getTempo(r)<=12).length;
    const nome=CATEGORIAS.find(x=>x.id===id)?.nome.toLowerCase()||id;
    return RECEITAS.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)).length;
  };
  const todas=[{id:'tudo',nome:'Tudo',icone:'✨'},...ord];
  c.innerHTML=todas.map(cat=>`<button class="cat-btn ${categoriaAtiva===cat.id?'ativo':''}" onclick="setCategoria('${cat.id}')">${cat.icone}<br>${cat.nome}<br>(${contar(cat.id)})</button>`).join('');
}
function setCategoria(id){ categoriaAtiva=id; renderCategorias(); filtrar(); }
function getTempo(r){ const m=(r.tempo||'').match(/(\d+)/); return m?parseInt(m[1]):999; }

function filtrar(){
  let RECEITAS = getReceitasBase();
  if(!RECEITAS) return;
  const busca=(document.getElementById('busca')?.value||'').toLowerCase();
  const ordem=document.getElementById('ordem')?.value||'padrao';
  let lista=[...RECEITAS];

  if(categoriaAtiva!=='tudo'){
    if(categoriaAtiva==='airfryer') lista=lista.filter(r=>r.airfryer===true);
    else if(categoriaAtiva==='rapida') lista=lista.filter(r=>getTempo(r)<=12);
    else{
      const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva;
      lista=lista.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome));
    }
  }
  if(busca) lista=lista.filter(r=>r.titulo.toLowerCase().includes(busca));
  if(ordem==='az') lista.sort((a,b)=>a.titulo.localeCompare(b.titulo));
  else if(ordem==='tempo') lista.sort((a,b)=>getTempo(a)-getTempo(b));

  window.RECEITAS = RECEITAS;
  renderReceitas(lista,'grid-receitas');
}

function renderReceitas(lista, alvoId){
  const cont=document.getElementById(alvoId); if(!cont) return;
  if(lista.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px">Nenhuma receita</div>`; return; }
  cont.innerHTML=lista.map(r=>{
    const isFav=favoritos.includes(r.id);
    const porcoes = r.porcoes||'';
    const nivel = r.nivel||'';
    const air = r.airfryer ? ' • 🍟' : '';
    return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" onclick="event.stopPropagation();toggleFav('${r.id}')">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div class="card-body"><span class="badge">${r.categoria_principal}${air}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>⏰ ${r.tempo}</span><span>🍽️ ${porcoes}</span><span>📊 ${nivel}</span></div></div></div>`;
  }).join('');
}

function normalizarPasso(p){ if(typeof p==='string') return {texto:p, tempoMin: extrairMin(p)}; return {texto:p.texto||p.passo||'', tempoMin: p.timer||p.tempoMin||extrairMin(p.texto||''), label:p.label||''}; }
function extrairMin(t){ const m=(t||'').match(/(\d+)\s*min/); return m?parseInt(m[1]):0; }
function detalharPasso(p, idx, total){
  let base = p.texto;
  let dica = idx===0 ? "<br><small style='color:#9A8C83'>💡 Dica: Separe todos os ingredientes antes de começar.</small>" : idx===total-1 ? "<br><small style='color:#FF6B35;font-weight:700'>🔥 Finalização: Sirva imediatamente!</small>" : "<br><small style='color:#9A8C83'>👉 Capriche nesse passo.</small>";
  let tempo = p.tempoMin > 0 ? p.tempoMin : 0;
  return {texto: base + dica, tempoMin: tempo, label: p.label || `Passo ${idx+1}`};
}

function compartilharWhatsApp(){
  if(!receitaAtual) return;
  const ingList = receitaAtual.ingredientes.map(i=>`• ${i.nome||i.name} - ${i.qtd||''}`).join('\n');
  const passosList = receitaAtual.passos.map((p,i)=>`${i+1}. ${p.texto||p}`).join('\n');
  const texto = `*${receitaAtual.titulo}* - ${receitaAtual.tempo} - ${receitaAtual.porcoes||''} - ${receitaAtual.nivel||''}\n\n*🛒 INGREDIENTES:*\n${ingList}\n\n*👨‍🍳 MODO DE PREPARO:*\n${passosList}\n\nVeja mais em: hk-receitas.vercel.app`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}

function abrirReceita(id){
  const RECEITAS = getReceitasBase();
  const r=RECEITAS.find(x=>x.id===id); if(!r) return; receitaAtual=r;
  if(!recentes.includes(id)){ recentes.unshift(id); recentes=recentes.slice(0,12); localStorage.setItem('hk_rec',JSON.stringify(recentes)); }
  const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo'); 
  const passosNorm=r.passos.map(normalizarPasso);
  const passosDetalhados=passosNorm.map((p,i)=>detalharPasso(p,i,passosNorm.length));

  corpo.innerHTML=`
  <style>
    .flip-wrapper{ perspective:1200px; }
    .flip-inner{ position:relative; width:100%; transition: transform 0.7s; transform-style: preserve-3d; }
    .flip-inner.virando{ transform: rotateY(180deg); }
    .view{ backface-visibility:hidden; }
    #view-preparo{ position:absolute; top:0; left:0; width:100%; transform: rotateY(180deg); }
    .btn-whatsapp{ width:100%; background:#25D366; color:white; border:none; padding:14px; border-radius:14px; font-weight:900; font-size:15px; margin-top:16px; cursor:pointer; }
    .btn-modo{ width:100%; background:#FF6B35; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:12px; cursor:pointer; box-shadow:0 4px 12px rgba(255,107,53,0.3); }
    .btn-voltar{ width:100%; background:#1A1A1A; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:24px; cursor:pointer; }
    .passo-detalhado{ background:white; border:1.5px solid #FFE9DC; border-radius:16px; padding:16px; margin-bottom:14px; display:flex; gap:12px; align-items:flex-start; }
    .ing-check{ width:22px; height:22px; accent-color:#FF6B35; }
    .ing-item{ transition: all 0.2s; }
    .ing-item.checked{ opacity:0.5; text-decoration: line-through; }
  </style>
  <img class="capa" src="${r.foto}">
  <div class="flip-wrapper">
    <div class="flip-inner" id="flip-inner">
      <div class="view" id="view-ingredientes">
        <div class="modal-conteudo">
          <h1 style="font-size:24px;font-weight:900;line-height:1.2">${r.titulo}</h1>
          <div style="display:flex;gap:8px;margin:12px 0;flex-wrap:wrap">
            <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">⏰ ${r.tempo}</span>
            <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">🍽️ ${r.porcoes||''}</span>
            <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">📊 ${r.nivel||'Fácil'}</span>
            <span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">${r.categoria_principal}</span>
            ${r.airfryer ? `<span style="background:#FFE9DC;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">🍟 Airfryer</span>` : ``}
          </div>
          <h3 style="margin:20px 0 12px;font-size:18px">🛒 Ingredientes (${r.ingredientes.length} itens)</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;padding:0">
            ${r.ingredientes.map((i,idx)=>`<li class="ing-item" id="ing-${idx}" style="background:#FFFBF8;border:1px solid #FFE9DC;padding:14px;border-radius:14px;display:flex;gap:12px;align-items:center">
              <input type="checkbox" class="ing-check" onchange="toggleIngrediente(${idx})">
              <span style="flex:1"><b style="font-size:15px">${i.nome||i.name}</b><br><small style="color:#6B5E57">${i.qtd||''}</small></span>
            </li>`).join('')}
          </ul>
          <button class="btn-whatsapp" onclick="compartilharWhatsApp()">📲 Exportar para WhatsApp</button>
          <button class="btn-modo" onclick="irParaModoPreparo()">👨‍🍳 MODO DE PREPARO →</button>
          <div style="height:30px"></div>
        </div>
      </div>
      <div class="view" id="view-preparo">
        <div class="modal-conteudo">
          <h1 style="font-size:22px;font-weight:900">${r.titulo}</h1>
          <p style="color:#9A8C83;margin:6px 0 16px">Modo de preparo detalhado • ${passosDetalhados.length} passos • ${r.porcoes||''} • ${r.nivel||''}</p>
          ${passosDetalhados.map((p,i)=>{
            const key=`${r.id}-${i}`; const ativo=timersAtivos[key]; const rest=ativo?Math.max(0, Math.floor((ativo.fim - Date.now())/1000)):0;
            const txt=ativo?`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`:(p.tempoMin>0?`⏱ Timer ${p.tempoMin} min`:`✅ Passo`);
            const showBtn = p.tempoMin>0 ? `<button class="timer-btn" id="btn-timer-${i}" onclick="iniciarTimer(${p.tempoMin},${i})" style="margin-top:10px;background:#1A1A1A;color:white;border:none;padding:10px 16px;border-radius:20px;font-weight:800;cursor:pointer">${txt}</button>` : ``;
            return `<div class="passo-detalhado">
              <input type="checkbox" onchange="this.parentElement.style.opacity=this.checked?0.6:1">
              <div style="flex:1">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="color:#FF6B35;font-size:13px;text-transform:uppercase">${p.label}</b><span style="font-size:12px;background:#FFF0E6;padding:4px 8px;border-radius:8px">Passo ${i+1}/${passosDetalhados.length}</span></div>
                <div style="font-weight:600;line-height:1.4;font-size:15px">${p.texto}</div>
                ${showBtn}
              </div>
            </div>`;
          }).join('')}
          <button class="btn-voltar" onclick="voltarIngredientes()">← INGREDIENTES</button>
          <div style="height:30px"></div>
        </div>
      </div>
    </div>
  </div>
  `;
  modal.classList.add('mostrar');
  document.getElementById('flip-inner').classList.remove('virando');
  document.getElementById('view-ingredientes').style.display='block';
  document.getElementById('view-preparo').style.display='none';
  setTimeout(()=>atualizarBtnFav(), 80);
}

function toggleIngrediente(idx){
  const el=document.getElementById(`ing-${idx}`);
  if(el) el.classList.toggle('checked');
}

function irParaModoPreparo(){
  const flip=document.getElementById('flip-inner');
  const v1=document.getElementById('view-ingredientes');
  const v2=document.getElementById('view-preparo');
  flip.classList.add('virando');
  setTimeout(()=>{
    v1.style.display='none';
    v2.style.display='block';
    v2.style.position='relative';
    v2.style.transform='rotateY(180deg)';
    document.getElementById('modal-corpo').scrollTop=0;
  },350);
}
function voltarIngredientes(){
  const flip=document.getElementById('flip-inner');
  const v1=document.getElementById('view-ingredientes');
  const v2=document.getElementById('view-preparo');
  flip.classList.remove('virando');
  setTimeout(()=>{
    v2.style.display='none';
    v1.style.display='block';
    document.getElementById('modal-corpo').scrollTop=0;
  },350);
}
function fecharModal(){ document.getElementById('modal').classList.remove('mostrar'); }

function toggleFav(id){ 
  if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); 
  else favoritos.push(id); 
  localStorage.setItem('hk_fav',JSON.stringify(favoritos)); 
  filtrar(); 
  if(document.getElementById('page-favoritos')?.classList.contains('ativa')){
    const RECEITAS=getReceitasBase();
    renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos');
  }
  if(receitaAtual && receitaAtual.id===id) atualizarBtnFav();
}
function toggleFavModal(){ if(!receitaAtual) return; toggleFav(receitaAtual.id); }
function atualizarBtnFav(){
  let btn = document.getElementById('btn-fav-modal');
  if(!btn){
    const headerBtns = document.querySelectorAll('#modal button');
    for(let b of headerBtns){
      if(b.innerText.includes('Favoritar') || b.innerText.includes('Favorito')){
        btn = b;
        btn.id = 'btn-fav-modal';
        break;
      }
    }
  }
  if(!btn || !receitaAtual) return;
  const isFav=favoritos.includes(receitaAtual.id);
  btn.innerHTML=isFav ? '❤️ Favorito' : '♡ Favoritar';
}

function iniciarTimer(min, idx){
  if(!receitaAtual) return;
  if(min<=0) return;
  const key=`${receitaAtual.id}-${idx}`;
  const fim=Date.now()+min*60*1000;
  timersAtivos[key]={fim, titulo:receitaAtual.titulo, passo:idx+1, min, idReceita:receitaAtual.id};
  salvarTimers();
  enviarParaSW('SCHEDULE_TIMER', {key, titulo:receitaAtual.titulo, passo:idx+1, min, fim});
  if(Notification.permission!=='granted') Notification.requestPermission();
  const btn=document.getElementById(`btn-timer-${idx}`);
  if(btn) btn.innerText=`⏳ ${min}:00 rodando`;
  atualizarPaginaTimers();
}
function restaurarTimersGlobais(){
  setInterval(()=>{
    let mudou=false;
    Object.keys(timersAtivos).forEach(k=>{
      const t=timersAtivos[k]; if(!t||!t.fim||isNaN(t.fim)){ delete timersAtivos[k]; mudou=true; return; }
      const rest=Math.floor((t.fim-Date.now())/1000);
      if(receitaAtual && k.startsWith(receitaAtual.id+'-')){
        const idx=k.split('-').pop();
        const btn=document.getElementById(`btn-timer-${idx}`);
        if(btn){
          if(rest>0) btn.innerText=`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`;
          else btn.innerText=`✅ Finalizado!`;
        }
      }
      if(rest<=0){ delete timersAtivos[k]; mudou=true; }
    });
    if(mudou) salvarTimers();
    if(document.getElementById('page-timer')?.classList.contains('ativa')) atualizarPaginaTimers();
  },1000);
}
function atualizarPaginaTimers(){
  const global=document.getElementById('timer-global'); if(!global) return;
  const chaves=Object.keys(timersAtivos);
  if(chaves.length===0){
    global.innerHTML=`<div style="text-align:center;padding:30px;color:#9A8C83">Nenhum timer ativo</div>`;
    return;
  }
  global.innerHTML=chaves.map(key=>{
    const t=timersAtivos[key]; if(!t||!t.fim||isNaN(t.fim)) return '';
    const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60;
    return `<div style="background:white;border:1.5px solid #FFE9DC;border-radius:16px;padding:14px;margin-bottom:10px"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:36px;font-weight:900">⏱ ${m}:${(s+'').padStart(2,'0')}</div><button onclick="cancelarTimerPorChave('${key}')" style="margin-top:8px;padding:8px 14px;border-radius:20px;border:1px solid #E8DDD6;background:white">❌ Cancelar</button></div>`;
  }).join('') + `<div style="text-align:center;margin-top:20px"><button onclick="limparTodosTimers()" style="background:#FF6B35;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 LIMPAR TODOS</button></div>`;
}
function cancelarTimerPorChave(key){ delete timersAtivos[key]; salvarTimers(); enviarParaSW('CANCEL_TIMER', {key}); atualizarPaginaTimers(); }
function limparTodosTimers(){ localStorage.removeItem('hk_timers'); timersAtivos={}; salvarTimers(); enviarParaSW('CLEAR_ALL', {}); atualizarPaginaTimers(); alert('Timers zerados!'); }
function mudarPage(nome){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('ativa')); document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo'));
  document.getElementById(`page-${nome}`)?.classList.add('ativa'); document.getElementById(`nav-${nome}`)?.classList.add('ativo');
  const RECEITAS=getReceitasBase();
  if(nome==='favoritos') renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos');
  if(nome==='recentes') renderReceitas(recentes.map(id=>RECEITAS.find(r=>r.id===id)).filter(Boolean),'grid-recentes');
  if(nome==='timer') atualizarPaginaTimers();
}
document.addEventListener('DOMContentLoaded',init);
