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
// --------------------
// Incluído no dia 21/11/2026
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
{texto:"Transfira para uma bancada, deixe amornar por 5 minutos e coloque em saco de confeitar com bico estrela, ou saco resistente com a ponta cortada.", dica:"Se colocar quente demais, o saco estoura. Deixe amornar.", timer:5},
{texto:"Modele tirinhas de cerca de 10cm em assadeira forrada com papel-manteiga, cortando a ponta com tesoura. Borrife um pouco de óleo por cima.", dica:"Não faça muito grosso, senão fica cru por dentro.", timer:0},
{texto:"Leve para Airfryer preaquecida a 180°C por 8 minutos, até ficar bem dourado e crocante. Se precisar, vire na metade para dourar por igual.", dica:"Não empilhe, deixe espaço entre eles para dourar por igual.", timer:8},
{texto:"Ainda quentes, passe na mistura de açúcar com canela, cobrindo todos os lados.", dica:"Sirva quente, com o doce de leite para mergulhar. Se esfriar, perde a crocância.", timer:0}
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
{texto:"Derreta o açúcar em panela em fogo baixo, sem mexer, por cerca de 8 minutos, até virar um caramelo âmbar e brilhante.", dica:"Não deixe escurecer demais para não amargar. Não mexa, só balance a panela.", timer:8},
{texto:"Despeje imediatamente em forma de pudim de 20cm com furo no meio, espalhando no fundo e nas laterais. Deixe esfriar por 10 minutos, até endurecer.", dica:"O caramelo endurece rápido, espalhe logo que despejar.", timer:10},
{texto:"Bata o leite condensado, o leite e os ovos no liquidificador por apenas 1 minuto, só até misturar.", dica:"Bater demais deixa o pudim com furinhos.", timer:1},
{texto:"Despeje na forma já caramelada, com cuidado para não quebrar o caramelo. Cubra com papel-alumínio, vedando bem as bordas.", timer:0},
{texto:"Coloque a forma dentro de uma assadeira maior e despeje a água quente até a metade da forma, para o banho-maria. Asse em forno preaquecido a 200°C por 60 minutos, ou na Airfryer a 160°C por 40 minutos, até ficar firme nas bordas e levemente tremido no centro.", dica:"O centro tem que tremer um pouco, ele firma na geladeira.", timer:60},
{texto:"Deixe esfriar em temperatura ambiente e leve à geladeira por 4 horas, até ficar bem gelado e firme.", dica:"Sirva bem gelado. Para desenformar, passe uma faca nas laterais, coloque um prato por cima e vire de uma só vez.", timer:240}
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
{texto:"Dissolva o amido em um pouco do leite, fora do fogo, mexendo bem para não empelotar.", dica:"Dissolver fora do fogo evita empelotar.", timer:0},
{texto:"Junte o restante do leite e o leite condensado.", timer:0},
{texto:"Leve ao fogo médio, mexendo sem parar, por cerca de 10 minutos, até engrossar bem e começar a soltar do fundo.", dica:"Mexa o fundo e as bordas, onde empelota primeiro.", timer:10},
{texto:"Esfarele 4 paçocas e misture no creme ainda quente. Deixe amornar por 10 minutos.", dica:"Misturar quente espalha o sabor da paçoca no creme todo.", timer:10},
{texto:"Em travessa média, monte em camadas: creme, bolacha rapidamente molhada no leite extra, sem encharcar, e creme de novo. Repita até acabar, terminando com creme por cima.", dica:"Molhe rápido, se encharcar a bolacha desmancha e o pavê fica mole.", timer:0},
{texto:"Esfarele as 2 paçocas restantes por cima, cubra com plástico-filme e leve à geladeira por 3 horas, até ficar bem gelado e firme.", dica:"Sirva bem gelado.", timer:180}
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
{texto:"Aqueça uma frigideira antiaderente em fogo médio por 1 minuto, sem untar.", timer:1},
{texto:"Peneire a goma diretamente na frigideira, espalhando bem para formar um disco uniforme, sem buracos.", dica:"Peneirar deixa a tapioca lisinha, sem buracos.", timer:0},
{texto:"Cozinhe por 2 minutos, até as bordas começarem a soltar. Vire e cozinhe por mais 2 minutos.", timer:4},
{texto:"Abaixe o fogo, coloque a manteiga no centro e deixe derreter. Espalhe o leite condensado em apenas uma metade e polvilhe o coco por cima.", dica:"Coloque o recheio só em uma metade para conseguir dobrar.", timer:0},
{texto:"Dobre a outra metade por cima, aperte as bordas e deixe mais 30 segundos para aquecer o recheio.", timer:0},
{texto:"Retire e polvilhe leite em pó, se quiser.", dica:"Sirva na hora, quentinha. Tapioca fria fica borrachuda.", timer:0}
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
{texto:"Misture o leite condensado, o chocolate em pó e a manteiga em panela fora do fogo, até dissolver bem o chocolate.", dica:"Dissolver fora do fogo evita que o chocolate empelote.", timer:0},
{texto:"Leve ao fogo baixo, mexendo sem parar, por 10 minutos, até engrossar e desgrudar do fundo.", dica:"Ponto certo: quando passa a colher e aparece o fundo da panela.", timer:10},
{texto:"Transfira para prato untado, cubra com plástico-filme encostando no doce e leve à geladeira por 30 minutos.", dica:"Plástico encostando evita que crie casquinha.", timer:30},
{texto:"Com as mãos untadas, faça bolinhas e passe no granulado.", dica:"Sirva em temperatura ambiente. Se guardar na geladeira, tire 15 minutos antes de servir para não ficar duro.", timer:0}
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
{texto:"Bata a cenoura, os ovos, o óleo e o açúcar no liquidificador por 2 minutos, até ficar liso.", dica:"Bater bem deixa o bolo sem pedacinhos de cenoura.", timer:2},
{texto:"Despeje em tigela, junte a farinha e o sal e misture até incorporar. Junte o fermento e misture levemente.", dica:"Não bata depois da farinha, só misture, senão o bolo fica pesado.", timer:0},
{texto:"Despeje em forma de 22cm untada e enfarinhada e asse em forno preaquecido a 180°C por 40 minutos, até passar no teste do palito.", dica:"Não abra o forno nos primeiros 30 minutos, senão o bolo murcha.", timer:40},
{texto:"Para a cobertura, misture o açúcar, o chocolate, a manteiga e o leite em panela e ferva por 3 minutos, até engrossar levemente.", dica:"A cobertura engrossa quando esfria, deixe ela mais líquida no fogo.", timer:3},
{texto:"Fure o bolo ainda quente com garfo e despeje a cobertura por cima.", dica:"Sirva morno ou em temperatura ambiente. Furar faz a cobertura entrar no bolo.", timer:0}
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
{texto:"Bata o leite condensado, o creme de leite e o suco de maracujá no liquidificador por 2 minutos, até ficar cremoso.", dica:"Use suco concentrado, o natural deixa a mousse mole.", timer:2},
{texto:"Despeje em taças ou travessa e leve à geladeira por 3 horas, até firmar.", dica:"Deixe firmar bem, se servir antes fica mole.", timer:180},
{texto:"Misture a polpa com o açúcar e coloque por cima na hora de servir.", dica:"Sirva bem gelada, com a polpa por cima na hora.", timer:0}
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
{texto:"Cozinhe o arroz na água com a canela em pau, o cravo e o sal em fogo médio por 15 minutos, até a água quase secar.", dica:"Cozinhar primeiro na água deixa o arroz macio sem gastar tanto leite.", timer:15},
{texto:"Junte o leite e cozinhe em fogo baixo por 20 minutos, mexendo de vez em quando, até o arroz ficar bem macio e cremoso.", dica:"Mexa de vez em quando para não grudar no fundo.", timer:20},
{texto:"Junte o leite condensado, misture e cozinhe por mais 5 minutos, até ficar cremoso e brilhante.", dica:"Coloque o leite condensado só no final, senão ele gruda e queima.", timer:5},
{texto:"Retire a canela e os cravos, coloque em tigelas e polvilhe canela em pó.", dica:"Sirva morno ou gelado. Ele engrossa quando esfria, se ficar grosso demais, solte com um pouco de leite.", timer:0}
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
{texto:"Misture o açúcar e o coco em tigela.", timer:0},
{texto:"Junte as gemas peneiradas e a manteiga e misture delicadamente, sem bater, até incorporar.", dica:"Não bater evita espuma e deixa o quindim lisinho. Peneirar a gema tira o cheiro de ovo.", timer:0},
{texto:"Unte forminhas de quindim com bastante manteiga e polvilhe açúcar.", dica:"Unte bem, senão gruda e quebra na hora de desenformar.", timer:0},
{texto:"Despeje a massa nas forminhas até quase encher. Coloque em assadeira com água quente até a metade, para o banho-maria.", timer:0},
{texto:"Asse em forno preaquecido a 180°C por 35 minutos, até dourar por cima e firmar.", dica:"O banho-maria deixa o quindim cremoso, sem ele fica seco.", timer:35},
{texto:"Deixe amornar, leve à geladeira por 2 horas e desenforme com cuidado.", dica:"Sirva bem gelado. Desenforme gelado, quente ele quebra.", timer:120}
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
{texto:"Misture a bolacha triturada com a manteiga até formar uma farofa úmida.", dica:"A farofa tem que ficar úmida como areia molhada, se ficar seca a base esfarela.", timer:0},
{texto:"Forre o fundo e as laterais de uma forma de 20cm apertando bem com o fundo de um copo.", dica:"Apertar bem deixa a base firme e não quebra na hora de cortar.", timer:0},
{texto:"Bata o leite condensado, o suco de limão e o creme de leite no liquidificador por 2 minutos, até ficar cremoso.", dica:"O limão já talha e engrossa o creme, não precisa de gelatina.", timer:2},
{texto:"Despeje sobre a base e leve à geladeira por 3 horas, até firmar.", dica:"Deixe pelo menos 3h, se desenformar antes ela desmancha.", timer:180},
{texto:"Finalize com raspas de limão.", dica:"Sirva bem gelada. Rale só a parte verde, a parte branca amarga.", timer:0}
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
{texto:"Bata o leite, os ovos, o açúcar e a manteiga no liquidificador por 1 minuto.", dica:"Bater bem aqui deixa o bolo mais liso e cremoso.", timer:1},
{texto:"Junte o fubá, o queijo e o sal e bata por mais 1 minuto.", dica:"O queijo dá o salgadinho que equilibra o doce, não pule.", timer:1},
{texto:"Junte o fermento e misture levemente com uma colher.", dica:"Misturar leve faz o bolo crescer sem ficar pesado.", timer:0},
{texto:"Despeje em forma de 22cm untada e enfarinhada e asse em forno preaquecido a 180°C por 45 minutos, até dourar e firmar nas bordas, com o centro ainda cremoso.", dica:"O centro tem que ficar tremendo um pouco, ele firma quando esfria. Se assar até secar, perde o cremoso.", timer:45},
{texto:"Deixe amornar por 15 minutos antes de cortar, para o creme firmar.", dica:"Sirva morno ou frio. Se cortar quente demais, desmancha.", timer:15}
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
{texto:"Dissolva o amido em um pouco do leite, fora do fogo.", dica:"Dissolver fora do fogo evita empelotar.", timer:0},
{texto:"Junte o restante do leite, o leite de coco, o leite condensado e o coco ralado.", timer:0},
{texto:"Leve ao fogo médio, mexendo sem parar, por 12 minutos, até engrossar bem e soltar do fundo.", dica:"Mexa o fundo e as bordas, onde empelota primeiro.", timer:12},
{texto:"Despeje em forma de pudim levemente untada com óleo e leve à geladeira por 4 horas, até firmar.", dica:"Untar com óleo ajuda a desenformar sem quebrar.", timer:240},
{texto:"Para a calda, ferva a ameixa, o açúcar e a água por 8 minutos, até ficar brilhante. Deixe esfriar.", dica:"A calda engrossa quando esfria, não deixe engrossar demais no fogo.", timer:8},
{texto:"Desenforme o manjar e cubra com a calda fria.", dica:"Sirva bem gelado, com a calda por cima na hora de servir.", timer:0}
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
{texto:"Bata o milho com o leite no liquidificador por 3 minutos, até triturar bem.", dica:"Bater bem deixa o curau mais liso, sem fiapos.", timer:3},
{texto:"Peneire em peneira grossa, apertando para extrair todo o líquido. Descarte o bagaço.", dica:"Aperte bem com colher, é no líquido que fica o sabor.", timer:0},
{texto:"Leve o líquido ao fogo médio com o açúcar, a manteiga e o sal, mexendo sem parar por 12 minutos, até engrossar e ficar cremoso.", dica:"Ele engrossa de repente no final, não pare de mexer.", timer:12},
{texto:"Coloque em tigelas e polvilhe canela em pó.", dica:"Sirva morno ou gelado, dos dois jeitos fica bom.", timer:0}
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
{texto:"Misture o coco, o leite condensado, os ovos, o açúcar e a manteiga em tigela até ficar homogêneo.", dica:"Use coco em flocos, o fininho deixa a cocada seca.", timer:0},
{texto:"Despeje em forma de 20cm untada, espalhando bem.", timer:0},
{texto:"Asse em forno preaquecido a 180°C por 22 minutos, ou na Airfryer a 160°C por 15 minutos, até dourar por cima e firmar.", dica:"Tire quando dourar por cima, se passar do ponto ela resseca.", timer:22},
{texto:"Deixe amornar por 10 minutos e corte em quadrados.", dica:"Sirva morna ou fria. Corte morna, depois que esfria ela quebra.", timer:10}
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
{texto:"Prepare cada gelatina colorida separadamente com 200ml de água quente e 200ml de água fria.", dica:"Use menos água que o pacote pede, assim os cubos ficam firmes e não desmancham.", timer:0},
{texto:"Leve cada uma à geladeira por 2 horas, até firmar.", timer:120},
{texto:"Corte as gelatinas firmes em cubinhos e misture em uma travessa untada levemente com óleo.", dica:"Untar com óleo ajuda a desenformar inteira.", timer:0},
{texto:"Dissolva a gelatina sem sabor na água quente e bata no liquidificador com o leite condensado e o creme de leite por 1 minuto.", dica:"Deixe o creme branco amornar antes de jogar nos cubos, se jogar quente ele derrete as cores.", timer:1},
{texto:"Despeje o creme branco sobre os cubos, misturando levemente. Leve à geladeira por 2 horas, até firmar bem.", timer:120},
{texto:"Corte em quadrados.", dica:"Sirva bem gelada. Corte com faca molhada para não rachar.", timer:0}
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
{texto:"Misture a bolacha com a manteiga e forre o fundo de uma forma de 20cm com fundo removível, apertando bem.", dica:"Fundo removível facilita muito na hora de desenformar.", timer:0},
{texto:"Leve à geladeira por 15 minutos.", dica:"Gelar a base deixa ela firme e não mistura com o doce de leite.", timer:15},
{texto:"Espalhe o doce de leite sobre a base e cubra com as rodelas de banana.", dica:"Use doce de leite firme, o mole escorre e molha a base.", timer:0},
{texto:"Bata o creme de leite com o açúcar até virar chantilly firme. Espalhe sobre a banana.", dica:"Creme tem que estar bem gelado, senão não vira chantilly.", timer:0},
{texto:"Leve à geladeira por 2 horas. Polvilhe canela.", dica:"Sirva bem gelada. Monte no dia que for servir, a banana escurece rápido.", timer:120}
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
{texto:"Derreta o açúcar com a água em panela em fogo médio, sem mexer, por 8 minutos, até virar um caramelo âmbar.", dica:"Não mexa o caramelo, mexer faz ele cristalizar e empelotar.", timer:8},
{texto:"Junte a manteiga, o leite condensado e o sal e mexa por 2 minutos, até ficar homogêneo.", dica:"Cuidado, vai borbulhar forte quando juntar o leite condensado.", timer:2},
{texto:"Junte o amendoim e mexa por 3 minutos, até envolver tudo no caramelo.", timer:3},
{texto:"Despeje em assadeira untada, espalhe e deixe esfriar por 15 minutos.", dica:"Espalhe rápido, ele endurece em poucos minutos.", timer:15},
{texto:"Quebre em pedaços.", dica:"Sirva em temperatura ambiente. Guarde em pote fechado para não murchar.", timer:0}
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
{texto:"Bata o mamão com o sorvete no liquidificador por 1 minuto, até ficar cremoso.", dica:"Use mamão bem maduro e sorvete gelado, é isso que deixa cremoso sem precisar de leite.", timer:1},
{texto:"Coloque em taças e regue com o cassis por cima.", dica:"Sirva na hora, bem gelado. Se deixar esperando, ele desanda e fica aguado.", timer:0}
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
{texto:"Cozinhe a abóbora com a água, o cravo e a canela em fogo médio por 20 minutos, até desmanchar.", dica:"A abóbora já solta água, não coloque água demais senão fica ralo.", timer:20},
{texto:"Junte o açúcar e cozinhe em fogo baixo por 20 minutos, mexendo de vez em quando, até engrossar e soltar do fundo.", dica:"Mexa o fundo para não grudar e queimar.", timer:20},
{texto:"Junte o coco, misture e cozinhe por mais 5 minutos.", dica:"Coloque o coco só no final para ele não sumir no doce.", timer:5},
{texto:"Retire o cravo e a canela e coloque em compoteira.", dica:"Sirva morno ou gelado, puro ou com queijo branco. Tire o cravo e a canela antes de servir para ninguém morder.", timer:0}
]
}
];
