let categoriaAtiva='tudo', receitaAtual=null;
let favoritos=JSON.parse(localStorage.getItem('hk_fav')||'[]');
let recentes=JSON.parse(localStorage.getItem('hk_rec')||'[]');
let timersAtivos={};
try{
  const raw=JSON.parse(localStorage.getItem('hk_timers')||'{}');
  Object.keys(raw).forEach(k=>{ const t=raw[k]; if(t && typeof t.fim==='number' && !isNaN(t.fim) && t.titulo && t.fim > Date.now()){ timersAtivos[k]=t; } });
  localStorage.setItem('hk_timers', JSON.stringify(timersAtivos));
}catch(e){ localStorage.removeItem('hk_timers'); timersAtivos={}; }
function salvarTimers(){ localStorage.setItem('hk_timers', JSON.stringify(timersAtivos)); }
function enviarParaSW(type, payload){ if('serviceWorker' in navigator && navigator.serviceWorker.controller){ navigator.serviceWorker.controller.postMessage({type, ...payload}); } else if(navigator.serviceWorker){ navigator.serviceWorker.ready.then(reg=>{ if(reg.active) reg.active.postMessage({type, ...payload}); }); } }
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').then(()=>console.log('SW ok')); }
function init(){ renderCategorias(); filtrar(); restaurarTimersGlobais(); if(Notification.permission!=='granted') Notification.requestPermission(); const cont = document.getElementById('contador-ingredientes-possuo'); if(cont){ cont.innerText = `${ingredientesSelecionados.length} selecionados`; if(ingredientesSelecionados.length>0) salvarEFiltrar(); } }
function renderCategorias(){ const c=document.getElementById('categorias'); if(!c||!CATEGORIAS||!RECEITAS) return; const ord=[...CATEGORIAS].sort((a,b)=>a.nome.localeCompare(b.nome)); const contar=(id)=>{ if(id==='tudo') return RECEITAS.length; if(id==='airfryer') return RECEITAS.filter(r=>r.airfryer===true).length; const nome=CATEGORIAS.find(x=>x.id===id)?.nome.toLowerCase()||id; return RECEITAS.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)).length; }; const todas=[{id:'tudo',nome:'Tudo',icone:'✨'},...ord]; c.innerHTML=todas.map(cat=>`<button class="cat-btn ${categoriaAtiva===cat.id?'ativo':''}" onclick="setCategoria('${cat.id}')">${cat.icone}<br>${cat.nome}<br>(${contar(cat.id)})</button>`).join(''); }
function setCategoria(id){ categoriaAtiva=id; renderCategorias(); if(ingredientesSelecionados.length>0){ salvarEFiltrar(); } else { filtrar(); } }
function getKcal(r){ return r.ingredientes?r.ingredientes.reduce((a,b)=>a+(b.kcal||b.calorias||0),0):0; }
function getTempo(r){ const m=(r.tempo||'').match(/(\d+)/); return m?parseInt(m[1]):999; }
function filtrar(){ if(!RECEITAS) return; if(ingredientesSelecionados.length>0){ salvarEFiltrar(); return; } const busca=(document.getElementById('busca')?.value||'').toLowerCase(); const ordem=document.getElementById('ordem')?.value||'padrao'; let lista=[...RECEITAS]; if(categoriaAtiva!=='tudo'){ if(categoriaAtiva==='airfryer') lista=lista.filter(r=>r.airfryer===true); else{ const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva; lista=lista.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)); } } if(busca) lista=lista.filter(r=>r.titulo.toLowerCase().includes(busca)); if(ordem==='az') lista.sort((a,b)=>a.titulo.localeCompare(b.titulo)); else if(ordem==='tempo') lista.sort((a,b)=>getTempo(a)-getTempo(b)); else if(ordem==='kcal') lista.sort((a,b)=>getKcal(a)-getKcal(b)); renderReceitas(lista,'grid-receitas'); }
function renderReceitas(lista, alvoId){ const cont=document.getElementById(alvoId); if(!cont) return; if(lista.length===0){ cont.innerHTML=`<div style="grid-column:1/3;text-align:center;padding:30px">Nenhuma receita que você consegue fazer com isso ainda<br><small style="color:#9A8C83">Selecione mais ingredientes</small></div>`; return; } cont.innerHTML=lista.map(r=>{ const isFav=favoritos.includes(r.id); return `<div class="card" onclick="abrirReceita('${r.id}')"><button class="fav-btn" onclick="event.stopPropagation();toggleFav('${r.id}')">${isFav?'❤️':'🤍'}</button><img src="${r.foto}" loading="lazy"><div class="card-body"><span class="badge">${r.categoria_principal}</span><h3 style="margin:8px 0 4px;font-weight:800">${r.titulo}</h3><div class="card-info"><span>⏰ ${r.tempo}</span><span>🔥 ${getKcal(r)} kcal</span></div></div></div>`}).join(''); }
function normalizarPasso(p){ if(typeof p==='string') return {texto:p, tempoMin: extrairMin(p)}; return {texto:p.texto||p.passo||'', tempoMin: p.timer||p.tempoMin||extrairMin(p.texto||''), label:p.label||''}; }
function extrairMin(t){ const m=(t||'').match(/(\d+)\s*min/); return m?parseInt(m[1]):0; }
function detalharPasso(p, idx, total){ let base = p.texto; let dica = idx===0 ? "<br><small style='color:#9A8C83'>💡 Separe tudo antes.</small>" : idx===total-1 ? "<br><small style='color:#FF6B35;font-weight:700'>🔥 Sirva na hora!</small>" : "<br><small style='color:#9A8C83'>👉 Capriche aqui.</small>"; let tempo = p.tempoMin > 0 ? p.tempoMin : 2; return {texto: base + dica, tempoMin: tempo, label: p.label || `Passo ${idx+1}`}; }
function compartilharWhatsApp(){ if(!receitaAtual) return; const ingList = receitaAtual.ingredientes.map(i=>`• ${i.nome||i.name} - ${i.qtd||''}`).join('\n'); const passosList = receitaAtual.passos.map((p,i)=>`${i+1}. ${p.texto||p}`).join('\n'); const texto = `*${receitaAtual.titulo}* - ${receitaAtual.tempo}\n\n*INGREDIENTES:*\n${ingList}\n\n*MODO DE PREPARO:*\n${passosList}\n\nTotal: ${getKcal(receitaAtual)} kcal`; window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank'); }
function abrirReceita(id){ const r=RECEITAS.find(x=>x.id===id); if(!r) return; receitaAtual=r; if(!recentes.includes(id)){ recentes.unshift(id); recentes=recentes.slice(0,12); localStorage.setItem('hk_rec',JSON.stringify(recentes)); } const modal=document.getElementById('modal'); const corpo=document.getElementById('modal-corpo');  const passosNorm=r.passos.map(normalizarPasso); const passosDetalhados=passosNorm.map((p,i)=>detalharPasso(p,i,passosNorm.length)); corpo.innerHTML=`<style>.flip-wrapper{ perspective:1200px; } .flip-inner{ position:relative; width:100%; transition: transform 0.7s; transform-style: preserve-3d; } .flip-inner.virando{ transform: rotateY(180deg); } .view{ backface-visibility:hidden; } #view-preparo{ position:absolute; top:0; left:0; width:100%; transform: rotateY(180deg); } .btn-whatsapp{ width:100%; background:#25D366; color:white; border:none; padding:14px; border-radius:14px; font-weight:900; font-size:15px; margin-top:16px; cursor:pointer; } .btn-modo{ width:100%; background:#FF6B35; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:12px; cursor:pointer; } .btn-voltar{ width:100%; background:#1A1A1A; color:white; border:none; padding:18px; border-radius:16px; font-weight:900; font-size:18px; margin-top:24px; cursor:pointer; } .passo-detalhado{ background:white; border:1.5px solid #FFE9DC; border-radius:16px; padding:16px; margin-bottom:14px; display:flex; gap:12px; }</style><img class="capa" src="${r.foto}"><div class="flip-wrapper"><div class="flip-inner" id="flip-inner"><div class="view" id="view-ingredientes"><div class="modal-conteudo"><h1 style="font-size:24px;font-weight:900">${r.titulo}</h1><div style="display:flex;gap:8px;margin:12px 0"><span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">⏰ ${r.tempo}</span><span style="background:#FFF0E6;padding:6px 12px;border-radius:20px;font-size:13px;font-weight:700">🔥 ${getKcal(r)} kcal</span></div><h3 style="margin:20px 0 12px">🛒 Ingredientes (${r.ingredientes.length})</h3><ul style="list-style:none;display:flex;flex-direction:column;gap:10px;padding:0">${r.ingredientes.map(i=>`<li style="background:#FFFBF8;border:1px solid #FFE9DC;padding:14px;border-radius:14px;display:flex;justify-content:space-between"><span><b>${i.nome||i.name}</b><br><small>${i.qtd||''}</small></span><b style="background:#FFE9DC;padding:6px 10px;border-radius:10px">${i.kcal||0} kcal</b></li>`).join('')}</ul><button class="btn-whatsapp" onclick="compartilharWhatsApp()">📲 Exportar para WhatsApp</button><button class="btn-modo" onclick="irParaModoPreparo()">👨‍🍳 MODO DE PREPARO →</button></div></div><div class="view" id="view-preparo"><div class="modal-conteudo"><h1 style="font-size:22px;font-weight:900">${r.titulo}</h1><p style="color:#9A8C83;margin:6px 0 16px">Modo de preparo detalhado • ${passosDetalhados.length} passos</p>${passosDetalhados.map((p,i)=>{ const key=`${r.id}-${i}`; const ativo=timersAtivos[key]; const rest=ativo?Math.max(0, Math.floor((ativo.fim - Date.now())/1000)):0; const txt=ativo?`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`:`⏱ Timer ${p.tempoMin} min`; return `<div class="passo-detalhado"><input type="checkbox" onchange="this.parentElement.style.opacity=this.checked?0.6:1"><div style="flex:1"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><b style="color:#FF6B35;font-size:13px">${p.label}</b><span style="font-size:12px;background:#FFF0E6;padding:4px 8px;border-radius:8px">Passo ${i+1}/${passosDetalhados.length}</span></div><div style="font-weight:600;font-size:15px">${p.texto}</div><button id="btn-timer-${i}" onclick="iniciarTimer(${p.tempoMin},${i})" style="margin-top:10px;background:#1A1A1A;color:white;border:none;padding:10px 16px;border-radius:20px;font-weight:800">${txt}</button></div></div>`; }).join('')}<button class="btn-voltar" onclick="voltarIngredientes()">← INGREDIENTES</button></div></div></div></div>`; modal.classList.add('mostrar'); document.getElementById('flip-inner').classList.remove('virando'); document.getElementById('view-ingredientes').style.display='block'; document.getElementById('view-preparo').style.display='none'; setTimeout(()=>atualizarBtnFav(), 80); }
function irParaModoPreparo(){ const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); flip.classList.add('virando'); setTimeout(()=>{ v1.style.display='none'; v2.style.display='block'; v2.style.position='relative'; v2.style.transform='rotateY(180deg)'; document.getElementById('modal-corpo').scrollTop=0; },350); }
function voltarIngredientes(){ const flip=document.getElementById('flip-inner'); const v1=document.getElementById('view-ingredientes'); const v2=document.getElementById('view-preparo'); flip.classList.remove('virando'); setTimeout(()=>{ v2.style.display='none'; v1.style.display='block'; document.getElementById('modal-corpo').scrollTop=0; },350); }
function fecharModal(){ document.getElementById('modal').classList.remove('mostrar'); }
function toggleFav(id){ if(favoritos.includes(id)) favoritos=favoritos.filter(x=>x!==id); else favoritos.push(id); localStorage.setItem('hk_fav',JSON.stringify(favoritos)); filtrar(); if(document.getElementById('page-favoritos')?.classList.contains('ativa')){ renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos'); } if(receitaAtual && receitaAtual.id===id) atualizarBtnFav(); }
function toggleFavModal(){ if(!receitaAtual) return; toggleFav(receitaAtual.id); }
function atualizarBtnFav(){ let btn = document.getElementById('btn-fav-modal'); if(!btn){ const headerBtns = document.querySelectorAll('#modal button'); for(let b of headerBtns){ if(b.innerText.includes('Favoritar') || b.innerText.includes('Favorito')){ btn=b; btn.id='btn-fav-modal'; break; } } } if(!btn || !receitaAtual) return; const isFav=favoritos.includes(receitaAtual.id); btn.innerHTML=isFav ? '❤️ Favorito' : '♡ Favoritar'; }
function iniciarTimer(min, idx){ if(!receitaAtual) return; const key=`${receitaAtual.id}-${idx}`; const fim=Date.now()+min*60*1000; timersAtivos[key]={fim, titulo:receitaAtual.titulo, passo:idx+1, min, idReceita:receitaAtual.id}; salvarTimers(); enviarParaSW('SCHEDULE_TIMER', {key, titulo:receitaAtual.titulo, passo:idx+1, min, fim}); if(Notification.permission!=='granted') Notification.requestPermission(); const btn=document.getElementById(`btn-timer-${idx}`); if(btn) btn.innerText=`⏳ ${min}:00 rodando`; atualizarPaginaTimers(); }
function restaurarTimersGlobais(){ setInterval(()=>{ let mudou=false; Object.keys(timersAtivos).forEach(k=>{ const t=timersAtivos[k]; if(!t||!t.fim||isNaN(t.fim)){ delete timersAtivos[k]; mudou=true; return; } const rest=Math.floor((t.fim-Date.now())/1000); if(receitaAtual && k.startsWith(receitaAtual.id+'-')){ const idx=k.split('-').pop(); const btn=document.getElementById(`btn-timer-${idx}`); if(btn){ if(rest>0) btn.innerText=`⏳ ${Math.floor(rest/60)}:${(rest%60).toString().padStart(2,'0')} rodando`; else btn.innerText=`✅ Finalizado!`; } } if(rest<=0){ delete timersAtivos[k]; mudou=true; } }); if(mudou) salvarTimers(); if(document.getElementById('page-timer')?.classList.contains('ativa')) atualizarPaginaTimers(); },1000); }
function atualizarPaginaTimers(){ const global=document.getElementById('timer-global'); if(!global) return; const chaves=Object.keys(timersAtivos); if(chaves.length===0){ global.innerHTML=`<div style="text-align:center;padding:30px;color:#9A8C83">Nenhum timer ativo</div>`; return; } global.innerHTML=chaves.map(key=>{ const t=timersAtivos[key]; if(!t||!t.fim||isNaN(t.fim)) return ''; const rest=Math.max(0, Math.floor((t.fim-Date.now())/1000)); const m=Math.floor(rest/60); const s=rest%60; return `<div style="background:white;border:1.5px solid #FFE9DC;border-radius:16px;padding:14px;margin-bottom:10px"><b>${t.titulo} - Passo ${t.passo}</b><div style="font-size:36px;font-weight:900">⏱ ${m}:${(s+'').padStart(2,'0')}</div><button onclick="cancelarTimerPorChave('${key}')" style="margin-top:8px;padding:8px 14px;border-radius:20px;border:1px solid #E8DDD6;background:white">❌ Cancelar</button></div>`; }).join('') + `<div style="text-align:center;margin-top:20px"><button onclick="limparTodosTimers()" style="background:#FF6B35;color:white;padding:12px 20px;border-radius:20px;border:none;font-weight:800">🧹 LIMPAR TODOS</button></div>`; }
function cancelarTimerPorChave(key){ delete timersAtivos[key]; salvarTimers(); enviarParaSW('CANCEL_TIMER', {key}); atualizarPaginaTimers(); }
function limparTodosTimers(){ localStorage.removeItem('hk_timers'); timersAtivos={}; salvarTimers(); enviarParaSW('CLEAR_ALL', {}); atualizarPaginaTimers(); alert('Timers zerados!'); }
function mudarPage(nome){ document.querySelectorAll('.page').forEach(p=>p.classList.remove('ativa')); document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo')); document.getElementById(`page-${nome}`)?.classList.add('ativa'); document.getElementById(`nav-${nome}`)?.classList.add('ativo'); if(nome==='favoritos') renderReceitas(RECEITAS.filter(r=>favoritos.includes(r.id)),'grid-favoritos'); if(nome==='recentes') renderReceitas(recentes.map(id=>RECEITAS.find(r=>r.id===id)).filter(Boolean),'grid-recentes'); if(nome==='timer') atualizarPaginaTimers(); }

// ===== GELADEIRA - VERSÃO FINAL CORRIGIDA =====
const CONDIMENTOS_TIRAR = ['agua','água','acucar','açucar','açúcar','sal','pimenta','oleo','óleo','azeite','vinagre','manteiga','margarina','cominho','oregano','orégano','salsinha','cebolinha','coentro','alecrim','manjericão','canela','cravo','noz moscada','paprica','páprica','curry','açafrão','cheiro verde','shoyu','molho shoyu','sal grosso','pimenta reino'];

const PALAVRAS_LIXO = ['fatias','fatia','folha','folhas','goma','rodelas','rodela','unidade','unidades','colher','colheres','xicara','xícara','lata','pacote','rolo','maço','talo','talos','dente','dentes','pote','caixa','pedaco','pedaço','cubos','cubo','tiras','tira','fatiada','fatiado','fina','fino','picado','picada','cozida','cozido','pre-cozida','crua','cru','grande','pequeno','medio','verde','seco','opcional','para','com','sem','pincelar','em'];

let ingredientesSelecionados = JSON.parse(localStorage.getItem('hk_ing_possuo')||'[]');

const MAPA_RAIZ = {
  'tomate': 'tomate',
  'abacate': 'abacate',
  'ovo': 'ovo',
  'mussarela': 'muçarela', 'muçarela': 'muçarela', 'mucarela': 'muçarela',
  'queijo': 'queijo',
  'parmesao': 'parmesão', 'parmesão': 'parmesão',
  'frango': 'frango',
  'carne': 'carne',
  'arroz': 'arroz',
  'feijao': 'feijão', 'feijão': 'feijão',
  'leite condensado': 'leite condensado',
  'leite': 'leite',
  'farinha': 'farinha', 'trigo': 'farinha',
  'tortilha': 'tortilha',
  'abobrinha': 'abobrinha',
  'cenoura': 'cenoura',
  'batata': 'batata',
  'couve': 'couve',
  'quinoa': 'quinoa',
  'grao de bico': 'grão de bico', 'grão de bico': 'grão de bico',
  'pepino': 'pepino',
  'brocolis': 'brócolis', 'brócolis': 'brócolis',
  'espinafre': 'espinafre',
  'ervilha': 'ervilha',
  'espaguete': 'espaguete'
};

function quebrarIngredienteComposto(textoOriginal){
  // SEPARA "Tomate + Muçarela" ou "Tomate e Muçarela" em 2
  let texto = textoOriginal.toLowerCase();
  texto = texto.replace(/\(.*?\)/g, '').replace(/\d+/g, '').trim();
  // separa por + , / e e
  let partes = texto.split(/\s*\+\s*|\s*\/\s*|,\s*|\s+e\s+/);
  return partes;
}

function limparNomeParaRaiz(nome){
  nome = nome.toLowerCase().trim();
  nome = nome.replace(/^\s*(de|da|do)\s+/g, '').trim();
  PALAVRAS_LIXO.forEach(lixo=>{
    nome = nome.replace(new RegExp('\\b'+lixo+'\\b','g'),'');
  });
  nome = nome.replace(/\s+/g, ' ').trim();
  for(let chave in MAPA_RAIZ){
    if(nome.includes(chave)) return MAPA_RAIZ[chave];
  }
  let palavras = nome.split(' ').filter(w=>w.length>2);
  return palavras[0] || '';
}

function getIngredientesObrigatoriosDaReceita(receita){
  let obrigatorios = [];
  receita.ingredientes.forEach(ing=>{
    let nomeOriginal = (ing.nome||ing.name||'').toLowerCase();
    // Se é condimento puro, pula
    if(CONDIMENTOS_TIRAR.some(c=> nomeOriginal.includes(c))) {
      // Mas se for "tomate + muçarela" não é condimento, tem que quebrar
      if(!nomeOriginal.includes('+') && !nomeOriginal.includes(' e ')) return;
    }
    // QUEBRA compostos
    let pedacos = quebrarIngredienteComposto(nomeOriginal);
    pedacos.forEach(pedaco=>{
      if(CONDIMENTOS_TIRAR.some(c=> pedaco.trim() === c || pedaco.trim().includes(c))) return;
      let raiz = limparNomeParaRaiz(pedaco);
      if(raiz && raiz.length>=3 && !CONDIMENTOS_TIRAR.includes(raiz) && !PALAVRAS_LIXO.includes(raiz)){
        obrigatorios.push(raiz);
      }
    });
  });
  return [...new Set(obrigatorios)];
}

function getTodosIngredientesUnicos(){
  const map = new Map();
  if(!RECEITAS) return [];
  RECEITAS.forEach(r=>{
    getIngredientesObrigatoriosDaReceita(r).forEach(raiz=>{
      if(!map.has(raiz)) map.set(raiz, raiz);
    });
  });
  return Array.from(map.keys()).map(k=>({id:k, label:k})).sort((a,b)=>a.label.localeCompare(b.label));
}

function abrirModalIngredientesPossuo(){
  const modal = document.getElementById('modal-ingredientes');
  const lista = document.getElementById('lista-todos-ingredientes');
  if(!modal||!lista){ alert('Use o index.html novo'); return; }
  const todos = getTodosIngredientesUnicos();
  lista.innerHTML = todos.map(item=>{
    const checked = ingredientesSelecionados.includes(item.id) ? 'checked' : '';
    const bg = checked ? '#FFF0E6' : '#FFFBF8';
    return `<label style="display:flex;align-items:center;gap:12px;background:${bg};border:1.5px solid #FFE9DC;padding:12px;border-radius:12px;cursor:pointer"><input type="checkbox" value="${item.id}" ${checked} onchange="toggleIngredientePossuo(this.value)" style="width:20px;height:20px"><span style="font-weight:600;text-transform:capitalize">${item.label}</span></label>`;
  }).join('');
  modal.style.display='flex';
}
function fecharModalIngredientesPossuo(){ document.getElementById('modal-ingredientes').style.display='none'; salvarEFiltrar(); }
function filtrarListaIngredientes(){ const termo = document.getElementById('busca-ingrediente').value.toLowerCase(); document.querySelectorAll('#lista-todos-ingredientes label').forEach(l=>{ const txt = l.innerText.toLowerCase(); l.style.display = txt.includes(termo) ? 'flex' : 'none'; }); }
function toggleIngredientePossuo(id){ if(ingredientesSelecionados.includes(id)){ ingredientesSelecionados = ingredientesSelecionados.filter(x=>x!==id); } else { ingredientesSelecionados.push(id); } localStorage.setItem('hk_ing_possuo', JSON.stringify(ingredientesSelecionados)); abrirModalIngredientesPossuo(); }
function limparSelecaoIngredientes(){ ingredientesSelecionados=[]; localStorage.setItem('hk_ing_possuo', JSON.stringify([])); abrirModalIngredientesPossuo(); salvarEFiltrar(); }
function salvarEFiltrar(){
  const contador = document.getElementById('contador-ingredientes-possuo'); if(contador) contador.innerText = `${ingredientesSelecionados.length} selecionados`;
  if(ingredientesSelecionados.length===0){ const box = document.getElementById('receitas-filtradas-possuo'); if(box) box.innerHTML=''; filtrar(); return; }
  let filtradas = [...RECEITAS];
  if(categoriaAtiva!=='tudo'){ if(categoriaAtiva==='airfryer') filtradas=filtradas.filter(r=>r.airfryer===true); else{ const nome=CATEGORIAS.find(c=>c.id===categoriaAtiva)?.nome.toLowerCase()||categoriaAtiva; filtradas=filtradas.filter(r=>(r.categoria_principal||'').toLowerCase()===nome||(r.categorias||[]).map(x=>x.toLowerCase()).includes(nome)); } }
  filtradas = filtradas.filter(receita=>{ const obrigatorios = getIngredientesObrigatoriosDaReceita(receita); if(obrigatorios.length===0) return false; return obrigatorios.every(ob => ingredientesSelecionados.includes(ob)); });
  const box = document.getElementById('receitas-filtradas-possuo'); if(box){ if(filtradas.length===0){ box.innerHTML=`<div style="text-align:center;padding:16px;background:#FFF0E6;border-radius:12px">Com <b>${ingredientesSelecionados.join(', ')}</b> você ainda não consegue fazer nenhuma receita completa<br><small>Selecione mais: ex Bowl precisa abacate + grão de bico + quinoa + tomate + pepino</small></div>`; } else { box.innerHTML=`<div style="font-weight:800;margin-bottom:8px">✅ Você consegue fazer ${filtradas.length} receitas com: ${ingredientesSelecionados.join(', ')}</div>`; } }
  renderReceitas(filtradas,'grid-receitas');
}
document.addEventListener('DOMContentLoaded',init);
