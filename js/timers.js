window.TimerManager = {
  timers: [],
  interval: null,
  init(){
    try{
      const saved=JSON.parse(localStorage.getItem('hk_timers_v3')||'[]');
      const now=Date.now();
      this.timers=saved.map(t=>{
        const rest=Math.max(0, Math.floor((t.endAt-now)/1000));
        return {...t, rest, running: rest>0};
      }).filter(t=>t.rest>0);
    }catch{}
    this.startLoop();
    if('Notification' in window && Notification.permission==='default'){ Notification.requestPermission(); }
  },
  save(){
    const toSave=this.timers.map(t=>({id:t.id,label:t.label,total:t.total,recipeId:t.recipeId,endAt:t.endAt}));
    localStorage.setItem('hk_timers_v3', JSON.stringify(toSave));
  },
  addTimer(min,label,recipeId){
    const id=Date.now()+Math.random();
    const endAt=Date.now()+min*60*1000;
    this.timers.push({id,label:label||'Timer',total:min*60,rest:min*60,running:true,recipeId:recipeId||null,endAt});
    this.save(); this.startLoop();
    if(window.renderTimersAtivos) window.renderTimersAtivos();
  },
  removeTimer(id){ this.timers=this.timers.filter(t=>t.id!==id); this.save(); if(window.renderTimersAtivos) window.renderTimersAtivos(); },
  startLoop(){
    if(this.interval) return;
    this.interval=setInterval(()=>{
      const now=Date.now();
      let changed=false;
      this.timers.forEach(t=>{
        if(t.running){
          const newRest=Math.max(0, Math.floor((t.endAt-now)/1000));
          if(newRest!==t.rest){ t.rest=newRest; changed=true; }
          if(newRest<=0 && t.running){ this.finishTimer(t); }
        }
      });
      if(changed && window.renderTimersAtivos) window.renderTimersAtivos();
    },1000);
  },
  finishTimer(t){
    t.running=false; t.rest=0;
    if(navigator.vibrate) navigator.vibrate([500,200,500,200,800]);
    try{
      const ctx=new (window.AudioContext||window.webkitAudioContext)();
      const play=(freq,dur,delay)=>{
        setTimeout(()=>{
          const o=ctx.createOscillator(); const g=ctx.createGain();
          o.connect(g); g.connect(ctx.destination);
          o.frequency.value=freq; g.gain.setValueAtTime(1,ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+dur/1000);
          o.start(); o.stop(ctx.currentTime+dur/1000);
        },delay);
      };
      play(880,400,0); play(1100,400,400); play(1320,800,800);
    }catch{}
    if('Notification' in window && Notification.permission==='granted'){
      new Notification('⏰ '+t.label+' PRONTO!', {body:'Seu timer finalizou! Corre lá!', requireInteraction:true});
    } else {
      setTimeout(()=>alert('⏰ '+t.label+' FINALIZOU! 🔔'),100);
    }
    setTimeout(()=>{ this.removeTimer(t.id); },7000);
  }
};