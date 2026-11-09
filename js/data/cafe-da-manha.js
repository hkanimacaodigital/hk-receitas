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
// TOTAL: 9 receitas
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
{texto:"Corte os pães ao meio no sentido do comprimento, sem separar totalmente. Passe a manteiga generosamente por dentro e por fora.", timer:0},
{texto:"Coloque a muçarela dentro, distribuindo bem. Feche e aperte levemente.", timer:0},
{texto:"Leve para chapa ou frigideira já quente, em fogo médio, e doure por 2 minutos de cada lado, apertando com a espátula, até ficar crocante e o queijo derreter.", timer:4},
{texto:"Retire e polvilhe o orégano por cima.", timer:0}
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
{texto:"Aqueça uma frigideira antiaderente em fogo médio por 1 minuto, sem untar. Peneire a goma diretamente na frigideira, espalhando bem para formar um disco uniforme, sem buracos.", timer:1},
{texto:"Cozinhe por 2 minutos, até as bordas começarem a soltar. Vire e cozinhe por mais 2 minutos.", timer:4},
{texto:"Coloque o recheio em apenas uma metade, dobre a outra por cima, aperte as bordas e deixe mais 1 minuto para aquecer bem.", timer:1}
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
{texto:"Derreta a manteiga em frigideira antiaderente em fogo baixo, sem deixar escurecer. Despeje os ovos e mexa sem parar, raspando o fundo e as laterais, por cerca de 3 minutos, até ficarem úmidos e cremosos.", timer:3},
{texto:"Desligue quando ainda estiverem um pouco moles, pois continuam cozinhando com o calor da frigideira. Finalize com a cebolinha por cima.", dica:"Desligar antes do ponto evita que fique seco e borrachudo.", timer:0}
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
{texto:"Coloque a muçarela e o tomate em apenas uma metade. Polvilhe o orégano, dobre a outra metade por cima e deixe mais 2 minutos, até o queijo derreter.", timer:2}
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
{texto:"Amasse as bananas com um garfo até virar um purê. Misture com os ovos até ficar homogêneo.", timer:0},
{texto:"Junte a aveia, a canela e o fermento e misture até formar uma massa grossa. Deixe descansar por 3 minutos.", timer:3},
{texto:"Aqueça a frigideira em fogo médio e unte com a manteiga. Coloque 1 concha de massa por panqueca e cozinhe por 2 minutos de cada lado, até dourar.", timer:4},
{texto:"Empilhe as panquecas e regue com o mel por cima.", timer:0}
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
{texto:"Misture o flocão com a água e o sal em uma tigela. Deixe hidratar por 10 minutos, até ficar úmido e soltinho.", timer:10},
{texto:"Coloque metade do flocão em uma cuscuzeira ou em forma untada, espalhe o queijo coalho no meio e cubra com o restante do flocão, sem apertar.", timer:0},
{texto:"Cozinhe no vapor por 10 minutos, até o cuscuz ficar firme e o queijo derreter por dentro.", timer:10},
{texto:"Desenforme, coloque a manteiga por cima e deixe derreter.", timer:0}
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
{texto:"Amasse o abacate com o limão e o sal, deixando alguns pedacinhos. Espalhe sobre as torradas.", timer:0},
{texto:"Frite o ovo em um fio de azeite por 3 minutos, até a clara firmar e a gema ficar molinha.", timer:3},
{texto:"Coloque o ovo sobre a torrada, junte o tomate cereja e tempere com pimenta.", timer:0}
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
{texto:"Regue com o mel por cima.", timer:0}
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
{texto:"Polvilhe a canela por cima.", timer:0}
]
}
];
