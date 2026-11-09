import webpush from "web-push";

// Só configura se as chaves existirem, senão o arquivo inteiro quebra na Vercel
if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:voce@seuemail.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({erro:'POST only'});

  try{
    const { subscription, titulo, passo, key, idReceita } = req.body || {};

    if(!subscription || !subscription.endpoint){
      return res.status(400).json({erro:'sem subscription'});
    }

    const payload = JSON.stringify({
      titulo: titulo || 'Timer finalizado!',
      passo: passo || 1,
      key: key || '',
      idReceita: idReceita || ''
    });

    await webpush.sendNotification(subscription, payload, {
      TTL: 60, // fica 60s tentando entregar, depois desiste
      urgency: 'high', // <- ISSO FAZ TOCAR! Sem isso chega como mensagem silenciosa
      topic: `timer-${key}` // se agendar o mesmo timer 2x, substitui e não duplica
    });

    return res.status(200).json({ok:true});
  }catch(e){
    console.error('Push falhou', e.statusCode, e.body);

    // 410 ou 404 = usuário desinstalou / bloqueou notificação
    // Retorna 200 pra o QStash NÃO tentar reenviar e duplicar
    if(e.statusCode === 410 || e.statusCode === 404){
      return res.status(200).json({ok:true, removida:true});
    }

    return res.status(200).json({ok:false, erro: e.message});
  }
}
