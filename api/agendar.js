import { Client } from "@upstash/qstash";

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({erro:'POST only'});
  try{
    const { subscription, titulo, passo, key, idReceita, fim } = req.body;
    if(!subscription || !fim) return res.status(400).json({erro:'faltando dados'});

    const qstash = new Client({ token: process.env.QSTASH_TOKEN });
    const delaySegundos = Math.max(1, Math.floor((fim - Date.now())/1000));
    const urlBase = `https://${req.headers.host}`;

    await qstash.publishJSON({
      url: `${urlBase}/api/enviar-push`,
      body: { subscription, titulo, passo, key, idReceita },
      delay: delaySegundos
    });

    return res.status(200).json({ok:true, em: delaySegundos});
  }catch(e){
    console.error(e);
    return res.status(500).json({erro: e.message});
  }
}