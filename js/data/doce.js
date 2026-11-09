// RECEITAS DOCE
// 1 - Churros com Doce de Leite
// 2 - Pudim de Leite Condensado
// 3 - Pavê de Paçoca Cremoso
// 4 - Tapioca Doce Rápida
// 5 - Brigadeiro de Panela
// 6 - Bolo de Cenoura com Cobertura de Chocolate
// 7 - Mousse de Maracujá
// 8 - Arroz Doce Cremoso
// 9 - Quindim
// TOTAL: 9 receitas
window.RECEITAS_DOCE = [
{
id:"churros", titulo:"Churros com Doce de Leite", categoria_principal:"Doce", categorias:["Doce","Rápida"], tempo:"25 min", porcoes:"4 porções", foto:"assets/churros.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"120g"},
{nome:"Açúcar", qtd:"100g"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Doce de leite", qtd:"200g"},
{nome:"Água", qtd:"200ml"},
{nome:"Manteiga", qtd:"1 colher (sopa) - 15g"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Óleo em spray ou azeite", qtd:"para borrifar"}
],
passos:[
{texto:"Ferva a água com a manteiga e o sal em fogo médio.", timer:3},
{texto:"Abaixe o fogo e jogue a farinha de uma só vez. Mexa vigorosamente por 3 minutos, até desgrudar do fundo e formar uma bola lisa.", dica:"Jogar de uma vez evita empelotar.", timer:3},
{texto:"Transfira para uma bancada, deixe amornar por 5 minutos e coloque em saco de confeitar com bico estrela, ou saco resistente com a ponta cortada.", timer:5},
{texto:"Modele tirinhas de cerca de 10cm em assadeira forrada com papel-manteiga, cortando a ponta com tesoura. Borrife um pouco de óleo por cima.", timer:0},
{texto:"Leve para Airfryer preaquecida a 180°C por 8 minutos, até ficar bem dourado e crocante. Se precisar, vire na metade para dourar por igual.", timer:8},
{texto:"Ainda quentes, passe na mistura de açúcar com canela, cobrindo todos os lados. Sirva com o doce de leite para mergulhar.", timer:0}
]
},
{
id:"pudim-leite-condensado", titulo:"Pudim de Leite Condensado", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"90 min + 4h de geladeira", porcoes:"8 porções", foto:"assets/pudim-leite.jpg", airfryer:true,
ingredientes:[
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Leite integral", qtd:"600ml - use a lata do leite condensado como medida, 1 e 1/2 lata"},
{nome:"Ovos", qtd:"3 unidades"},
{nome:"Açúcar", qtd:"200g para o caramelo"},
{nome:"Água quente", qtd:"100ml para o banho-maria"}
],
passos:[
{texto:"Derreta o açúcar em panela em fogo baixo, sem mexer, por cerca de 8 minutos, até virar um caramelo âmbar e brilhante. Não deixe escurecer demais para não amargar.", timer:8},
{texto:"Despeje imediatamente em forma de pudim de 20cm com furo no meio, espalhando no fundo e nas laterais. Deixe esfriar por 10 minutos, até endurecer.", timer:10},
{texto:"Bata o leite condensado, o leite e os ovos no liquidificador por apenas 1 minuto, só até misturar.", dica:"Bater demais deixa o pudim com furinhos.", timer:1},
{texto:"Despeje na forma já caramelada, com cuidado para não quebrar o caramelo. Cubra com papel-alumínio, vedando bem as bordas.", timer:0},
{texto:"Coloque a forma dentro de uma assadeira maior e despeje a água quente até a metade da forma, para o banho-maria. Asse em forno preaquecido a 200°C por 60 minutos, ou na Airfryer a 160°C por 40 minutos, até ficar firme nas bordas e levemente tremido no centro.", timer:60},
{texto:"Deixe esfriar em temperatura ambiente e leve à geladeira por 4 horas, até ficar bem gelado e firme. Para desenformar, passe uma faca nas laterais, coloque um prato por cima e vire de uma só vez.", timer:240}
]
},
{
id:"pave-pacoca-cremoso", titulo:"Pavê de Paçoca Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"30 min + 3h de geladeira", porcoes:"6 porções", foto:"assets/pave-pacoca.jpg",
ingredientes:[
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Leite", qtd:"500ml"},
{nome:"Amido de milho", qtd:"40g - 3 colheres (sopa)"},
{nome:"Paçoca", qtd:"120g - cerca de 6 unidades"},
{nome:"Bolacha maisena", qtd:"200g"},
{nome:"Leite", qtd:"100ml extra para molhar as bolachas"}
],
passos:[
{texto:"Dissolva o amido em um pouco do leite, fora do fogo, mexendo bem para não empelotar. Junte o restante do leite e o leite condensado.", timer:0},
{texto:"Leve ao fogo médio, mexendo sem parar, por cerca de 10 minutos, até engrossar bem e começar a soltar do fundo. Desligue.", timer:10},
{texto:"Esfarele 4 paçocas e misture no creme ainda quente. Deixe amornar por 10 minutos.", timer:10},
{texto:"Em travessa média, monte em camadas: creme, bolacha rapidamente molhada no leite extra, sem encharcar, e creme de novo. Repita até acabar, terminando com creme por cima.", timer:0},
{texto:"Esfarele as 2 paçocas restantes por cima, cubra com plástico-filme e leve à geladeira por 3 horas, até ficar bem gelado e firme.", timer:180}
]
},
{
id:"tapioca-doce-rapida", titulo:"Tapioca Doce Rápida", categoria_principal:"Doce", categorias:["Doce","Rápida","Café da Manhã"], tempo:"8 min", porcoes:"1 porção", foto:"assets/tapioca-doce-rapida.jpg",
ingredientes:[
{nome:"Goma de tapioca", qtd:"80g"},
{nome:"Leite condensado", qtd:"40g"},
{nome:"Coco ralado", qtd:"20g"},
{nome:"Manteiga", qtd:"5g"},
{nome:"Leite em pó", qtd:"1 colher (sopa) - opcional para finalizar"}
],
passos:[
{texto:"Aqueça uma frigideira antiaderente em fogo médio por 1 minuto, sem untar. Peneire a goma diretamente na frigideira, espalhando bem para formar um disco uniforme, sem buracos.", timer:1},
{texto:"Cozinhe por 2 minutos, até as bordas começarem a soltar. Vire e cozinhe por mais 2 minutos.", timer:4},
{texto:"Abaixe o fogo, coloque a manteiga no centro e deixe derreter. Espalhe o leite condensado em apenas uma metade e polvilhe o coco por cima.", timer:0},
{texto:"Dobre a outra metade por cima, aperte as bordas e deixe mais 30 segundos para aquecer o recheio. Retire e polvilhe leite em pó, se quiser.", timer:0}
]
},
{
id:"brigadeiro", titulo:"Brigadeiro de Panela", categoria_principal:"Doce", categorias:["Doce","Brasileira","Festa"], tempo:"25 min + 30 min de geladeira", porcoes:"25 unidades", foto:"assets/brigadeiro.jpg",
ingredientes:[
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Chocolate em pó 50%", qtd:"3 colheres (sopa)"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Granulado de chocolate", qtd:"80g para enrolar"},
{nome:"Manteiga", qtd:"para untar as mãos"}
],
passos:[
{texto:"Misture o leite condensado, o chocolate em pó e a manteiga em panela fora do fogo, até dissolver bem o chocolate.", timer:0},
{texto:"Leve ao fogo baixo, mexendo sem parar, por 10 minutos, até engrossar e desgrudar do fundo.", timer:10},
{texto:"Transfira para prato untado, cubra com plástico-filme encostando no doce e leve à geladeira por 30 minutos.", timer:30},
{texto:"Com as mãos untadas, faça bolinhas e passe no granulado.", timer:0}
]
},
{
id:"bolo-cenoura-chocolate", titulo:"Bolo de Cenoura com Cobertura de Chocolate", categoria_principal:"Doce", categorias:["Doce","Brasileira","Bolo"], tempo:"60 min", porcoes:"10 fatias", foto:"assets/bolo-cenoura-chocolate.jpg",
ingredientes:[
{nome:"Cenoura", qtd:"300g descascada em pedaços - cerca de 3 médias"},
{nome:"Ovos", qtd:"4 unidades"},
{nome:"Óleo", qtd:"200ml"},
{nome:"Açúcar", qtd:"300g"},
{nome:"Farinha de trigo", qtd:"300g"},
{nome:"Fermento em pó", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Açúcar", qtd:"100g para a cobertura"},
{nome:"Chocolate em pó", qtd:"4 colheres (sopa) para a cobertura"},
{nome:"Manteiga", qtd:"1 colher (sopa) para a cobertura"},
{nome:"Leite", qtd:"80ml para a cobertura"}
],
passos:[
{texto:"Bata a cenoura, os ovos, o óleo e o açúcar no liquidificador por 2 minutos, até ficar liso.", timer:2},
{texto:"Despeje em tigela, junte a farinha e o sal e misture até incorporar. Junte o fermento e misture levemente.", timer:0},
{texto:"Despeje em forma de 22cm untada e enfarinhada e asse em forno preaquecido a 180°C por 40 minutos, até passar no teste do palito.", timer:40},
{texto:"Para a cobertura, misture o açúcar, o chocolate, a manteiga e o leite em panela e ferva por 3 minutos, até engrossar levemente.", timer:3},
{texto:"Fure o bolo ainda quente com garfo e despeje a cobertura por cima.", timer:0}
]
},
{
id:"mousse-maracuja", titulo:"Mousse de Maracujá", categoria_principal:"Doce", categorias:["Doce","Brasileira","Rápida"], tempo:"10 min + 3h de geladeira", porcoes:"6 porções", foto:"assets/mousse-maracuja.jpg",
ingredientes:[
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Creme de leite", qtd:"200g - 1 caixinha gelada"},
{nome:"Suco de maracujá concentrado", qtd:"200ml"},
{nome:"Polpa de maracujá", qtd:"1 unidade para finalizar"},
{nome:"Açúcar", qtd:"1 colher (sopa) para a calda - opcional"}
],
passos:[
{texto:"Bata o leite condensado, o creme de leite e o suco de maracujá no liquidificador por 2 minutos, até ficar cremoso.", timer:2},
{texto:"Despeje em taças ou travessa e leve à geladeira por 3 horas, até firmar.", timer:180},
{texto:"Misture a polpa com o açúcar e coloque por cima na hora de servir.", timer:0}
]
},
{
id:"arroz-doce", titulo:"Arroz Doce Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"45 min", porcoes:"6 porções", foto:"assets/arroz-doce.jpg",
ingredientes:[
{nome:"Arroz branco", qtd:"200g lavado"},
{nome:"Água", qtd:"500ml"},
{nome:"Leite integral", qtd:"800ml"},
{nome:"Leite condensado", qtd:"200g"},
{nome:"Canela em pau", qtd:"1 unidade"},
{nome:"Cravo", qtd:"3 unidades"},
{nome:"Canela em pó", qtd:"para polvilhar"},
{nome:"Sal", qtd:"1 pitada"}
],
passos:[
{texto:"Cozinhe o arroz na água com a canela em pau, o cravo e o sal em fogo médio por 15 minutos, até a água quase secar.", timer:15},
{texto:"Junte o leite e cozinhe em fogo baixo por 20 minutos, mexendo de vez em quando, até o arroz ficar bem macio e cremoso.", timer:20},
{texto:"Junte o leite condensado, misture e cozinhe por mais 5 minutos, até ficar cremoso e brilhante.", timer:5},
{texto:"Retire a canela e os cravos, coloque em tigelas e polvilhe canela em pó.", timer:0}
]
},
{
id:"quindim", titulo:"Quindim", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"55 min + 2h de geladeira", porcoes:"10 unidades", foto:"assets/quindim.jpg",
ingredientes:[
{nome:"Gemas", qtd:"10 unidades peneiradas"},
{nome:"Açúcar", qtd:"300g"},
{nome:"Coco ralado", qtd:"100g"},
{nome:"Manteiga derretida", qtd:"1 colher (sopa)"},
{nome:"Açúcar", qtd:"para untar as forminhas"},
{nome:"Manteiga", qtd:"para untar as forminhas"}
],
passos:[
{texto:"Misture o açúcar e o coco em tigela. Junte as gemas peneiradas e a manteiga e misture delicadamente, sem bater, até incorporar.", dica:"Não bater evita espuma e deixa o quindim lisinho.", timer:0},
{texto:"Unte forminhas de quindim com bastante manteiga e polvilhe açúcar.", timer:0},
{texto:"Despeje a massa nas forminhas até quase encher. Coloque em assadeira com água quente até a metade, para o banho-maria.", timer:0},
{texto:"Asse em forno preaquecido a 180°C por 35 minutos, até dourar por cima e firmar.", timer:35},
{texto:"Deixe amornar, leve à geladeira por 2 horas e desenforme com cuidado.", timer:120}
]
}
];
