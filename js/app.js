let categoriaAtiva='tudo', receitaAtual=null;
let favoritos=JSON.parse(localStorage.getItem('hk_fav')||'[]');
let recentes=JSON.parse(localStorage.getItem('hk_rec')||'[]');
let checks=JSON.parse(localStorage.getItem('hk_checks')||'{}');
let finalizadas=JSON.parse(localStorage.getItem('hk_finalizadas')||'{}');
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

// ===== AJUDA IPHONE: verifica se existe antes de usar =====
function temNotificacao(){ try{ return typeof Notification !== 'undefined' && typeof Notification.requestPermission === 'function'; }catch(e){ return false; } }
function temVibrar(){ try{ return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'; }catch(e){ return false; } }
function vibrar(p){ try{ if(temVibrar()) navigator.vibrate(p); }catch(e){} }

const VAPID_PUBLIC = 'BJJeTOZZ0hTPQXA1EVlz1U7A62lhMLFIQRZaLazAN0vkxZJYJxNt6nozf74KheVc-kTv2jCyp_danJS-5buxlwc';
function urlBase64ToUint8Array(base64String){
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for(let i=0; i<rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}
async function getPushSubscription(){
  if(!('serviceWorker' in navigator) || !('PushManager' in window)) return null;
  try{
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if(!sub){
      sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC) });
    }
    return sub;
  }catch(e){ console.log('Push falhou', e); return null; }
}
async function agendarPushServidor(t, key){
  try{
    const sub = await getPushSubscription();
    if(!sub) return;
    await fetch('/api/agendar', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ subscription: sub, titulo: t.titulo, passo: t.passo, key, idReceita: t.idReceita, fim: t.fim }) });
  }catch(e){ console.log('Push não agendado', e); }
}
async function cancelarPushServidor(key){
  try{
    const sub = await getPushSubscription();
    if(!sub) return;
    await fetch('/api/cancelar', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ subscription: sub, key }) }).catch(()=>{});
  }catch(e){}
}
let timersFinalizados = JSON.parse(localStorage.getItem('hk_timers_finalizados')||'{}');
let alarmesTocando = {};
try{
  const raw2=JSON.parse(localStorage.getItem('hk_timers')||'{}');
  Object.keys(raw2).forEach(k=>{
    const t=raw2[k];
    if(t && t.titulo && !t.pausado && t.fim && t.fim <= Date.now() && !timersFinalizados[k]){ timersFinalizados[k] = {...t, finalizadoEm: t.fim}; }
  });
  if(Object.keys(timersFinalizados).length>0) localStorage.setItem('hk_timers_finalizados', JSON.stringify(timersFinalizados));
}catch(e){}
function salvarFinalizados(){ try{ localStorage.setItem('hk_timers_finalizados', JSON.stringify(timersFinalizados)); }catch(e){} }
function tocarAlarme20s(key){
  if(alarmesTocando[key]) return;
  try{ desbloquearAudio(); }catch(e){}
  vibrar([1000,300,1000,300,1000,300,1000,300,1000,300,1000,300,1000]);
  let vezes = 0;
  const beepUmaVez = ()=>{
    try{
      if(!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.frequency.value = 880; osc.type = 'sine';
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.5, t+0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, t+0.7);
      osc.start(t); osc.stop(t+0.7);
    }catch(e){}
  };
  beepUmaVez();
  alarmesTocando[key] = setInterval(()=>{
    vezes++;
    beepUmaVez();
    vibrar([500,200,500]);
    if(vezes >= 20){ clearInterval(alarmesTocando[key]); delete alarmesTocando[key]; }
  }, 1000);
}
function pararAlarme(key, idx){
  if(alarmesTocando[key]){ clearInterval(alarmesTocando[key]); delete alarmesTocando[key]; }
  vibrar(0);
  const t = timersFinalizados[key] || timersAtivos[key];
  const minOriginal = t ? t.min : 0;
  delete timersFinalizados[key];
  delete timersAtivos[key];
  salvarFinalizados(); salvarTimers();
  enviarParaSW({type:'CANCEL_TIMER', key});
  cancelarPushServidor(key);
  if(typeof idx !== 'undefined' && receitaAtual){ renderControlesTimer(key, idx, minOriginal, true); }
  atualizarPaginaTimers();
}
if('serviceWorker' in navigator){
  try{
    navigator.serviceWorker.addEventListener('message', (e)=>{
      if(e.data && e.data.type === 'ABRIR_TIMER_FINALIZADO' && e.data.idReceita){ voltarParaModoPreparo(e.data.idReceita, e.data.key); }
    });
  }catch(e){}
}
function salvarTimers(){ try{ localStorage.setItem('hk_timers', JSON.stringify(timersAtivos)); }catch(e){} }
function salvarChecks(){ try{ localStorage.setItem('hk_checks', JSON.stringify(checks)); }catch(e){} }
function salvarFinalizadas(){ try{ localStorage.setItem('hk_finalizadas', JSON.stringify(finalizadas)); }catch(e){} }
function getReceitasBase(){ if(window.TODAS_RECEITAS) return window.TODAS_RECEITAS; if(window.RECEITAS) return window.RECEITAS; return []; }
function init(){
  try{ renderCategorias(); }catch(e){}
  try{ filtrar(); }catch(e){}
  try{ restaurarTimersGlobais(); }catch(e){}
  // CORREÇÃO IPHONE: não pede notificação no init, senão trava no Safari
  try{ getPushSubscription().catch(()=>{}); }catch(e){}
  try{ history.pushState({tela:'home'}, '', location.href); }catch(e){}
  // CORREÇÃO IPHONE: se voltou pro app com timer vencido, já marca como finalizado
  try{ checarTimersVencidos(); }catch(e){}
}
function checarTimersVencidos(){
  let mudou=false;
  Object.keys(timersAtivos).forEach(k=>{
    const t=timersAtivos[k];
    if(t && !t.pausado && t.fim && t.fim <= Date.now()){
      timersFinalizados[k]={...t, finalizadoEm: t.fim};
      delete timersAtivos[k]; mudou=true;
    }
  });
  if(mudou){ salvarTimers(); salvarFinalizados(); }
}
let audioCtx = null;
let wakeLock = null;
function desbloquearAudio(){
  try{
    if(!audioCtx){ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  }catch(e){}
}
document.addEventListener('click', desbloquearAudio, {once:false});
document.addEventListener('touchstart', desbloquearAudio, {once:false});
function tocarAlarme(){
  try{ desbloquearAudio(); }catch(e){}
  vibrar([500,200,500,200,500,200,1000]);
  try{
    if(audioCtx){
      for(let i=0; i<3; i++){
        const t = audioCtx.currentTime + i*0.8;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 880; osc.type = 'sine';
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.5, t+0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, t+0.7);
        osc.start(t); osc.stop(t+0.7);
      }
    }
  }catch(e){}
  try{ const a = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'); a.play().catch(()=>{}); }catch(e){}
}
function notificarFim(t, key){
  try{ tocarAlarme20s(key); }catch(e){}
  if('serviceWorker' in navigator){
    try{
      navigator.serviceWorker.ready.then(reg=>{
        reg.showNotification(`⏰ Timer finalizado!`, {
          body: `${t.titulo} - Passo ${t.passo} - Toque para parar`,
          icon: './assets/icon-192.png',
          badge: './assets/icon-192.png',
          tag: key,
          requireInteraction: true,
          renotify: true,
          vibrate: [1000,300,1000,300,1000,300,1000,300,1000,300,1000],
          silent: false,
          data: {key, idReceita: t.idReceita}
        });
      }).catch(()=>{});
    }catch(e){}
  }
  try{
    if(temNotificacao() && Notification.permission === 'granted' && !('serviceWorker' in navigator)){
      const n = new Notification(`⏰ Timer finalizado!`, { body: `${t.titulo} - Passo ${t.passo}`, tag: key, requireInteraction: true });
      n.onclick = () => { window.focus(); n.close(); if(t.idReceita) voltarParaModoPreparo(t.idReceita, key); };
    }
  }catch(e){}
}
function testarNotificacao(){
  if(!temNotificacao()){ alert('Esse navegador não suporta notificação. No iPhone, instale o app na Tela de Início: Compartilhar > Adicionar à Tela de Início.'); return; }
  if(Notification.permission !== 'granted'){
    Notification.requestPermission().then(p=>{
      if(p !== 'granted') alert('Você bloqueou a notificação! Vai em Ajustes > Notificações > Permitir');
      else alert('Permissão liberada! Clica de novo em testar.');
    }).catch(()=>{});
    return;
  }
  try{
    navigator.serviceWorker.ready.then(reg=>{
      reg.showNotification('⏰ TESTE', {
        body: 'Se você viu isso, a notificação está funcionando! Toque para abrir',
        icon: './assets/icon-192.png',
        badge: './assets/icon-192.png',
        vibrate: [1000,300,1000,300,1000],
        requireInteraction: true,
        silent: false,
        tag: 'teste-hk',
        data: {key:'teste', idReceita:''}
      });
      alert('Notificação de teste enviada! Olha a barra de notificação do celular.');
    });
  }catch(e){ alert('Erro teste: '+e.message); }
}
async function testarPush(){
  try{
    const sub = await getPushSubscription();
    if(!sub){ alert('Push não ativado. No iPhone só funciona com app instalado na Tela de Início.'); return; }
    const res = await fetch('/api/agendar', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ subscription: sub, titulo: 'TESTE PUSH', passo: 1, key: 'teste-push-'+Date.now(), idReceita: '', fim: Date.now()+10000 }) });
    const j = await res.json();
    alert('Push de teste agendado! Fecha o app agora e espera 10 segundos. Tem que vibrar mesmo com app fechado. ' + JSON.stringify(j));
  }catch(e){ alert('Erro push: '+e.message); }
}
async function travarTelaAcesa(){
  try{ if('wakeLock' in navigator && !wakeLock){ wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', ()=> wakeLock = null); } }catch(e){}
}
document.addEventListener('visibilitychange', ()=>{ if(!document.hidden){ try{ travarTelaAcesa(); }catch(e){} try{ checarTimersVencidos(); }catch(e){} } });
if('serviceWorker' in navigator){
  try{
    navigator.serviceWorker.register('sw.js?v=9').then(reg=>{ reg.update(); if(reg.waiting) reg.waiting.postMessage({type:'SKIP_WAITING'}); }).catch(()=>{});
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', ()=>{ if(!refreshing){ refreshing = true; window.location.reload(); } });
  }catch(e){}
}
function enviarParaSW(msg){
  if(!('serviceWorker' in navigator)) return;
  try{
    navigator.serviceWorker.ready.then(reg => {
      if(reg.active) reg.active.postMessage(msg);
      else if(navigator.serviceWorker.controller) navigator.serviceWorker.controller.postMessage(msg);
    }).catch(()=>{});
  }catch(e){}
}
function renderCategorias(){
  const c=document.getElementById('categorias'); if(!c||!CATEGORIAS) return;
  const RECEITAS=getReceitasBase();
  const ord=[...CATEGORIAS].sort((a,b)=>a.nome.localeCompare(b.nome));
  const contar=(id)=>{ if(id==='tudo') return RECEITAS.length; if(id==='airfryer') return RECEITAS.filter(r=>r.airfryer===true).length; if(id==='rapida') return RECEITAS.filter(r=>getTempo(r)<=12).length; const nome=CATEGORIAS.find(x=>x.id===id)?.nome.toLowerCase()||id; return RECEITAS.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)).length; };
  c.innerHTML=[{id:'tudo',nome:'Tudo',icone:'✨'},...ord].map(cat=>`<button class="cat-btn ${categoriaAtiva===cat.id?'ativo':''}" onclick="setCategoria('${cat.id}')">${cat.icone}<br>${cat.nome}<br>(${contar(cat.id)})</button>`).join('');
}
function setCategoria(id){ categoriaAtiva=id; renderCategorias(); filtrar(); }
function getTempo(r){ const m=(r.tempo||'').match(/(\d+)/); return m?parseInt(m[1]):999; }
function calcularNivel(r){
  let pontos=0;
  const tempo=getTempo(r);
  const nIng=(r.ingredientes||[]).length;
  const nPassos=(r.passos||[]).length;
  const texto=(r.passos||[]).map(p=>p.texto||p.passo||p).join(' ').toLowerCase();
  if(tempo>90) pontos+=2; else if(tempo>45) pontos+=1;
  if(nIng>15) pontos+=2; else if(nIng>10) pontos+=1;
  if(nPassos>7) pontos+=2; else if(nPassos>5) pontos+=1;
  if(texto.includes('pressão')||texto.includes('pressao')||texto.includes('merengue')||texto.includes('caramelo')||texto.includes('caramelizar')||texto.includes('ponto de brigadeiro')||texto.includes('fritura por imersão')||texto.includes('fermentação')||texto.includes('fermentacao')||texto.includes('sovar')||texto.includes('folhear')||texto.includes('chantilly')) pontos+=1;
  if(pontos<=2) return 'Fácil';
  if(pontos<=4) return 'Médio';
  return 'Difícil';
}
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
    lista.sort((a,b)=>{ const pa = peso[calcularNivel(a).toLowerCase()] || 2; const pb = peso[calcularNivel(b).toLowerCase()] || 2; return pa - pb; });
  }
  window.RECEITAS=RECEITAS; renderReceitas(lista,'grid-receitas');
}
function renderReceitas(lista, alvoId){
  const cont=document.getElementById(alvoId); if(!cont) return;
  if(lista.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px">Nenhuma receita</div>`; return; }
  cont.innerHTML=lista.map(r=>{ const isFav=favoritos.includes(r.id); return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" data-fav-id="${r.id}" onclick="event.stopPropagation();toggleFav('${r.id}');return false;">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div class="card-body"><span class="badge">${r.categoria_principal}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>⏰ ${r.tempo}</span><span>🍽️ ${r.porcoes||''}</span><span>📊 ${calcularNivel(r)}</span></div></div></div>`}).join('');
}
function normalizarPasso(p){ if(typeof p==='string') return {texto:p, tempoMin: extrairMin(p), dica:''}; return {texto:p.texto||p.passo||'', tempoMin: p.timer||p.tempoMin||extrairMin(p.texto||''), label:p.label||'', dica:p.dica||''}; }
function extrairMin(t){ const m=(t||'').match(/(\d+)\s*min/); return m?parseInt(m[1]):0; }
function detalharPasso(p, idx, total){
  let base = p.texto;
  let dica = p.dica ? "<br><small style='color:#9A8C83'>💡 Dica: " + p.dica + "</small>" : "";
  return {texto: base + dica, tempoMin: p.tempoMin>0?p.tempoMin:0, label: p.label || `Passo ${idx+1}`, dica: p.dica||''};
}
function compartilharWhatsApp(){
  if(!receitaAtual) return;
  const ingList = receitaAtual.ingredientes.map(i=>`• ${i.nome||i.name} - ${i.qtd||''}`).join('\n');
  const passosList = receitaAtual.passos.map((p,i)=>`${i+1}. ${p.texto||p}`).join('\n');
  const texto = `*${receitaAtual.titulo}* - ${receitaAtual.tempo}\n\n*🛒 INGREDIENTES:*\n${ingList}\n\n*👨‍🍳 MODO:*\n${passosList}\n\n hk-receitas.vercel.app`;
  window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
}
function getCheckReceita(id){ if(!checks[id]) checks[id]={ing:[],passos:[]}; return checks[id]; }
function formatarData(iso){
  try{ const d=new Date(iso); return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})+' às '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}); }catch(e){ return iso; }
}
function formatarDataCurta(iso){ try{ return new Date(iso).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'}); }catch(e){ return iso; } }
function htmlHistoricoFinalizadas(id){
  const hist = finalizadas[id]||[];
  if(hist.length===0) return '';
  const ordenado=[...hist].sort((a,b)=>new Date(b)-new Date(a));
  if(ordenado.length===1){
    return `<div style="background:#E8F5E9;border:1.5px solid #C8E6C9;border-radius:14px;padding:12px;margin:12px 0"><div style="display:flex;justify-content:space-between;align-items:center"><b>✅ Feita 1x</b><button onclick="event.stopPropagation();limparHistoricoReceita('${id}')" style="background:white;border:1px solid #E8DDD6;padding:6px 10px;border-radius:20px;font-size:11px;font-weight:700">🗑️ Limpar histórico</button></div><div style="font-size:12px;color:#2E7D32;margin-top:4px">Última vez: ${formatarData(ordenado[0])}</div></div>`;
  }
  return `<div style="background:#E8F5E9;border:1.5px solid #C8E6C9;border-radius:14px;padding:12px;margin:12px 0"><div style="display:flex;justify-content:space-between;align-items:center"><b>✅ Feita ${hist.length}x</b><button onclick="event.stopPropagation();limparHistoricoReceita('${id}')" style="background:white;border:1px solid #E8DDD6;padding:6px 10px;border-radius:20px;font-size:11px;font-weight:700">🗑️ Limpar histórico</button></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px"><span style="font-size:12px;color:#2E7D32">Última vez: ${formatarData(ordenado[0])}</span><button id="btn-hist-${id}" onclick="event.stopPropagation();toggleHistorico('${id}')" style="background:white;border:1px solid #C8E6C9;padding:5px 10px;border-radius:20px;font-size:11px;font-weight:800;color:#2E7D32">▼ Ver todas</button></div><div id="lista-hist-${id}" style="display:none;margin-top:8px;flex-direction:column;gap:4px">${ordenado.map((d,i)=>`<div style="font-size:12px;background:white;padding:6px 10px;border-radius:8px">${ordenado.length-i}ª vez: ${formatarData(d)}</div>`).join('')}</div></div>`;
}
function toggleHistorico(id){
  const lista=document.getElementById(`lista-hist-${id}`); const btn=document.getElementById(`btn-hist-${id}`);
  if(!lista || !btn) return;
  const aberto=lista.style.display!=='none' && lista.style.display!=='';
  if(aberto){ lista.style.display='none'; btn.innerHTML='▼ Ver todas'; } else { lista.style.display='flex'; btn.innerHTML='▲ Ocultar'; }
}
function toggleCheckIng(idx, el){
  if(!receitaAtual) return;
  const c=getCheckReceita(receitaAtual.id); c.ing[idx]=!!el.checked; salvarChecks();
  const li=el.closest('li'); if(li) li.style.opacity=el.checked?'0.5':'1';
}
function toggleCheckPasso(idx, el){
  if(!receitaAtual) return;
  const c=getCheckReceita(receitaAtual.id); c.passos[idx]=!!el.checked; salvarChecks();
  const div=el.closest('.passo-detalhado'); if(div) div.classList.toggle('feito', !!el.checked);
  atualizarBotaoFinalizar();
}
function atualizarBotaoFinalizar(){
  const btn=document.getElementById('btn-finalizar'); if(!btn || !receitaAtual) return;
  const c=getCheckReceita(receitaAtual.id); const total=receitaAtual.passos.length; const marcados=(c.passos||[]).filter(Boolean).length; const todos=total>0 && marcados===total;
  btn.disabled=!todos; btn.style.opacity=todos?'1':'0.4'; btn.style.background=todos?'#22C55E':'#9A8C83'; btn.style.cursor=todos?'pointer':'not-allowed'; btn.innerHTML='✅ RECEITA FINALIZADA';
  const info=document.getElementById('info-finalizar'); if(info) info.innerHTML=todos?'Todos os passos concluídos! Pode finalizar 🎉':`Faltam ${total-marcados} passo(s) para finalizar (${marcados}/${total})`;
}
function finalizarReceita(){
  if(!receitaAtual) return;
  const c=getCheckReceita(receitaAtual.id); const total=receitaAtual.passos.length;
  if((c.passos||[]).filter(Boolean).length!==total){ alert('Tique todos os passos do modo de preparo para finalizar!'); return; }
  if(!finalizadas[receitaAtual.id]) finalizadas[receitaAtual.id]=[];
  finalizadas[receitaAtual.id].push(new Date().toISOString()); salvarFinalizadas();
  delete checks[receitaAtual.id]; salvarChecks();
  const totalVezes=finalizadas[receitaAtual.id].length;
  alert(`🎉 Parabéns! Receita finalizada!\n\nVocê já fez "${receitaAtual.titulo}" ${totalVezes}x`);
  renderFinalizadas(); const id=receitaAtual.id; abrirReceita(id);
}
function limparHistoricoReceita(id){
  if(!confirm('Apagar todo o histórico dessa receita na aba Finalizadas?')) return;
  delete finalizadas[id]; salvarFinalizadas(); renderFinalizadas();
  if(receitaAtual && receitaAtual.id===id) abrirReceita(id);
}
function renderFinalizadas(){
  const cont=document.getElementById('grid-finalizadas'); const resumo=document.getElementById('resumo-finalizadas'); if(!cont) return;
  const RECEITAS=getReceitasBase(); const ids=Object.keys(finalizadas).filter(id=>(finalizadas[id]||[]).length>0);
  const totalVezes=ids.reduce((s,id)=>s+(finalizadas[id].length||0),0);
  if(resumo){ if(ids.length===0) resumo.innerHTML=''; else resumo.innerHTML=`<div style="background:#FFF0E6;border-radius:14px;padding:12px;font-weight:800">🏆 Você já finalizou <b>${totalVezes} receitas</b> • ${ids.length} receita(s) diferente(s)</div>`; }
  if(ids.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px;color:#9A8C83">Nenhuma receita finalizada ainda.<br>Finalize uma receita no modo de preparo para aparecer aqui! ✅</div>`; return; }
  ids.sort((a,b)=>new Date(finalizadas[b][finalizadas[b].length-1])-new Date(finalizadas[a][finalizadas[a].length-1]));
  cont.innerHTML=ids.map(id=>{
    const r=RECEITAS.find(x=>x.id===id); if(!r) return '';
    const hist=[...finalizadas[id]].sort((a,b)=>new Date(b)-new Date(a)); const isFav=favoritos.includes(r.id);
    return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" data-fav-id="${r.id}" onclick="event.stopPropagation();toggleFav('${r.id}');return false;">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div style="position:absolute;top:8px;left:8px;background:#22C55E;color:white;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:800">✅ Feita ${hist.length}x</div><div class="card-body"><span class="badge">${r.categoria_principal}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>🕒 Última: ${formatarDataCurta(hist[0])}</span></div><div style="font-size:11px;color:#9A8C83;margin-top:4px">Primeira: ${formatarDataCurta(hist[hist.length-1])}</div></div></div>`;
  }).join('');
}
function renderRecentes(){
  const RECEITAS=getReceitasBase(); const cont=document.getElementById('grid-recentes'); if(!cont) return;
  renderReceitas(recentes.map(id=>RECEITAS.find(r=>r.id===id)).filter(Boolean),'grid-recentes');
}
function atualizarTodasAbasFav(){ if(typeof ingredientesSelecionados !== 'undefined' && ingredientesSelecionados.length > 0){ try{ salvarEFiltrar(); }catch(e){ try{ filtrar(); }catch(e2){} } } else { try{ filtrar(); }catch(e){} } try{ atualizarGridFavoritos(); }catch(e){} try{ renderRecentes(); }catch(e){} try{ renderFinalizadas(); }catch(e){} try{ atualizarBotaoFavCima(); }catch(e){} }
function abrirReceita(id){
  const RECEITAS=getReceitasBase(); const r=RECEITAS.find(x=>x.id===id); if(!r) return; receitaAtual=r;
  if(!recentes.includes(id)){ recentes.unshift(id); recentes=recentes.slice(0,12); try{ localStorage.setItem('hk_rec',JSON.stringify(recentes)); }catch(e){} }
  try{ history.pushState({tela:'receita', id}, '', location.href); }catch(e){}
  const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo');
  const passosNorm=r.passos.map(normalizarPasso); const passosDetalhados=passosNorm.map((p,i)=>detalharPasso(p,i,passosNorm.length)); const chk=getCheckReceita(r.id);
  corpo.innerHTML=`
  <style>
    .flip-wrapper{ perspective:1200px; } .flip-inner{ position:relative; width:100%; transition: transform 0.7s; transform-style: preserve-3d; }
    .flip-inner.virando{ transform: rotateY(180deg); } .view{ backface-visibility:hidden; }
    #view-preparo{ position:absolute; top:0; left:0; width:100%; transform: rotateY(180deg); }
    .btn-whatsapp{ width:100%; background:#25D366; color:white; border:none; padding:14px; border-radius:14px; font-weight:900; font-size:15px; margin-top:16px; cursor:pointer; }
    .btn-modo{ width:100%; background:#FF6B35; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:12px; cursor:pointer; }
    .btn-voltar{ width:100%; background:#1A1A1A; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:24px; cursor:pointer; }
    .btn-finalizar{ width:100%; background:#9A8C83; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:16px; margin-top:12px; cursor:pointer; }
    .passo-detalhado{ background:white; border:1.5px solid #FFE9DC; border-radius:16px; padding:16px; margin-bottom:14px; display:flex; gap:12px; }
    .passo-detalhado.feito{ opacity:0.55; }
    .timer-controls{ display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; align-items:center; }
    .timer-btn-main{ background:#1A1A1A; color:white; border:none; padding:10px 18px; border-radius:20px; font-weight:800; cursor:pointer; }
    .timer-btn-sec{ background:white; color:#1A1A1A; border:1.5px solid #E8DDD6; padding:8px 14px; border-radius:20px; font-weight:700; cursor:pointer; font-size:12px; }
  </style>
  <img class="capa" src="${r.foto}">
  <div class="flip-wrapper"><div class="flip-inner" id="flip-inner">
    <div class="view" id="view-ingredientes"><div class="modal-conteudo">
      <h1 style="font-size:24px;font-weight:900">${r.titulo}</h1>
      <div style="display:flex;gap:8px;margin:12px 0;flex-wrap:wrap"><span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">⏰ ${r.tempo}</span><span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">🍽️ ${r.porcoes||''}</span><span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">📊 ${calcularNivel(r)}</span></div>
      ${htmlHistoricoFinalizadas(r.id)}
      <h3 style="margin:20px 0 12px">🛒 Ingredientes (${r.ingredientes.length})</h3>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;padding:0">
        ${r.ingredientes.map((i,idx)=>{ const marcado=!!(chk.ing||[])[idx]; return `<li style="background:#FFFBF8;border:1px solid #FFE9DC;padding:14px;border-radius:14px;display:flex;gap:12px;opacity:${marcado?'0.5':'1'}"><input type="checkbox" ${marcado?'checked':''} onchange="toggleCheckIng(${idx},this)" style="width:22px;height:22px;accent-color:#FF6B35;flex-shrink:0"><span style="${marcado?'text-decoration:line-through':''}"><b>${i.nome||i.name}</b><br><small>${i.qtd||''}</small></span></li>`; }).join('')}
      </ul>
      <button class="btn-whatsapp" onclick="compartilharWhatsApp()">📲 Exportar WhatsApp</button>
      <button class="btn-modo" onclick="irParaModoPreparo()">👨‍🍳 MODO DE PREPARO →</button><div style="height:30px"></div>
    </div></div>
    <div class="view" id="view-preparo"><div class="modal-conteudo">
      <h1 style="font-size:22px;font-weight:900">${r.titulo}</h1>
      ${passosDetalhados.map((p,i)=>{
        const key=`${r.id}-${i}`; const t=timersAtivos[key]; let htmlBtns='';
        if(timersFinalizados[key]){ htmlBtns=`<button class="timer-btn-main" style="background:#22C55E" id="btn-main-${i}">✅ FINALIZADO - APERTE PARAR</button><button class="timer-btn-sec" style="background:#FF6B35;color:white;border-color:#FF6B35" onclick="pararAlarme('${key}',${i})">⏹️ PARAR ALARME</button>`; }
        else if(!t){ if(p.tempoMin>0) htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}" onclick="iniciarTimer(${p.tempoMin},${i})">⏱ Timer ${p.tempoMin} min</button>`; else htmlBtns=`<span style="font-size:12px;color:#9A8C83">Sem timer</span>`; }
        else if(t.pausado){ const m=Math.floor(t.restante/60); const s=t.restante%60; htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}">⏸️ ${m}:${(s+'').padStart(2,'0')} pausado</button><button class="timer-btn-sec" onclick="continuarTimer('${key}',${i})">▶️ Continuar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${i},${t.min})">🔄 Zerar</button>`; }
        else{ const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60; htmlBtns=`<button class="timer-btn-main" id="btn-main-${i}">⏳ ${m}:${(s+'').padStart(2,'0')} rodando</button><button class="timer-btn-sec" onclick="pausarTimer('${key}',${i})">⏸️ Pausar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${i},${t.min})">🔄 Zerar</button>`; }
        const marcadoPasso=!!(chk.passos||[])[i];
        return `<div class="passo-detalhado ${marcadoPasso?'feito':''}"><input type="checkbox" ${marcadoPasso?'checked':''} onchange="toggleCheckPasso(${i},this)" style="width:22px;height:22px;accent-color:#FF6B35;flex-shrink:0"><div style="flex:1"><b style="color:#FF6B35;font-size:13px">${p.label}</b> <span style="font-size:12px;background:#FFF0E6;padding:4px 8px;border-radius:8px">Passo ${i+1}/${passosDetalhados.length}</span><div style="font-weight:600;margin-top:6px;${marcadoPasso?'text-decoration:line-through':''}">${p.texto}</div><div class="timer-controls" id="controls-${i}">${htmlBtns}</div></div></div>`;
      }).join('')}
      <button class="btn-voltar" onclick="voltarIngredientes()">← INGREDIENTES</button>
      <button id="btn-finalizar" class="btn-finalizar" onclick="finalizarReceita()" disabled>✅ RECEITA FINALIZADA</button>
      <div id="info-finalizar" style="text-align:center;font-size:12px;color:#9A8C83;margin-top:8px"></div>
      <div style="height:30px"></div>
    </div></div>
  </div></div>`;
  modal.classList.add('mostrar');
  document.getElementById('flip-inner').classList.remove('virando');
  document.getElementById('view-ingredientes').style.display='block';
  document.getElementById('view-preparo').style.display='none';
  rolarTopoModal(); atualizarBotaoFavCima(); atualizarBotaoFinalizar();
}
function rolarTopoModal(){ const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo'); if(modal) modal.scrollTo({top:0, behavior:'smooth'}); if(corpo) corpo.scrollTo({top:0, behavior:'smooth'}); window.scrollTo({top:0, behavior:'smooth'}); }
function irParaModoPreparo(){ const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); flip.classList.add('virando'); rolarTopoModal(); setTimeout(()=>{ v1.style.display='none'; v2.style.display='block'; v2.style.position='relative'; v2.style.transform='rotateY(180deg)'; rolarTopoModal(); atualizarBotaoFinalizar(); },350); }
function voltarIngredientes(){ const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); flip.classList.remove('virando'); rolarTopoModal(); setTimeout(()=>{ v2.style.display='none'; v1.style.display='block'; rolarTopoModal(); },350); }
function fecharModal(){ try{ document.getElementById('modal').classList.remove('mostrar'); }catch(e){} receitaAtual=null; }
function getBotaoFavCima(){ try{ return document.getElementById('rFavBtn') || document.getElementById('btn-fav-topo') || document.querySelector('.btn-fav-topo') || document.querySelector('[data-fav-topo]'); }catch(e){ return null; } }
function atualizarBotaoFavCima(){
  const btn = getBotaoFavCima(); if(!btn) return;
  if(!receitaAtual){ btn.innerHTML = '♡ Favoritar'; btn.style.background=''; btn.style.color=''; return; }
  const isFav = favoritos.includes(receitaAtual.id);
  btn.innerHTML = isFav ? '❤️ Favoritada' : '♡ Favoritar';
  btn.style.background = isFav ? '#FF6B35' : '#E8DDD6'; btn.style.color = isFav ? 'white' : '#333';
}
function atualizarBotaoFavDentro(){ atualizarBotaoFavCima(); }
function atualizarGridFavoritos(){ const RECEITAS=getReceitasBase(); const gridFav=document.getElementById('grid-favoritos'); if(gridFav) renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos'); }
function toggleFav(id){ if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id); try{ localStorage.setItem('hk_fav',JSON.stringify(favoritos)); }catch(e){} atualizarTodasAbasFav(); }
function toggleFavAtual(){ if(!receitaAtual) return; const id=receitaAtual.id; if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id); try{ localStorage.setItem('hk_fav',JSON.stringify(favoritos)); }catch(e){} atualizarBotaoFavCima(); atualizarTodasAbasFav(); }
window.addEventListener('popstate', function(){ const modalAberto=document.getElementById('modal')?.classList.contains('mostrar'); if(modalAberto){ fecharModal(); try{ history.pushState({tela:'home'}, '', location.href); }catch(e){} } else { try{ history.pushState({tela:'home'}, '', location.href); }catch(e){} } });
// ===== TIMER - CORRIGIDO PRO IPHONE =====
function iniciarTimer(min, idx){
  try{
    if(!receitaAtual||!min||min<=0) return;
    const key=`${receitaAtual.id}-${idx}`;
    if(timersFinalizados[key]){ alert('⏰ Esse timer já finalizou! Aperte ⏹️ PARAR ALARME para poder ligar de novo.'); return; }
    try{ desbloquearAudio(); }catch(e){}
    try{ travarTelaAcesa(); }catch(e){}
    // NÃO pede Notification aqui - no iPhone isso travava o botão
    const fim=Date.now()+min*60*1000;
    timersAtivos[key]={fim, titulo:receitaAtual.titulo, passo:idx+1, min, idReceita:receitaAtual.id, pausado:false};
    salvarTimers();
    try{ agendarPushServidor(timersAtivos[key], key); }catch(e){}
    renderControlesTimer(key, idx, min);
    atualizarPaginaTimers();
    vibrar(100);
  }catch(e){ alert('Erro ao ligar timer: '+e.message); }
}
function pausarTimer(key, idx){ try{ const t=timersAtivos[key]; if(!t||t.pausado) return; const restante=Math.max(0, Math.floor((t.fim-Date.now())/1000)); t.restante=restante; t.pausado=true; delete t.fim; salvarTimers(); enviarParaSW({type:'CANCEL_TIMER', key}); cancelarPushServidor(key); renderControlesTimer(key, idx, t.min); atualizarPaginaTimers(); }catch(e){} }
function continuarTimer(key, idx){ try{ const t=timersAtivos[key]; if(!t||!t.pausado) return; t.fim=Date.now()+t.restante*1000; t.pausado=false; delete t.restante; salvarTimers(); agendarPushServidor(t, key); renderControlesTimer(key, idx, t.min); atualizarPaginaTimers(); }catch(e){} }
function zerarTimer(key, idx, minOriginal){ const t=timersAtivos[key]||timersFinalizados[key]; const nome=t?`${t.titulo} - Passo ${t.passo}`:'esse timer'; if(!confirm(`Tem certeza que quer zerar?\n\n${nome}\n\nO tempo será perdido.`)) return; if(alarmesTocando[key]){ clearInterval(alarmesTocando[key]); delete alarmesTocando[key]; } delete timersAtivos[key]; delete timersFinalizados[key]; salvarTimers(); salvarFinalizados(); enviarParaSW({type:'CANCEL_TIMER', key}); cancelarPushServidor(key); renderControlesTimer(key, idx, minOriginal, true); atualizarPaginaTimers(); }
function renderControlesTimer(key, idx, minOriginal, zerado=false){
  const cont=document.getElementById(`controls-${idx}`); if(!cont) return;
  if(timersFinalizados[key]){ cont.innerHTML=`<button class="timer-btn-main" style="background:#22C55E" id="btn-main-${idx}">✅ FINALIZADO - APERTE PARAR</button><button class="timer-btn-sec" style="background:#FF6B35;color:white;border-color:#FF6B35" onclick="pararAlarme('${key}',${idx})">⏹️ PARAR ALARME</button>`; return; }
  if(zerado){ cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}" onclick="iniciarTimer(${minOriginal},${idx})">⏱ Timer ${minOriginal} min</button>`; return; }
  const t=timersAtivos[key]; if(!t) return;
  if(t.pausado){ const m=Math.floor(t.restante/60); const s=t.restante%60; cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}">⏸️ ${m}:${(s+'').padStart(2,'0')} pausado</button><button class="timer-btn-sec" onclick="continuarTimer('${key}',${idx})">▶️ Continuar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${idx},${t.min})">🔄 Zerar</button>`; }
  else{ const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60; cont.innerHTML=`<button class="timer-btn-main" id="btn-main-${idx}">⏳ ${m}:${(s+'').padStart(2,'0')} rodando</button><button class="timer-btn-sec" onclick="pausarTimer('${key}',${idx})">⏸️ Pausar</button><button class="timer-btn-sec" onclick="zerarTimer('${key}',${idx},${t.min})">🔄 Zerar</button>`; }
}
function restaurarTimersGlobais(){
  setInterval(()=>{
    let mudou=false;
    try{
      Object.keys(timersAtivos).forEach(k=>{ const t=timersAtivos[k]; if(!t){ delete timersAtivos[k]; mudou=true; return; } if(t.pausado) return; if(!t.fim) return; const rest=Math.floor((t.fim-Date.now())/1000); if(receitaAtual && k.startsWith(receitaAtual.id+'-')){ const idx=k.split('-').pop(); const btn=document.getElementById(`btn-main-${idx}`); if(btn){ if(rest>0) btn.innerText=`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`; else btn.innerText=`✅ Finalizado!`; } } if(rest<=0){ timersFinalizados[k]={...t, finalizadoEm: Date.now()}; delete timersAtivos[k]; mudou=true; salvarFinalizados(); enviarParaSW({type:'CANCEL_TIMER', key:k}); notificarFim(t, k); if(receitaAtual && k.startsWith(receitaAtual.id+'-')){ const idx=parseInt(k.split('-').pop()); renderControlesTimer(k, idx, t.min); } } });
    }catch(e){}
    if(mudou) salvarTimers(); try{ if(document.getElementById('page-timer')?.classList.contains('ativa')) atualizarPaginaTimers(); }catch(e){}
  },1000);
}
function atualizarPaginaTimers(){
  const global=document.getElementById('timer-global'); if(!global) return;
  const chaves=Object.keys(timersAtivos); const chavesFin=Object.keys(timersFinalizados);
  if(chaves.length===0 && chavesFin.length===0){ global.innerHTML=`<div style="text-align:center;padding:30px;color:#9A8C83">Nenhum timer ativo</div>`; return; }
  let html='';
  html+=chavesFin.map(key=>{ const t=timersFinalizados[key]; if(!t) return ''; return `<div style="background:#E8F5E9;border:2px solid #22C55E;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center"><div style="flex:1"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:28px;font-weight:900;margin-top:4px;color:#22C55E">✅ FINALIZADO - APERTE PARAR</div><div style="margin-top:8px"><button onclick="pararAlarme('${key}',${t.passo-1})" style="padding:10px 16px;border-radius:20px;border:none;background:#FF6B35;color:white;font-weight:800">⏹️ PARAR ALARME</button></div></div><button onclick="voltarParaModoPreparo('${t.idReceita}','${key}')" style="background:#1A1A1A;color:white;border:none;width:48px;height:48px;border-radius:50%;font-size:20px;cursor:pointer;margin-left:10px">📖</button></div>`; }).join('');
  html+=chaves.map(key=>{ const t=timersAtivos[key]; if(!t) return ''; let tempoStr=t.pausado?`⏸️ ${Math.floor(t.restante/60)}:${(t.restante%60+'').padStart(2,'0')} pausado`:`⏱ ${Math.max(0,Math.floor((t.fim-Date.now())/1000/60))}:${(Math.max(0,Math.floor((t.fim-Date.now())/1000)%60)+'').padStart(2,'0')}`; const botoesPausa=t.pausado?`<button onclick="continuarTimer('${key}',${t.passo-1})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white;margin-right:6px">▶️ Continuar</button>`:`<button onclick="pausarTimer('${key}',${t.passo-1})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white;margin-right:6px">⏸️ Pausar</button>`; return `<div style="background:white;border:1.5px solid #FFE9DC;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center"><div style="flex:1"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:28px;font-weight:900;margin-top:4px">${tempoStr}</div><div style="margin-top:8px">${botoesPausa}<button onclick="zerarTimer('${key}',${t.passo-1},${t.min})" style="padding:8px 12px;border-radius:20px;border:1px solid #E8DDD6;background:white">🔄 Zerar</button></div></div><button onclick="voltarParaModoPreparo('${t.idReceita}','${key}')" style="background:#1A1A1A;color:white;border:none;width:48px;height:48px;border-radius:50%;font-size:20px;cursor:pointer;margin-left:10px">📖</button></div>`; }).join('')+`<div style="text-align:center;margin-top:20px"><button onclick="limparTodosTimers()" style="background:#FF6B35;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 LIMPAR TODOS</button></div>`;
  global.innerHTML=html;
}
function voltarParaModoPreparo(idReceita, key){ if(!idReceita){ const t=timersAtivos[key]||timersFinalizados[key]; if(t) idReceita=t.idReceita; } if(!idReceita) return; mudarPage('home'); setTimeout(()=>{ abrirReceita(idReceita); setTimeout(()=>{ irParaModoPreparo(); }, 600); },200); }
function voltarParaReceita(idReceita, key){ voltarParaModoPreparo(idReceita, key); }
function limparTodosTimers(){ const qtd=Object.keys(timersAtivos).length+Object.keys(timersFinalizados).length; if(qtd===0) return; if(!confirm(`Tem certeza que quer apagar TODOS os ${qtd} timers?\n\nEssa ação não pode ser desfeita.`)) return; try{ localStorage.removeItem('hk_timers'); localStorage.removeItem('hk_timers_finalizados'); }catch(e){} timersAtivos={}; timersFinalizados={}; Object.values(alarmesTocando).forEach(id=>clearInterval(id)); alarmesTocando={}; salvarTimers(); salvarFinalizados(); enviarParaSW({type:'CLEAR_ALL'}); atualizarPaginaTimers(); }
function mudarPage(nome){ document.querySelectorAll('.page').forEach(p=>p.classList.remove('ativa')); document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo')); document.getElementById(`page-${nome}`)?.classList.add('ativa'); document.getElementById(`nav-${nome}`)?.classList.add('ativo'); const RECEITAS=getReceitasBase(); if(nome==='favoritos') renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos'); if(nome==='recentes') renderRecentes(); if(nome==='timer') atualizarPaginaTimers(); if(nome==='finalizadas') renderFinalizadas(); }
document.addEventListener('DOMContentLoaded',init);
const CONDIMENTOS_TIRAR = ['agua','água','alho','caldo','curcuma','cúrcuma','acucar','açucar','açúcar','sal','pimenta','oleo','óleo','azeite','vinagre','manteiga','margarina','cominho','oregano','orégano','salsinha','cebolinha','coentro','alecrim','manjericão','canela','cravo','noz moscada','paprica','páprica','curry','açafrão','cheiro verde','shoyu','molho shoyu','sal grosso','pimenta reino','limão','azeite de dendê','água com gás','amido','polvilho','fermento','louro','folha de louro','tempero verde','mix de folhas','mix folhas','folhas','folha','nori','gengibre'];
let ingredientesSelecionados = [];
try{ ingredientesSelecionados = JSON.parse(localStorage.getItem('hk_ing_possuo')||'[]'); }catch(e){ ingredientesSelecionados=[]; }
function paraRaiz(nome){nome=nome.toLowerCase().trim();let s=nome.normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(s.includes('guacamole'))return'abacate';if(s.includes('gema')||s.includes('clara'))return'ovo';if(s.includes('ovo'))return'ovo';if(s.includes('tomate'))return'tomate';if(s.includes('pimentao'))return'pimentão';if(s.includes('cebola'))return'cebola';if(s.includes('abobora'))return'abóbora';if(s.includes('batata'))return'batata';if(s.includes('feijao'))return'feijão';if(s.includes('tortilha')||s.includes('tortilla'))return'tortilha';if(s.includes('requeijao'))return'requeijão';if(s.includes('frango'))return'frango';if(s.includes('carne')||s.includes('patinho'))return'carne';if(s.includes('queijo')||s.includes('mucarela')||s.includes('mussarela')||s.includes('parmesao')||s.includes('cheddar')||s.includes('catupiry')||s.includes('meia cura')||s.includes('presunto'))return'queijo';if(s.includes('leite condensado'))return'leite condensado';if(s.includes('leite de coco'))return'leite de coco';if(s.includes('leite'))return'leite';if(s.includes('farinha')||s.includes('panko')||s.includes('massa')||s.includes('espaguete')||s.includes('macarrao'))return'massa';if(s.includes('abobrinha'))return'abobrinha';if(s.includes('cenoura'))return'cenoura';if(s.includes('couve'))return'couve';if(s.includes('alface'))return'alface';if(s.includes('arroz'))return'arroz';if(s.includes('grao de bico')||s.includes('lentilha')||s.includes('ervilha'))return'grãos';if(s.includes('quinoa')||s.includes('aveia'))return'grãos';if(s.includes('pao'))return'pão';if(s.includes('linguica')||s.includes('bacon')||s.includes('calabresa')||s.includes('paio')||s.includes('costela'))return'linguiça';if(s.includes('camarao')||s.includes('robalo')||s.includes('salmao'))return'peixe';if(s.includes('abacate'))return'abacate';if(s.includes('pepino'))return'pepino';if(s.includes('brocolis'))return'brócolis';if(s.includes('repolho'))return'repolho';if(s.includes('milho'))return'milho';if(s.includes('morango'))return'morango';if(s.includes('coco'))return'coco';if(s.includes('chocolate')||s.includes('cacau')||s.includes('pacoca')||s.includes('bolacha')||s.includes('doce de leite'))return'doce';return nome;}
function getIngredientesObrigatoriosDaReceita(receita){let obrigatorios=[];if(!receita.ingredientes)return[];receita.ingredientes.forEach(ing=>{let nome=(ing.nome||'').toLowerCase().trim();if(!nome)return;if(CONDIMENTOS_TIRAR.some(c=>nome.includes(c)))return;let raiz=paraRaiz(nome);if(raiz.length>=3&&!CONDIMENTOS_TIRAR.includes(raiz))obrigatorios.push(raiz);});return[...new Set(obrigatorios)];}
function getTodosIngredientesUnicos(){const map=new Map();const TODAS=getReceitasBase();if(!TODAS)return[];TODAS.forEach(r=>{getIngredientesObrigatoriosDaReceita(r).forEach(raiz=>{if(!map.has(raiz))map.set(raiz,raiz);});});return Array.from(map.keys()).map(k=>({id:k,label:k})).sort((a,b)=>a.label.localeCompare(b.label));}
function abrirModalIngredientesPossuo(){const modal=document.getElementById('modal-ingredientes');const lista=document.getElementById('lista-todos-ingredientes');if(!modal||!lista){alert('Use o index.html novo');return;}if(!document.getElementById('style-topo-fixo-final')){const style=document.createElement('style');style.id='style-topo-fixo-final';style.innerHTML=`#modal-ingredientes > div{ display: flex !important; flex-direction: column !important; max-height: 85vh !important; overflow: hidden !important; } #modal-ingredientes > div > div:first-child{ position: sticky !important; top: 0 !important; background: white !important; z-index: 100 !important; flex-shrink: 0 !important; padding-bottom: 12px !important; border-bottom: 1.5px solid #FFE9DC !important; } #lista-todos-ingredientes{ overflow-y: auto !important; flex: 1 !important; padding-top: 12px !important; }`;document.head.appendChild(style);}const todos=getTodosIngredientesUnicos();lista.innerHTML=todos.map(item=>{const checked=ingredientesSelecionados.includes(item.id)?'checked':'';const bg=checked?'#FFF0E6':'#FFFBF8';return`<label style="display:flex;align-items:center;gap:12px;background:${bg};border:1.5px solid #FFE9DC;padding:12px;border-radius:12px;cursor:pointer;margin-bottom:8px"><input type="checkbox" value="${item.id}" ${checked} onchange="toggleIngredientePossuo(this.value)" style="width:20px;height:20px"><span style="font-weight:600;text-transform:capitalize">${item.label}</span></label>`;}).join('');modal.style.display='flex';}
function fecharModalIngredientesPossuo(){document.getElementById('modal-ingredientes').style.display='none';salvarEFiltrar();}
function filtrarListaIngredientes(){const termo=document.getElementById('busca-ingrediente').value.toLowerCase();document.querySelectorAll('#lista-todos-ingredientes label').forEach(l=>{const txt=l.innerText.toLowerCase();l.style.display=txt.includes(termo)?'flex':'none';});}
function toggleIngredientePossuo(id){if(ingredientesSelecionados.includes(id)){ingredientesSelecionados=ingredientesSelecionados.filter(x=>x!==id);}else{ingredientesSelecionados.push(id);}try{ localStorage.setItem('hk_ing_possuo',JSON.stringify(ingredientesSelecionados)); }catch(e){} const todos=getTodosIngredientesUnicos();const lista=document.getElementById('lista-todos-ingredientes');if(!lista)return;lista.innerHTML=todos.map(item=>{const checked=ingredientesSelecionados.includes(item.id)?'checked':'';const bg=checked?'#FFF0E6':'#FFFBF8';return`<label style="display:flex;align-items:center;gap:12px;background:${bg};border:1.5px solid #FFE9DC;padding:12px;border-radius:12px;cursor:pointer;margin-bottom:8px"><input type="checkbox" value="${item.id}" ${checked} onchange="toggleIngredientePossuo(this.value)" style="width:20px;height:20px"><span style="font-weight:600;text-transform:capitalize">${item.label}</span></label>`;}).join('');const cont=document.getElementById('contador-ingredientes-possuo');if(cont)cont.innerText=`${ingredientesSelecionados.length} selecionados`;}
function limparSelecaoIngredientes(){ingredientesSelecionados=[];try{ localStorage.setItem('hk_ing_possuo',JSON.stringify([])); }catch(e){} abrirModalIngredientesPossuo();salvarEFiltrar();}
function salvarEFiltrar(){
  const contador=document.getElementById('contador-ingredientes-possuo');
  if(contador)contador.innerText=`${ingredientesSelecionados.length} selecionados`;
  if(ingredientesSelecionados.length===0){
    const box=document.getElementById('receitas-filtradas-possuo');
    if(box)box.innerHTML='';
    // CORREÇÃO 2: não chama filtrar() aqui pra não dar volta extra / recursão - renderiza a lista normal direto
    let RECEITAS=getReceitasBase();
    const busca=(document.getElementById('busca')?.value||'').toLowerCase();
    const ordem=document.getElementById('ordem')?.value||'padrao';
    let lista=[...RECEITAS];
    if(categoriaAtiva!=='tudo'){ if(categoriaAtiva==='airfryer') lista=lista.filter(r=>r.airfryer===true); else if(categoriaAtiva==='rapida') lista=lista.filter(r=>getTempo(r)<=12); else{ const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva; lista=lista.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)); }}
    if(busca) lista=lista.filter(r=>r.titulo.toLowerCase().includes(busca));
    if(ordem==='az') lista.sort((a,b)=>a.titulo.localeCompare(b.titulo));
    else if(ordem==='tempo') lista.sort((a,b)=>getTempo(a)-getTempo(b));
    else if(ordem==='facil' || ordem==='kcal'){ const peso = { 'fácil':1, 'facil':1, 'médio':2, 'medio':2, 'difícil':3, 'dificil':3 }; lista.sort((a,b)=>{ const pa = peso[calcularNivel(a).toLowerCase()] || 2; const pb = peso[calcularNivel(b).toLowerCase()] || 2; return pa - pb; }); }
    window.RECEITAS=RECEITAS; renderReceitas(lista,'grid-receitas');
    return;
  }
  let filtradas=[...getReceitasBase()];
  if(categoriaAtiva!=='tudo'){if(categoriaAtiva==='airfryer')filtradas=filtradas.filter(r=>r.airfryer===true);else{const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva;filtradas=filtradas.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome));}}
  filtradas=filtradas.filter(receita=>{const obrigatorios=getIngredientesObrigatoriosDaReceita(receita);if(obrigatorios.length===0)return false;return obrigatorios.every(ob=>ingredientesSelecionados.includes(ob));});
  const box=document.getElementById('receitas-filtradas-possuo');
  if(box){if(filtradas.length===0){box.innerHTML=`<div style="text-align:center;padding:16px;background:#FFF0E6;border-radius:12px">Com <b>${ingredientesSelecionados.join(', ')}</b> ainda não dá pra fazer nenhuma receita completa</div>`;}else{box.innerHTML=`<div style="font-weight:800;margin-bottom:8px">✅ Você consegue fazer ${filtradas.length} receitas com: ${ingredientesSelecionados.join(', ')}</div>`;}}
  renderReceitas(filtradas,'grid-receitas');
}
// CORREÇÃO 1: removida a 2ª linha duplicada document.addEventListener('DOMContentLoaded',init); que estava aqui no final - agora o init() roda só 1x
