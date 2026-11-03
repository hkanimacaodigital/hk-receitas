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

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').then(()=>console.log('SW ok'));
}

function init(){ renderCategorias(); filtrar(); restaurarTimersGlobais(); if(Notification.permission!=='granted') Notification.requestPermission(); }
function renderCategorias(){
  const c=document.getElementById('categorias'); if(!c||!CATEGORIAS||!RECEITAS) return;
  const ord=[...CATEGORIAS].sort((a,b)=>a.nome.localeCompare(b.nome));
  const contar=(id)=>{ if(id==='tudo') return RECEITAS.length; if(id==='airfryer') return RECEITAS.filter(r=>r.airfryer===true).length; const nome=CATEGORIAS.find(x=>x.id===id)?.nome.toLowerCase()||id; return RECEITAS.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)).length; };
  const todas=[{id:'tudo',nome:'Tudo',icone:'✨'},...ord];
  c.innerHTML=todas.map(cat=>`<button class="cat-btn ${categoriaAtiva===cat.id?'ativo':''}" onclick="setCategoria('${cat.id}')">${cat.icone}<br>${cat.nome}<br>(${contar(cat.id)})</button>`).join('');
}
function setCategoria(id){ categoriaAtiva=id; renderCategorias(); filtrar(); }
function getKcal(r){ return r.ingredientes?r.ingredientes.reduce((a,b)=>a+(b.kcal||b.calorias||0),0):0; }
function getTempo(r){ const m=(r.tempo||'').match(/(\d+)/); return m?parseInt(m[1]):999; }
function filtrar(){
  if(!RECEITAS) return; const busca=(document.getElementById('busca')?.value||'').toLowerCase(); const ordem=document.getElementById('ordem')?.value||'padrao';
  let lista=[...RECEITAS];
  if(categoriaAtiva!=='tudo'){ if(categoriaAtiva==='airfryer') lista=lista.filter(r=>r.airfryer===true); else{ const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva; lista=lista.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)); }}
  if(busca) lista=lista.filter(r=>r.titulo.toLowerCase().includes(busca));
  if(ordem==='az') lista.sort((a,b)=>a.titulo.localeCompare(b.titulo)); else if(ordem==='tempo') lista.sort((a,b)=>getTempo(a)-getTempo(b)); else if(ordem==='kcal') lista.sort((a,b)=>getKcal(a)-getKcal(b));
  renderReceitas(lista,'grid-receitas');
}
function renderReceitas(lista, alvoId){
  const cont=document.getElementById(alvoId); if(!cont) return;
  if(lista.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px">Nenhuma receita</div>`; return; }
  cont.innerHTML=lista.map(r=>{ const isFav=favoritos.includes(r.id); return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" onclick="event.stopPropagation();toggleFav('${r.id}')">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div class="card-body"><span class="badge">${r.categoria_principal}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>⏰ ${r.tempo}</span><span>🔥 ${getKcal(r)} kcal</span></div></div></div>`}).join('');
}
function normalizarPasso(p){ if(typeof p==='string') return {texto:p, tempoMin: extrairMin(p)}; return {texto:p.texto||p.passo||'', tempoMin: p.timer||p.tempoMin||extrairMin(p.texto||'')}; }
function extrairMin(t){ const m=(t||'').match(/(\d+)\s*min/); return m?parseInt(m[1]):0; }

function abrirReceita(id){
  const r=RECEITAS.find(x=>x.id===id); if(!r) return; receitaAtual=r;
  if(!recentes.includes(id)){ recentes.unshift(id); recentes=recentes.slice(0,12); localStorage.setItem('hk_rec',JSON.stringify(recentes)); }
  const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo'); const passosNorm=r.passos.map(normalizarPasso);
  corpo.innerHTML=`<img class="capa" src="${r.foto}"><div class="modal-conteudo"><h1 style="font-size:22px;font-weight:900">${r.titulo}</h1>
    <h3 style="margin:20px 0 10px">🛒 Ingredientes</h3><ul style="list-style:none;display:flex;flex-direction:column;gap:8px">${r.ingredientes.map(i=>`<li style="background:#FFFBF8;border:1px solid #FFE9DC;padding:12px;border-radius:12px;display:flex;justify-content:space-between"><span><b>${i.nome||i.name}</b><br><small>${i.qtd||''}</small></span><b>${i.kcal||0} kcal</b></li>`).join('')}</ul>
    <h3 style="margin:24px 0 10px">👨‍🍳 Modo de preparo</h3>
    ${passosNorm.map((p,i)=>{
      const key=`${r.id}-${i}`; const ativo=timersAtivos[key]; const rest=ativo?Math.max(0, Math.floor((ativo.fim - Date.now())/1000)):0;
      const txt=ativo?`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`:`⏱ Timer ${p.tempoMin} min`;
      return `<div class="passo"><input type="checkbox"><div style="flex:1"><div style="font-weight:600">${p.texto}</div>${p.tempoMin>0?`<button class="timer-btn" id="btn-timer-${i}" onclick="iniciarTimer(${p.tempoMin},${i})">${txt}</button><span id="live-${i}" style="margin-left:8px;font-weight:800;color:#FF6B35"></span>`:''}</div></div>`;
    }).join('')}
  </div>`;
  modal.classList.add('mostrar');
}

function fecharModal(){ document.getElementById('modal').classList.remove('mostrar'); }
function toggleFav(id){ if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id); localStorage.setItem('hk_fav',JSON.stringify(favoritos)); filtrar(); }
function toggleFavModal(){ if(receitaAtual) toggleFav(receitaAtual.id); atualizarBtnFav(); }
function atualizarBtnFav(){ if(!receitaAtual) return; const btn=document.getElementById('btn-fav-modal'); if(btn) btn.innerText=favoritos.includes(receitaAtual.id)?'❤️ Favorito':'♡ Favoritar'; }

function iniciarTimer(min, idx){
  if(!receitaAtual) return;
  const key=`${receitaAtual.id}-${idx}`;
  const fim=Date.now()+min*60*1000;
  timersAtivos[key]={fim, titulo:receitaAtual.titulo, passo:idx+1, min, idReceita:receitaAtual.id};
  salvarTimers();
  // ENVIA PRO SERVICE WORKER TOCAR FORA DO APP
  enviarParaSW('SCHEDULE_TIMER', {key, titulo:receitaAtual.titulo, passo:idx+1, min, fim});
  if(Notification.permission!=='granted') Notification.requestPermission();
  // ATUALIZA BOTÃO NA HORA
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
      // atualiza botão da receita aberta
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
    global.innerHTML=`<div style="text-align:center;padding:30px;color:#9A8C83">Nenhum timer ativo</div><div style="text-align:center"><button onclick="limparTodosTimers()" style="background:#1A1A1A;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 ZERAR TUDO</button></div>`;
    return;
  }
  global.innerHTML=chaves.map(key=>{
    const t=timersAtivos[key]; if(!t||!t.fim||isNaN(t.fim)) return '';
    const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60;
    return `<div style="background:white;border:1.5px solid #FFE9DC;border-radius:16px;padding:14px;margin-bottom:10px"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:36px;font-weight:900">⏱ ${m}:${(s+'').padStart(2,'0')}</div><button onclick="cancelarTimerPorChave('${key}')" style="margin-top:8px;padding:8px 14px;border-radius:20px;border:1px solid #E8DDD6;background:white">❌ Cancelar</button></div>`;
  }).join('') + `<div style="text-align:center;margin-top:20px"><button onclick="limparTodosTimers()" style="background:#FF6B35;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 LIMPAR TODOS</button></div>`;
}

function cancelarTimerPorChave(key){ delete timersAtivos[key]; salvarTimers(); enviarParaSW('CANCEL_TIMER', {key}); atualizarPaginaTimers(); if(receitaAtual) abrirReceita(receitaAtual.id); }
function limparTodosTimers(){ localStorage.removeItem('hk_timers'); timersAtivos={}; salvarTimers(); enviarParaSW('CLEAR_ALL', {}); atualizarPaginaTimers(); if(receitaAtual) abrirReceita(receitaAtual.id); alert('Timers zerados!'); }
function mudarPage(nome){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('ativa')); document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo'));
  document.getElementById(`page-${nome}`)?.classList.add('ativa'); document.getElementById(`nav-${nome}`)?.classList.add('ativo');
  if(nome==='favoritos') renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos');
  if(nome==='recentes') renderReceitas(recentes.map(id=>RECEITAS.find(r=>r.id===id)).filter(Boolean),'grid-recentes');
  if(nome==='timer') atualizarPaginaTimers();
}
document.addEventListener('DOMContentLoaded',init);