import webpush from "web-push";

webpush.setVapidDetails(
  'mailto:voce@seuemail.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export default async function handler(req, res){
  try{
    const { subscription, titulo, passo, key, idReceita } = req.body;
    await webpush.sendNotification(subscription, JSON.stringify({titulo, passo, key, idReceita}));
    return res.status(200).json({ok:true});
  }catch(e){
    console.error('Push falhou', e.statusCode, e.body);
    // Se o usuário desinstalou, o push vai dar 410, aí só ignora
    return res.status(200).json({ok:false, erro: e.message});
  }
}