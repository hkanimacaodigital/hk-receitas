let timersSW = {};
let dadosNotificacao = {};

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('message', event => {
  const data = event.data;
  if(!data) return;

  if(data.type === 'SKIP_WAITING'){
    self.skipWaiting();
    return;
  }

  if(data.type === 'SCHEDULE_TIMER'){
    const {key, titulo, passo, min, fim, idReceita} = data;
    if(timersSW[key]) clearTimeout(timersSW[key].timeoutId);
    const delay = fim - Date.now();
    if(delay <= 0) return;
    dadosNotificacao[key] = {titulo, passo, min, idReceita, key};
    const timeoutId = setTimeout(()=>{
      self.registration.showNotification(`⏰ ${titulo} pronto!`, {
        body: `Passo ${passo} finalizou - ${min} min - Toque para parar o alarme`,
        icon: './assets/icon-192.png',
        badge: './assets/icon-192.png',
        vibrate: [1000,300,1000,300,1000,300,1000,300,1000,300,1000],
        requireInteraction: true,
        tag: key,
        renotify: true,
        data: {key, idReceita, titulo, passo}
      });
      delete timersSW[key];
    }, delay);
    timersSW[key] = {timeoutId, titulo, passo, min};
  }

  if(data.type === 'CANCEL_TIMER'){
    const {key} = data;
    if(timersSW[key]){ clearTimeout(timersSW[key].timeoutId); delete timersSW[key]; }
    delete dadosNotificacao[key];
  }

  if(data.type === 'CLEAR_ALL'){
    Object.values(timersSW).forEach(t=>clearTimeout(t.timeoutId));
    timersSW = {};
    dadosNotificacao = {};
  }

  if(data.type === 'TIMER_DONE'){
    self.registration.showNotification(`⏰ ${data.titulo} pronto!`, {
      body: `Passo ${data.passo} finalizou - Toque para parar o alarme`,
      icon: './assets/icon-192.png',
      badge: './assets/icon-192.png',
      vibrate: [1000,300,1000,300,1000,300,1000],
      requireInteraction: true,
      tag: data.key,
      data: {key: data.key, idReceita: data.idReceita}
    });
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
