// Junta todas as receitas separadas
window.RECEITAS = [
  ...(window.RECEITAS_AIRFRYER || []),
  ...(window.RECEITAS_ARABE || []),
  ...(window.RECEITAS_BRASILEIRA || []),
  ...(window.RECEITAS_CAFE_DA_MANHA || []),
  ...(window.RECEITAS_CALDO || []),
  ...(window.RECEITAS_DOCE || []),
  ...(window.RECEITAS_FIT || []),
  ...(window.RECEITAS_ITALIANA || []),
  ...(window.RECEITAS_LANCHE || []),
  ...(window.RECEITAS_MEXICANA || []),
  ...(window.RECEITAS_ORIENTAL || []),
  ...(window.RECEITAS_RAPIDA || []),
  ...(window.RECEITAS_SAUDAVEL || []),
  ...(window.RECEITAS_VEGANA || [])
];
