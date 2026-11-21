// RECEITAS CAFÉ DA MANHÃ
// 1 - Pão na Chapa Cremoso
// 2 - Tapioca de Frango Cremoso
// 3 - Ovos Mexidos Turbinado
// 4 - Omelete Rápido Recheado
// 5 - Panqueca de Banana com Aveia
// 6 - Cuscuz Nordestino com Queijo Coalho
// 7 - Torrada de Abacate com Ovo
// 8 - Iogurte com Granola e Frutas
// 9 - Vitamina de Banana com Aveia
// --------------------
// Incluído no dia 21/11/2026
// 10 - Mingau de Aveia com Banana e Canela
// 11 - Açaí na Tigela com Granola
// 12 - Waffle de Aveia com Mel
// 13 - Ovo Poché com Torrada
// 14 - Salada de Frutas com Mel e Hortelã
// 15 - Bolo de Banana de Caneca
// 16 - Pão com Ovo no Buraco
// 17 - Crepioca de Banana e Canela
// 18 - Suco Verde Detox
// 19 - Bolo de Milho de Frigideira
// TOTAL: 19 receitas
window.RECEITAS_CAFE_DA_MANHA = [
{
id:"pao-chapa-cremoso", titulo:"Pão na Chapa Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Lanche","Rápida"], tempo:"10 min", porcoes:"1 porção", foto:"assets/pao-chapa-cremoso.jpg",
ingredientes:[
{nome:"Pão francês", qtd:"2 unidades"},
{nome:"Manteiga", qtd:"30g em temperatura ambiente"},
{nome:"Muçarela", qtd:"60g fatiada ou ralada"},
{nome:"Orégano", qtd:"1 pitada"},
{nome:"Sal", qtd:"1 pitada - opcional"}
],
passos:[
{texto:"Corte os pães ao meio no sentido do comprimento, sem separar totalmente. Passe a manteiga generosamente por dentro e por fora.", dica:"Manteiga por fora deixa a casquinha crocante.", timer:0},
{texto:"Coloque a muçarela dentro, distribuindo bem. Feche e aperte levemente.", timer:0},
{texto:"Leve para chapa ou frigideira já quente, em fogo médio, e doure por 2 minutos de cada lado, apertando com a espátula, até ficar crocante e o queijo derreter.", timer:4},
{texto:"Retire e polvilhe o orégano por cima.", dica:"Sirva quente, na hora, com o queijo puxando.", timer:0}
]
},
{
id:"tapioca-frango-cremoso", titulo:"Tapioca de Frango Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Saudável"], tempo:"15 min", porcoes:"1 porção", foto:"assets/tapioca-frango.jpg",
ingredientes:[
{nome:"Goma de tapioca", qtd:"80g"},
{nome:"Frango desfiado já temperado e cozido", qtd:"150g"},
{nome:"Requeijão light", qtd:"40g"},
{nome:"Tomate", qtd:"15g picado sem sementes"},
{nome:"Cheiro-verde", qtd:"1 colher (sopa) picado"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Pimenta-do-reino", qtd:"a gosto"}
],
passos:[
{texto:"Misture o frango com o requeijão, o tomate e o cheiro-verde. Tempere com sal e pimenta e reserve.", timer:0},
{texto:"Aqueça uma frigideira antiaderente em fogo médio por 1 minuto, sem untar. Peneire a goma diretamente na frigideira, espalhando bem para formar um disco uniforme, sem buracos.", dica:"Peneirar deixa a tapioca lisinha, sem buracos.", timer:1},
{texto:"Cozinhe por 2 minutos, até as bordas começarem a soltar. Vire e cozinhe por mais 2 minutos.", timer:4},
{texto:"Coloque o recheio em apenas uma metade, dobre a outra por cima, aperte as bordas e deixe mais 1 minuto para aquecer bem.", dica:"Sirva quente, na hora. Tapioca fria fica borrachuda.", timer:1}
]
},
{
id:"ovos-mexidos-turbinado", titulo:"Ovos Mexidos Turbinado", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Rápida"], tempo:"8 min", porcoes:"1 porção", foto:"assets/ovos-mexidos-turbinado.jpg",
ingredientes:[
{nome:"Ovos", qtd:"3 unidades"},
{nome:"Manteiga", qtd:"15g"},
{nome:"Creme de leite", qtd:"30g"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cebolinha", qtd:"1 colher (sopa) picada"}
],
passos:[
{texto:"Bata os ovos com o creme de leite, o sal e a pimenta por 30 segundos, só até misturar a gema com a clara.", timer:0},
{texto:"Derreta a manteiga em frigideira antiaderente em fogo baixo, sem deixar escurecer. Despeje os ovos e mexa sem parar, raspando o fundo e as laterais, por cerca de 3 minutos, até ficarem úmidos e cremosos.", dica:"Fogo baixo é o segredo para ficar cremoso.", timer:3},
{texto:"Desligue quando ainda estiverem um pouco moles, pois continuam cozinhando com o calor da frigideira. Finalize com a cebolinha por cima.", dica:"Desligar antes do ponto evita que fique seco e borrachudo. Sirva na hora.", timer:0}
]
},
{
id:"omelete-rapido", titulo:"Omelete Rápido Recheado", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Rápida"], tempo:"10 min", porcoes:"1 porção", foto:"assets/omelete-rapido.jpg",
ingredientes:[
{nome:"Ovos", qtd:"3 unidades"},
{nome:"Muçarela", qtd:"50g fatiada ou ralada"},
{nome:"Tomate picado", qtd:"30g sem sementes"},
{nome:"Orégano", qtd:"1 pitada"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 fio"}
],
passos:[
{texto:"Bata os ovos com sal e pimenta por 30 segundos, até misturar bem e formar uma espuminha leve.", timer:0},
{texto:"Aqueça a frigideira antiaderente em fogo médio com um fio de azeite. Despeje os ovos, espalhe bem e deixe firmar por 2 minutos, sem mexer, até as bordas firmarem e o centro ainda ficar um pouco úmido.", timer:2},
{texto:"Coloque a muçarela e o tomate em apenas uma metade. Polvilhe o orégano, dobre a outra metade por cima e deixe mais 2 minutos, até o queijo derreter.", dica:"Sirva quente, na hora, com o queijo derretido.", timer:2}
]
},
{
id:"panqueca-banana-aveia", titulo:"Panqueca de Banana com Aveia", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Doce"], tempo:"15 min", porcoes:"2 porções", foto:"assets/panqueca-banana-aveia.jpg",
ingredientes:[
{nome:"Banana madura", qtd:"2 unidades"},
{nome:"Ovos", qtd:"2 unidades"},
{nome:"Aveia em flocos", qtd:"80g"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Fermento em pó", qtd:"1 colher (chá)"},
{nome:"Mel", qtd:"1 colher (sopa) para servir"},
{nome:"Manteiga", qtd:"1 colher (chá) para untar"}
],
passos:[
{texto:"Amasse as bananas com um garfo até virar um purê. Misture com os ovos até ficar homogêneo.", dica:"Banana bem madura deixa mais doce sem precisar de açúcar.", timer:0},
{texto:"Junte a aveia, a canela e o fermento e misture até formar uma massa grossa. Deixe descansar por 3 minutos.", timer:3},
{texto:"Aqueça a frigideira em fogo médio e unte com a manteiga. Coloque 1 concha de massa por panqueca e cozinhe por 2 minutos de cada lado, até dourar.", timer:4},
{texto:"Empilhe as panquecas e regue com o mel por cima.", dica:"Sirva quente, com mel por cima.", timer:0}
]
},
{
id:"cuscuz-nordestino", titulo:"Cuscuz Nordestino com Queijo Coalho", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Brasileira"], tempo:"20 min", porcoes:"2 porções", foto:"assets/cuscuz-nordestino.jpg",
ingredientes:[
{nome:"Flocão de milho", qtd:"200g"},
{nome:"Água", qtd:"150ml"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Queijo coalho", qtd:"150g em cubos"},
{nome:"Manteiga", qtd:"2 colheres (sopa)"}
],
passos:[
{texto:"Misture o flocão com a água e o sal em uma tigela. Deixe hidratar por 10 minutos, até ficar úmido e soltinho.", dica:"Hidratar bem é o que deixa o cuscuz soltinho.", timer:10},
{texto:"Coloque metade do flocão em uma cuscuzeira ou em forma untada, espalhe o queijo coalho no meio e cubra com o restante do flocão, sem apertar.", timer:0},
{texto:"Cozinhe no vapor por 10 minutos, até o cuscuz ficar firme e o queijo derreter por dentro.", timer:10},
{texto:"Desenforme, coloque a manteiga por cima e deixe derreter.", dica:"Sirva quente, com manteiga derretendo.", timer:0}
]
},
{
id:"torrada-abacate", titulo:"Torrada de Abacate com Ovo", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Saudável"], tempo:"12 min", porcoes:"1 porção", foto:"assets/torrada-abacate.jpg",
ingredientes:[
{nome:"Pão de forma integral", qtd:"2 fatias"},
{nome:"Abacate maduro", qtd:"1 unidade pequena"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Tomate cereja", qtd:"60g cortado ao meio"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 fio"}
],
passos:[
{texto:"Torre as fatias de pão em frigideira ou torradeira por 2 minutos de cada lado, até ficar crocante.", timer:4},
{texto:"Amasse o abacate com o limão e o sal, deixando alguns pedacinhos. Espalhe sobre as torradas.", dica:"O limão evita que o abacate escureça.", timer:0},
{texto:"Frite o ovo em um fio de azeite por 3 minutos, até a clara firmar e a gema ficar molinha.", timer:3},
{texto:"Coloque o ovo sobre a torrada, junte o tomate cereja e tempere com pimenta.", dica:"Sirva na hora, com a gema molinha.", timer:0}
]
},
{
id:"iogurte-granola", titulo:"Iogurte com Granola e Frutas", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Rápida"], tempo:"5 min", porcoes:"1 porção", foto:"assets/iogurte-granola.jpg",
ingredientes:[
{nome:"Iogurte natural", qtd:"200g"},
{nome:"Granola", qtd:"60g"},
{nome:"Morango", qtd:"100g fatiado"},
{nome:"Banana", qtd:"1 unidade fatiada"},
{nome:"Mel", qtd:"1 colher (sopa)"},
{nome:"Chia", qtd:"1 colher (chá)"}
],
passos:[
{texto:"Coloque o iogurte em uma tigela e misture a chia.", timer:0},
{texto:"Cubra com a granola, o morango e a banana.", timer:0},
{texto:"Regue com o mel por cima.", dica:"Sirva na hora, para a granola ficar crocante. Se montar antes, ela murcha.", timer:0}
]
},
{
id:"vitamina-banana-aveia", titulo:"Vitamina de Banana com Aveia", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Bebida"], tempo:"5 min", porcoes:"1 porção", foto:"assets/vitamina-banana-aveia.jpg",
ingredientes:[
{nome:"Banana", qtd:"1 unidade"},
{nome:"Leite integral", qtd:"250ml gelado"},
{nome:"Aveia em flocos", qtd:"2 colheres (sopa)"},
{nome:"Mel", qtd:"1 colher (sopa)"},
{nome:"Canela em pó", qtd:"1 pitada"},
{nome:"Gelo", qtd:"4 cubos"}
],
passos:[
{texto:"Coloque o leite, a banana, a aveia, o mel e o gelo no liquidificador.", timer:0},
{texto:"Bata por 1 minuto, até ficar bem cremoso e sem pedacinhos de aveia.", timer:1},
{texto:"Polvilhe a canela por cima.", dica:"Sirva gelada, na hora.", timer:0}
]
},
{
id:"mingau-aveia-banana", titulo:"Mingau de Aveia com Banana e Canela", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit"], tempo:"12 min", porcoes:"1 porção", foto:"assets/mingau-aveia-banana.jpg",
ingredientes:[
{nome:"Aveia em flocos", qtd:"60g"},
{nome:"Leite integral", qtd:"250ml"},
{nome:"Banana madura", qtd:"1 unidade em rodelas"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Mel", qtd:"1 colher (sopa) - opcional"},
{nome:"Sal", qtd:"1 pitada"}
],
passos:[
{texto:"Coloque a aveia, o leite e o sal em panela em fogo médio.", timer:0},
{texto:"Cozinhe por 8 minutos, mexendo sempre, até engrossar e ficar cremoso.", dica:"Mexa sempre para não empelotar e não grudar.", timer:8},
{texto:"Junte metade da banana amassada e a canela e misture.", dica:"Amassar a banana no mingau deixa mais doce sem açúcar.", timer:0},
{texto:"Coloque em tigela, cubra com o restante da banana e regue com mel se usar.", dica:"Sirva quente, na hora. Frio ele endurece.", timer:0}
]
},
{
id:"acai-tigela", titulo:"Açaí na Tigela com Granola", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit"], tempo:"10 min", porcoes:"1 porção", foto:"assets/acai-tigela.jpg",
ingredientes:[
{nome:"Polpa de açaí congelada", qtd:"200g"},
{nome:"Banana", qtd:"1 unidade"},
{nome:"Granola", qtd:"60g"},
{nome:"Morango", qtd:"80g fatiado"},
{nome:"Mel", qtd:"1 colher (sopa) - opcional"},
{nome:"Leite", qtd:"50ml para bater"}
],
passos:[
{texto:"Bata a polpa de açaí com a banana e o leite no liquidificador até ficar grosso e cremoso.", dica:"Pouco leite, senão vira suco. Tem que ficar grosso.", timer:0},
{texto:"Coloque em tigela e cubra com granola e morango.", timer:0},
{texto:"Regue com mel se usar.", dica:"Sirva gelado, na hora. Açaí derrete rápido.", timer:0}
]
},
{
id:"waffle-aveia", titulo:"Waffle de Aveia com Mel", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit"], tempo:"20 min", porcoes:"2 unidades", foto:"assets/waffle-aveia.jpg",
ingredientes:[
{nome:"Aveia em flocos", qtd:"100g"},
{nome:"Ovos", qtd:"2 unidades"},
{nome:"Banana madura", qtd:"1 unidade"},
{nome:"Leite", qtd:"80ml"},
{nome:"Fermento em pó", qtd:"1 colher (chá)"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Mel", qtd:"para servir"},
{nome:"Frutas", qtd:"para servir"}
],
passos:[
{texto:"Bata a aveia, os ovos, a banana, o leite, o fermento e a canela no liquidificador até ficar homogêneo.", timer:0},
{texto:"Aqueça a máquina de waffle e unte levemente. Coloque a massa e feche.", timer:0},
{texto:"Asse por 5 minutos, até dourar e ficar crocante por fora.", dica:"Não abra antes do tempo, senão rasga.", timer:5},
{texto:"Sirva com mel e frutas por cima.", dica:"Sirva quente e crocante, com mel.", timer:0}
]
},
{
id:"ovo-poche-torrada", titulo:"Ovo Poché com Torrada", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit"], tempo:"12 min", porcoes:"1 porção", foto:"assets/ovo-poche-torrada.jpg",
ingredientes:[
{nome:"Ovo", qtd:"2 unidades"},
{nome:"Pão de forma", qtd:"2 fatias"},
{nome:"Vinagre branco", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cebolinha", qtd:"para finalizar"},
{nome:"Água", qtd:"para cozinhar"}
],
passos:[
{texto:"Ferva água em panela com vinagre e sal. Abaixe o fogo até ficar quase sem bolhas.", dica:"Água fervendo forte desmancha o ovo. Tem que estar quase parada.", timer:0},
{texto:"Quebre cada ovo em tigela pequena e deslize delicadamente na água. Cozinhe por 3 minutos, sem mexer.", timer:3},
{texto:"Retire com escumadeira e escorra.", timer:0},
{texto:"Torre o pão e coloque o ovo por cima. Tempere com sal, pimenta e cebolinha.", dica:"Sirva na hora, com a gema molinha.", timer:0}
]
},
{
id:"salada-frutas", titulo:"Salada de Frutas com Mel e Hortelã", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Saudável"], tempo:"10 min", porcoes:"2 porções", foto:"assets/salada-frutas.jpg",
ingredientes:[
{nome:"Morango", qtd:"150g"},
{nome:"Manga", qtd:"1 unidade em cubos"},
{nome:"Kiwi", qtd:"2 unidades em rodelas"},
{nome:"Banana", qtd:"1 unidade em rodelas"},
{nome:"Uva", qtd:"100g"},
{nome:"Mel", qtd:"2 colheres (sopa)"},
{nome:"Hortelã fresca", qtd:"folhas para finalizar"},
{nome:"Suco de limão", qtd:"suco de 1/2 limão"}
],
passos:[
{texto:"Lave e corte todas as frutas em tamanhos parecidos.", timer:0},
{texto:"Misture em tigela com o mel e o suco de limão.", dica:"O limão evita que a banana escureça.", timer:0},
{texto:"Finalize com hortelã.", dica:"Sirva gelada, na hora. Se deixar muito tempo, solta água.", timer:0}
]
},
{
id:"bolo-banana-caneca", titulo:"Bolo de Banana de Caneca", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Doce","Rápida"], tempo:"5 min", porcoes:"1 porção", foto:"assets/bolo-banana-caneca.jpg",
ingredientes:[
{nome:"Banana madura", qtd:"1 unidade"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Aveia em flocos", qtd:"3 colheres (sopa)"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Fermento em pó", qtd:"1/2 colher (chá)"},
{nome:"Mel", qtd:"1 colher (chá) - opcional"}
],
passos:[
{texto:"Amasse a banana dentro da caneca com garfo.", timer:0},
{texto:"Junte o ovo, a aveia, a canela e o mel e misture bem. Junte o fermento por último e misture levemente.", dica:"Misturar leve o fermento faz crescer mais.", timer:0},
{texto:"Leve ao micro-ondas por 2 minutos, até crescer e firmar.", dica:"Não passe de 2 minutos, senão resseca.", timer:2},
{texto:"Coma na própria caneca.", dica:"Sirva quente, na hora.", timer:0}
]
},
{
id:"pao-com-ovo", titulo:"Pão com Ovo no Buraco", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Rápida"], tempo:"10 min", porcoes:"1 porção", foto:"assets/pao-com-ovo.jpg",
ingredientes:[
{nome:"Pão de forma", qtd:"2 fatias grossas"},
{nome:"Ovo", qtd:"2 unidades"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"}
],
passos:[
{texto:"Corte um buraco no centro de cada fatia com copo, guardando o miolo.", timer:0},
{texto:"Derreta a manteiga em frigideira em fogo médio e coloque as fatias. Doure por 1 minuto.", timer:1},
{texto:"Quebre um ovo dentro de cada buraco, tempere e tampe. Cozinhe por 3 minutos, até a clara firmar.", dica:"Tampar faz a clara cozinhar sem precisar virar.", timer:3},
{texto:"Doure também o miolo na frigideira e sirva junto.", dica:"Sirva quente, com a gema molinha.", timer:0}
]
},
{
id:"crepioca-banana-canela", titulo:"Crepioca de Banana e Canela", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Doce"], tempo:"12 min", porcoes:"1 porção", foto:"assets/crepioca-banana-canela.jpg",
ingredientes:[
{nome:"Goma de tapioca", qtd:"60g"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Banana", qtd:"1 unidade em rodelas"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Mel", qtd:"1 colher (sopa) para servir"}
],
passos:[
{texto:"Misture a goma com o ovo até formar uma massa líquida.", timer:0},
{texto:"Despeje em frigideira antiaderente em fogo médio e espalhe. Cozinhe por 2 minutos de cada lado.", dica:"Fogo médio para não queimar antes de firmar.", timer:4},
{texto:"Coloque a banana e a canela em uma metade, dobre e deixe mais 1 minuto.", timer:1},
{texto:"Regue com mel.", dica:"Sirva quente, na hora.", timer:0}
]
},
{
id:"suco-verde", titulo:"Suco Verde Detox", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Bebida"], tempo:"5 min", porcoes:"1 porção", foto:"assets/suco-verde.jpg",
ingredientes:[
{nome:"Couve", qtd:"2 folhas sem talo"},
{nome:"Laranja", qtd:"1 unidade"},
{nome:"Maçã", qtd:"1/2 unidade"},
{nome:"Gengibre", qtd:"1 pedaço pequeno"},
{nome:"Água gelada", qtd:"200ml"},
{nome:"Gelo", qtd:"4 cubos"},
{nome:"Mel", qtd:"1 colher (chá) - opcional"}
],
passos:[
{texto:"Bata a couve, a laranja, a maçã, o gengibre, a água e o gelo no liquidificador por 1 minuto.", timer:1},
{texto:"Coe se preferir mais liso, ou beba sem coar para mais fibra.", dica:"Sem coar tem mais fibra e sustenta mais.", timer:0},
{texto:"Adoce com mel se quiser.", dica:"Sirva gelado, na hora. Suco verde oxida rápido e perde a cor.", timer:0}
]
},
{
id:"bolo-milho-frigideira", titulo:"Bolo de Milho de Frigideira", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Doce"], tempo:"20 min", porcoes:"4 fatias", foto:"assets/bolo-milho-frigideira.jpg",
ingredientes:[
{nome:"Milho verde", qtd:"1 lata escorrida - 200g"},
{nome:"Ovos", qtd:"2 unidades"},
{nome:"Leite", qtd:"100ml"},
{nome:"Açúcar", qtd:"80g"},
{nome:"Fubá", qtd:"80g"},
{nome:"Fermento em pó", qtd:"1 colher (chá)"},
{nome:"Manteiga", qtd:"1 colher (sopa) para untar"},
{nome:"Sal", qtd:"1 pitada"}
],
passos:[
{texto:"Bata o milho, os ovos, o leite e o açúcar no liquidificador por 1 minuto.", timer:1},
{texto:"Junte o fubá, o sal e o fermento e misture levemente.", timer:0},
{texto:"Unte frigideira antiaderente com manteiga, despeje a massa, tampe e cozinhe em fogo bem baixo por 12 minutos.", dica:"Fogo bem baixo e tampado é o que faz assar sem queimar.", timer:12},
{texto:"Vire com cuidado e cozinhe mais 3 minutos do outro lado.", timer:3},
{texto:"Corte em fatias.", dica:"Sirva morno, com café.", timer:0}
]
}
];
