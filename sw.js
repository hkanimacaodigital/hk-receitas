let timersSW = {};
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('push', event => {
  let dados = {titulo:'Timer', passo:1, key:'timer'};
  try{ dados = event.data ? event.data.json() : dados; }catch(e){}
  const titulo = `⏰ ${dados.titulo} pronto!`;
  const body = `Passo ${dados.passo} finalizou - Toque para parar o alarme`;
  event.waitUntil(
    self.registration.showNotification(titulo, {
      body,
      icon: './assets/icon-192.png',
      badge: './assets/icon-192.png',
      vibrate: [1000,300,1000,300,1000,300,1000,300,1000,300,1000],
      requireInteraction: true,
      tag: dados.key,
      renotify: true,
      data: {key: dados.key, idReceita: dados.idReceita, titulo: dados.titulo, passo: dados.passo}
    })
  );
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

self.addEventListener('message', event => {
  const data = event.data;
  if(!data) return;
  if(data.type === 'SKIP_WAITING'){ self.skipWaiting(); return; }
});
