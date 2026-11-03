window.StorageHK = {
  getFavs(){ try{return JSON.parse(localStorage.getItem('hk_favs')||'[]')}catch{return []} },
  toggleFav(id){ let favs=this.getFavs(); if(favs.includes(id)) favs=favs.filter(f=>f!==id); else favs.push(id); localStorage.setItem('hk_favs', JSON.stringify(favs)); return favs.includes(id); },
  isFav(id){ return this.getFavs().includes(id) },
  getRecentes(){ try{return JSON.parse(localStorage.getItem('hk_recentes')||'[]')}catch{return []} },
  addRecente(id){ let rec=this.getRecentes().filter(r=>r!==id); rec.unshift(id); rec=rec.slice(0,20); localStorage.setItem('hk_recentes', JSON.stringify(rec)); }
}