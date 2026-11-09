import { Client } from "@upstash/qstash";

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({erro:'POST only'});
  try{
    const { subscription, titulo, passo, key, idReceita, fim } = req.body;
    if(!subscription || !subscription.endpoint || !fim) return res.status(400).json({erro:'faltando dados'});

    if(!process.env.QSTASH_TOKEN) return res.status(500).json({erro:'QSTASH_TOKEN faltando na Vercel'});

    const qstash = new Client({ token: process.env.QSTASH_TOKEN });
    const delaySegundos = Math.max(1, Math.floor((fim - Date.now())/1000));

    // QStash só aceita delay até 7 dias - se for maior, trava
    if(delaySegundos > 604800) return res.status(400).json({erro:'Timer muito longo, max 7 dias'});

    const urlBase = `https://${req.headers.host}`;

    const resp = await qstash.publishJSON({
      url: `${urlBase}/api/enviar-push`,
      body: { subscription, titulo, passo, key, idReceita },
      delay: delaySegundos,
      retries: 0, // CORREÇÃO: sem retry, senão duplica notificação
      // deduplicationId pra não agendar 2x o mesmo timer se clicar 2x
      deduplicationId: `timer-${key}`
    });

    return res.status(200).json({ok:true, em: delaySegundos, messageId: resp.messageId});
  }catch(e){
    console.error(e);
    return res.status(500).json({erro: e.message});
  }
}
