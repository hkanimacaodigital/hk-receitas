let timersSW = {};

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('message', event => {
  const data = event.data;
  if(!data) return;

  if(data.type === 'SCHEDULE_TIMER'){
    const {key, titulo, passo, min, fim} = data;
    // limpa antigo se tiver
    if(timersSW[key]) clearTimeout(timersSW[key].timeoutId);
    
    const delay = fim - Date.now();
    if(delay <= 0) return;

    const timeoutId = setTimeout(()=>{
      self.registration.showNotification(`⏱ ${titulo} pronto!`, {
        body: `Passo ${passo} finalizou - ${min} min - Toque para voltar`,
        icon: './assets/icon-192.png',
        badge: './assets/icon-192.png',
        vibrate: [500,200,500,200,500],
        requireInteraction: true,
        tag: key
      });
      delete timersSW[key];
    }, delay);

    timersSW[key] = {timeoutId, titulo, passo, min};
  }

  if(data.type === 'CANCEL_TIMER'){
    const {key} = data;
    if(timersSW[key]){
      clearTimeout(timersSW[key].timeoutId);
      delete timersSW[key];
    }
  }

  if(data.type === 'CLEAR_ALL'){
    Object.values(timersSW).forEach(t=>clearTimeout(t.timeoutId));
    timersSW = {};
  }

  if(data.type === 'TIMER_DONE'){
    self.registration.showNotification(`⏱ ${data.titulo} pronto!`, {
      body: `Passo ${data.passo} finalizou - ${data.min} min`,
      icon: './assets/icon-192.png',
      badge: './assets/icon-192.png',
      vibrate: [500,200,500],
      requireInteraction: true
    });
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window'}).then(arr=>{
      if(arr.length>0) arr[0].focus();
      else clients.openWindow('./index.html');
    })
  );
});