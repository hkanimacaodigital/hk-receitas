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
// 10 - Torta de Limão Gelada
// 11 - Bolo de Fubá Cremoso
// 12 - Manjar de Coco com Ameixa
// 13 - Curau de Milho Cremoso
// 14 - Cocada de Forno
// 15 - Gelatina Mosaico
// 16 - Banoffee de Banana
// 17 - Pé de Moleque Crocante
// 18 - Creme de Papaya com Cassis
// 19 - Doce de Abóbora com Coco
// TOTAL: 19 receitas
window.RECEITAS_DOCE = [
{
id:"churros", titulo:"Churros com Doce de Leite", categoria_principal:"Doce", categorias:["Doce","Rápida"], tempo:"25 min", porcoes:"4 porções", foto:"assets/churros.jpg", airfryer:true,
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
id:"pudim-leite-condensado", titulo:"Pudim de Leite Condensado", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"90 min + 4h de geladeira", porcoes:"8 porções", foto:"assets/pudim-leite-condensado.jpg", airfryer:true,
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
id:"pave-pacoca-cremoso", titulo:"Pavê de Paçoca Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"30 min + 3h de geladeira", porcoes:"6 porções", foto:"assets/pave-pacoca-cremoso.jpg",
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
},
{
id:"torta-limao-gelada", titulo:"Torta de Limão Gelada", categoria_principal:"Doce", categorias:["Doce","Torta"], tempo:"20 min + 3h de geladeira", porcoes:"8 fatias", foto:"assets/torta-limao-gelada.jpg",
ingredientes:[
{nome:"Bolacha maisena", qtd:"200g triturada"},
{nome:"Manteiga derretida", qtd:"100g"},
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Suco de limão", qtd:"120ml - cerca de 4 limões"},
{nome:"Creme de leite", qtd:"200g - 1 caixinha"},
{nome:"Raspas de limão", qtd:"1 colher (chá) para finalizar"}
],
passos:[
{texto:"Misture a bolacha triturada com a manteiga até formar uma farofa úmida. Forre o fundo e as laterais de uma forma de 20cm apertando bem.", timer:0},
{texto:"Bata o leite condensado, o suco de limão e o creme de leite no liquidificador por 2 minutos, até ficar cremoso.", timer:2},
{texto:"Despeje sobre a base e leve à geladeira por 3 horas, até firmar.", timer:180},
{texto:"Finalize com raspas de limão na hora de servir.", timer:0}
]
},
{
id:"bolo-fuba-cremoso", titulo:"Bolo de Fubá Cremoso", categoria_principal:"Doce", categorias:["Doce","Bolo","Brasileira"], tempo:"60 min", porcoes:"10 fatias", foto:"assets/bolo-fuba-cremoso.jpg",
ingredientes:[
{nome:"Fubá", qtd:"200g"},
{nome:"Açúcar", qtd:"300g"},
{nome:"Leite integral", qtd:"600ml"},
{nome:"Ovos", qtd:"3 unidades"},
{nome:"Manteiga derretida", qtd:"2 colheres (sopa)"},
{nome:"Queijo parmesão ralado", qtd:"50g"},
{nome:"Fermento em pó", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 pitada"}
],
passos:[
{texto:"Bata o leite, os ovos, o açúcar e a manteiga no liquidificador por 1 minuto.", timer:1},
{texto:"Junte o fubá, o queijo e o sal e bata por mais 1 minuto. Junte o fermento e misture levemente.", timer:1},
{texto:"Despeje em forma de 22cm untada e enfarinhada e asse em forno preaquecido a 180°C por 45 minutos, até dourar e firmar nas bordas, com o centro ainda cremoso.", timer:45},
{texto:"Deixe amornar por 15 minutos antes de cortar, para o creme firmar. Sirva morno ou frio.", timer:15}
]
},
{
id:"manjar-coco-ameixa", titulo:"Manjar de Coco com Ameixa", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"25 min + 4h de geladeira", porcoes:"8 porções", foto:"assets/manjar-coco-ameixa.jpg",
ingredientes:[
{nome:"Leite de coco", qtd:"400ml - 2 vidros"},
{nome:"Leite integral", qtd:"500ml"},
{nome:"Leite condensado", qtd:"200g"},
{nome:"Amido de milho", qtd:"60g - 4 colheres (sopa)"},
{nome:"Coco ralado", qtd:"50g"},
{nome:"Ameixa seca sem caroço", qtd:"200g para a calda"},
{nome:"Açúcar", qtd:"100g para a calda"},
{nome:"Água", qtd:"200ml para a calda"}
],
passos:[
{texto:"Dissolva o amido em um pouco do leite, fora do fogo. Junte o restante do leite, o leite de coco, o leite condensado e o coco ralado.", timer:0},
{texto:"Leve ao fogo médio, mexendo sem parar, por 12 minutos, até engrossar bem e soltar do fundo.", timer:12},
{texto:"Despeje em forma de pudim levemente untada com óleo e leve à geladeira por 4 horas, até firmar.", timer:240},
{texto:"Para a calda, ferva a ameixa, o açúcar e a água por 8 minutos, até ficar brilhante. Deixe esfriar.", timer:8},
{texto:"Desenforme o manjar e cubra com a calda fria na hora de servir.", timer:0}
]
},
{
id:"curau-milho-cremoso", titulo:"Curau de Milho Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"35 min", porcoes:"6 porções", foto:"assets/curau-milho-cremoso.jpg",
ingredientes:[
{nome:"Milho verde debulhado", qtd:"500g - cerca de 4 espigas ou 2 latas escorridas"},
{nome:"Leite integral", qtd:"500ml"},
{nome:"Açúcar", qtd:"150g"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Canela em pó", qtd:"para polvilhar"}
],
passos:[
{texto:"Bata o milho com o leite no liquidificador por 3 minutos, até triturar bem.", timer:3},
{texto:"Peneire em peneira grossa, apertando para extrair todo o líquido. Descarte o bagaço.", timer:0},
{texto:"Leve o líquido ao fogo médio com o açúcar, a manteiga e o sal, mexendo sem parar por 12 minutos, até engrossar e ficar cremoso.", timer:12},
{texto:"Coloque em tigelas e polvilhe canela em pó. Sirva morno ou gelado.", timer:0}
]
},
{
id:"cocada-forno", titulo:"Cocada de Forno", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"35 min", porcoes:"12 pedaços", foto:"assets/cocada-forno.jpg", airfryer:true,
ingredientes:[
{nome:"Coco ralado em flocos", qtd:"200g"},
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Ovos", qtd:"2 unidades"},
{nome:"Açúcar", qtd:"50g"},
{nome:"Manteiga derretida", qtd:"1 colher (sopa)"}
],
passos:[
{texto:"Misture o coco, o leite condensado, os ovos, o açúcar e a manteiga em tigela até ficar homogêneo.", timer:0},
{texto:"Despeje em forma de 20cm untada, espalhando bem.", timer:0},
{texto:"Asse em forno preaquecido a 180°C por 22 minutos, ou na Airfryer a 160°C por 15 minutos, até dourar por cima e firmar.", timer:22},
{texto:"Deixe amornar por 10 minutos e corte em quadrados. Sirva morna ou fria.", timer:10}
]
},
{
id:"gelatina-mosaico", titulo:"Gelatina Mosaico", categoria_principal:"Doce", categorias:["Doce","Festa"], tempo:"30 min + 4h de geladeira", porcoes:"10 porções", foto:"assets/gelatina-mosaico.jpg",
ingredientes:[
{nome:"Gelatina de morango", qtd:"1 caixinha - 25g"},
{nome:"Gelatina de limão", qtd:"1 caixinha - 25g"},
{nome:"Gelatina de uva", qtd:"1 caixinha - 25g"},
{nome:"Gelatina sem sabor", qtd:"24g - 2 envelopes"},
{nome:"Água quente", qtd:"600ml para as gelatinas coloridas"},
{nome:"Água fria", qtd:"600ml para as gelatinas coloridas"},
{nome:"Leite condensado", qtd:"395g - 1 lata"},
{nome:"Creme de leite", qtd:"200g - 1 caixinha"},
{nome:"Água quente", qtd:"300ml para dissolver a gelatina sem sabor"}
],
passos:[
{texto:"Prepare cada gelatina colorida separadamente com 200ml de água quente e 200ml de água fria. Leve cada uma à geladeira por 2 horas, até firmar.", timer:120},
{texto:"Corte as gelatinas firmes em cubinhos e misture em uma travessa untada levemente com óleo.", timer:0},
{texto:"Dissolva a gelatina sem sabor na água quente e bata no liquidificador com o leite condensado e o creme de leite por 1 minuto.", timer:1},
{texto:"Despeje o creme branco sobre os cubos, misturando levemente. Leve à geladeira por 2 horas, até firmar bem.", timer:120},
{texto:"Corte em quadrados e sirva gelado.", timer:0}
]
},
{
id:"banoffee-banana", titulo:"Banoffee de Banana", categoria_principal:"Doce", categorias:["Doce","Torta"], tempo:"20 min + 2h de geladeira", porcoes:"8 fatias", foto:"assets/banoffee-banana.jpg",
ingredientes:[
{nome:"Bolacha maisena", qtd:"200g triturada"},
{nome:"Manteiga derretida", qtd:"100g"},
{nome:"Doce de leite", qtd:"400g - firme"},
{nome:"Banana", qtd:"4 unidades maduras em rodelas"},
{nome:"Creme de leite fresco", qtd:"300ml bem gelado"},
{nome:"Açúcar", qtd:"2 colheres (sopa)"},
{nome:"Canela em pó", qtd:"para polvilhar"}
],
passos:[
{texto:"Misture a bolacha com a manteiga e forre o fundo de uma forma de 20cm com fundo removível, apertando bem. Leve à geladeira por 15 minutos.", timer:15},
{texto:"Espalhe o doce de leite sobre a base e cubra com as rodelas de banana.", timer:0},
{texto:"Bata o creme de leite com o açúcar até virar chantilly firme. Espalhe sobre a banana.", timer:0},
{texto:"Leve à geladeira por 2 horas. Polvilhe canela na hora de servir.", timer:120}
]
},
{
id:"pe-moleque-crocante", titulo:"Pé de Moleque Crocante", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"30 min", porcoes:"15 pedaços", foto:"assets/pe-moleque-crocante.jpg",
ingredientes:[
{nome:"Amendoim torrado sem casca", qtd:"400g"},
{nome:"Açúcar", qtd:"300g"},
{nome:"Água", qtd:"100ml"},
{nome:"Leite condensado", qtd:"100g"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 pitada"}
],
passos:[
{texto:"Derreta o açúcar com a água em panela em fogo médio, sem mexer, por 8 minutos, até virar um caramelo âmbar.", timer:8},
{texto:"Junte a manteiga, o leite condensado e o sal e mexa por 2 minutos, até ficar homogêneo.", timer:2},
{texto:"Junte o amendoim e mexa por 3 minutos, até envolver tudo no caramelo.", timer:3},
{texto:"Despeje em assadeira untada, espalhe e deixe esfriar por 15 minutos. Quebre em pedaços e sirva.", timer:15}
]
},
{
id:"creme-papaya-cassis", titulo:"Creme de Papaya com Cassis", categoria_principal:"Doce", categorias:["Doce","Rápida"], tempo:"10 min", porcoes:"2 porções", foto:"assets/creme-papaya-cassis.jpg",
ingredientes:[
{nome:"Mamão papaya", qtd:"1 unidade grande maduro, sem sementes"},
{nome:"Sorvete de creme", qtd:"4 bolas"},
{nome:"Licor de cassis", qtd:"30ml - ou groselha para versão sem álcool"}
],
passos:[
{texto:"Bata o mamão com o sorvete no liquidificador por 1 minuto, até ficar cremoso.", timer:1},
{texto:"Coloque em taças e regue com o cassis por cima. Sirva na hora, bem gelado.", timer:0}
]
},
{
id:"doce-abobora-coco", titulo:"Doce de Abóbora com Coco", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"50 min", porcoes:"8 porções", foto:"assets/doce-abobora-coco.jpg",
ingredientes:[
{nome:"Abóbora", qtd:"800g descascada em cubos"},
{nome:"Açúcar", qtd:"300g"},
{nome:"Coco ralado", qtd:"100g"},
{nome:"Cravo", qtd:"3 unidades"},
{nome:"Canela em pau", qtd:"1 unidade"},
{nome:"Água", qtd:"100ml"}
],
passos:[
{texto:"Cozinhe a abóbora com a água, o cravo e a canela em fogo médio por 20 minutos, até desmanchar.", timer:20},
{texto:"Junte o açúcar e cozinhe em fogo baixo por 20 minutos, mexendo de vez em quando, até engrossar e soltar do fundo.", timer:20},
{texto:"Junte o coco, misture e cozinhe por mais 5 minutos. Retire o cravo e a canela.", timer:5},
{texto:"Coloque em compoteira e sirva morno ou gelado, puro ou com queijo branco.", timer:0}
]
}
];
