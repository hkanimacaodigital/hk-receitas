let timersSW = {};
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

// ===== PUSH - VIBRA + NÃO SOME DA TELA =====
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
      requireInteraction: true, // fica na tela até você ver, não some sozinho
      tag: dados.key,
      renotify: true,
      silent: false, // garante que toca o som
      data: {key: dados.key, idReceita: dados.idReceita, titulo: dados.titulo, passo: dados.passo}
    })
  );
});

// ===== CLICOU NA NOTIFICAÇÃO =====
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const d = event.notification.data || {};
  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(arr=>{
      if(arr.length>0){
        // App já aberto (minimizado) - só foca e abre o timer
        arr[0].focus();
        arr[0].postMessage({type:'ABRIR_TIMER_FINALIZADO', key:d.key, idReceita:d.idReceita});
      } else {
        // App estava fechado - abre já na receita certa
        const url = d.idReceita ? `./index.html?receita=${d.idReceita}&timer=${d.key}` : './index.html';
        clients.openWindow(url);
      }
    })
  );
});

// ===== FECHOU A NOTIFICAÇÃO SEM CLICAR - NÃO FAZ NADA =====
self.addEventListener('notificationclose', event => {
  // Não cancela o timer, deixa ele tocando no app
});

// ===== COMANDOS QUE VEM DO app.js =====
self.addEventListener('message', event => {
  const data = event.data;
  if(!data) return;

  if(data.type === 'SKIP_WAITING'){ self.skipWaiting(); return; }

  // CORREÇÃO 1: Agora ele entende CANCELAR
  if(data.type === 'CANCEL_TIMER' && data.key){
    // Cancela a notificação daquele timer se ela estiver na tela
    self.registration.getNotifications({tag: data.key}).then(list => {
      list.forEach(n => n.close());
    });
    if(timersSW[data.key]){
      clearTimeout(timersSW[data.key]);
      delete timersSW[data.key];
    }
    return;
  }

  // CORREÇÃO 2: Limpar todos
  if(data.type === 'CLEAR_ALL'){
    Object.keys(timersSW).forEach(k => {
      clearTimeout(timersSW[k]);
      delete timersSW[k];
    });
    self.registration.getNotifications().then(list => {
      list.forEach(n => n.close());
    });
    return;
  }

  // CORREÇÃO 3: Se o app mandar START_TIMER, o SW também agenda (backup se o app fechar)
  if(data.type === 'START_TIMER' && data.key && data.fim){
    if(timersSW[data.key]) clearTimeout(timersSW[data.key]);
    const delay = Math.max(0, data.fim - Date.now());
    timersSW[data.key] = setTimeout(() => {
      self.registration.showNotification(`⏰ ${data.titulo} pronto!`, {
        body: `Passo ${data.passo} finalizou - Toque para parar o alarme`,
        icon: './assets/icon-192.png',
        badge: './assets/icon-192.png',
        vibrate: [1000,300,1000,300,1000,300,1000,300,1000,300,1000],
        requireInteraction: true,
        tag: data.key,
        renotify: true,
        silent: false,
        data: {key: data.key, idReceita: data.idReceita, titulo: data.titulo, passo: data.passo}
      });
      delete timersSW[data.key];
    }, delay);
    return;
  }
});
