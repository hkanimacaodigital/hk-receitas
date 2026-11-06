let timersSW = {};
const DB_NAME = 'hk-timers-db';
const STORE = 'timers';

function abrirDB(){
  return new Promise((res, rej)=>{
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = ()=>{ if(!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE, {keyPath:'key'}); };
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}
async function salvarNoBanco(timer){
  try{ const db = await abrirDB(); const tx = db.transaction(STORE,'readwrite'); tx.objectStore(STORE).put(timer); await new Promise(r=>{ tx.oncomplete=r; tx.onerror=r; }); db.close(); }catch(e){}
}
async function apagarDoBanco(key){
  try{ const db = await abrirDB(); const tx = db.transaction(STORE,'readwrite'); tx.objectStore(STORE).delete(key); await new Promise(r=>{ tx.oncomplete=r; tx.onerror=r; }); db.close(); }catch(e){}
}
async function limparBanco(){
  try{ const db = await abrirDB(); const tx = db.transaction(STORE,'readwrite'); tx.objectStore(STORE).clear(); await new Promise(r=>{ tx.oncomplete=r; tx.onerror=r; }); db.close(); }catch(e){}
}
async function lerBanco(){
  try{
    const db = await abrirDB();
    return await new Promise((res)=>{
      const tx = db.transaction(STORE,'readonly');
      const req = tx.objectStore(STORE).getAll();
      req.onsuccess = ()=>{ db.close(); res(req.result||[]); };
      req.onerror = ()=>{ db.close(); res([]); };
    });
  }catch(e){ return []; }
}

function mostrarNotificacaoSW(t){
  return self.registration.showNotification(`⏰ ${t.titulo} pronto!`, {
    body: `Passo ${t.passo} finalizou - ${t.min} min - Toque para parar o alarme`,
    icon: './assets/icon-192.png',
    badge: './assets/icon-192.png',
    vibrate: [1000,300,1000,300,1000,300,1000,300,1000,300,1000],
    requireInteraction: true,
    tag: t.key,
    renotify: true,
    data: {key: t.key, idReceita: t.idReceita, titulo: t.titulo, passo: t.passo}
  });
}

function agendarSW(t){
  if(timersSW[t.key]) clearTimeout(timersSW[t.key].timeoutId);
  const delay = t.fim - Date.now();
  if(delay <= 0){
    mostrarNotificacaoSW(t);
    apagarDoBanco(t.key);
    return;
  }
  const timeoutId = setTimeout(()=>{
    mostrarNotificacaoSW(t);
    apagarDoBanco(t.key);
    delete timersSW[t.key];
  }, delay);
  timersSW[t.key] = {timeoutId, ...t};
}

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async()=>{
    await self.clients.claim();
    const salvos = await lerBanco();
    salvos.forEach(t=>agendarSW(t));
  })());
});

self.addEventListener('message', event => {
  const data = event.data;
  if(!data) return;
  if(data.type === 'SKIP_WAITING'){ self.skipWaiting(); return; }

  if(data.type === 'SCHEDULE_TIMER'){
    const {key, titulo, passo, min, fim, idReceita} = data;
    const t = {key, titulo, passo, min, fim, idReceita};
    salvarNoBanco(t);
    agendarSW(t);
  }

  if(data.type === 'CANCEL_TIMER'){
    const {key} = data;
    if(timersSW[key]){ clearTimeout(timersSW[key].timeoutId); delete timersSW[key]; }
    apagarDoBanco(key);
  }

  if(data.type === 'CLEAR_ALL'){
    Object.values(timersSW).forEach(t=>clearTimeout(t.timeoutId));
    timersSW = {};
    limparBanco();
  }

  if(data.type === 'TIMER_DONE'){
    mostrarNotificacaoSW({key: data.key, titulo: data.titulo, passo: data.passo, min: data.min||0, idReceita: data.idReceita});
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const d = event.notification.data || {};
  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(arr=>{
      if(arr.length>0){
        arr[0].focus();
        arr[0].postMessage({type:'ABRIR_TIMER_FINALIZADO', key:d.key, idReceita:d.idReceita});
      } else {
        clients.openWindow('./index.html');
      }
    })
  );
});
