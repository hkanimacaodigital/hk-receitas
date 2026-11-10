// RECEITAS MEXICANA
// 1 - Tacos de Carne Mexicana
// 2 - Burrito de Frango Cremoso
// 3 - Quesadilla de Queijo com Salsa
// 4 - Sopa de Tortilla
// 5 - Chilli com Carne
// 6 - Nachos com Guacamole e Cheddar
// 7 - Tacos de Peixe
// 8 - Arroz Mexicano
// TOTAL: 8 receitas
window.RECEITAS_MEXICANA = [
{
id:"tacos-carne-mexicana", titulo:"Tacos de Carne Mexicana", categoria_principal:"Mexicana", categorias:["Mexicana"], tempo:"25 min", porcoes:"6 unidades", foto:"assets/tacos-carne-mexicana.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"300g"},
{nome:"Tortilha de milho", qtd:"6 unidades - 120g"},
{nome:"Alface", qtd:"50g fatiada fininha"},
{nome:"Tomate", qtd:"50g picado sem sementes"},
{nome:"Cebola roxa", qtd:"50g picada - cerca de 1/2 cebola"},
{nome:"Queijo cheddar ralado", qtd:"50g"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Cominho", qtd:"1/2 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Coentro", qtd:"para finalizar - opcional"}
],
passos:[
{texto:"Aqueça o azeite em fogo médio e refogue a cebola roxa por 2 minutos, até ficar transparente. Junte o alho e refogue por mais 1 minuto.", timer:3},
{texto:"Adicione a carne, tempere com páprica, cominho, sal e pimenta. Refogue por 8 minutos, quebrando os pedaços, até ficar bem dourada e secar a água.", timer:8},
{texto:"Desligue, junte o limão e misture. Reserve. Na mesma frigideira, sem lavar, aqueça as tortilhas 1 minuto de cada lado, até ficarem macias e levemente tostadas. Mantenha aquecidas em pano limpo.", timer:2},
{texto:"Monte na hora: coloque 1 colher cheia de carne em cada tortilha, por cima a alface, o tomate e o cheddar. Finalize com coentro, se quiser.", dica:"Montar na hora evita que a tortilha amoleça.", timer:0}
]
},
{
id:"burrito-frango", titulo:"Burrito de Frango Cremoso", categoria_principal:"Mexicana", categorias:["Mexicana","Lanche"], tempo:"30 min", porcoes:"2 porções", foto:"assets/burrito-frango.jpg", airfryer:true,
ingredientes:[
{nome:"Peito de frango", qtd:"300g em 2 filés"},
{nome:"Tortilha de trigo grande", qtd:"2 unidades - 140g"},
{nome:"Feijão carioca cozido", qtd:"100g"},
{nome:"Requeijão", qtd:"40g"},
{nome:"Milho verde", qtd:"40g escorrido"},
{nome:"Pimentão", qtd:"40g picado - cerca de 1/2 pimentão pequeno"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Páprica", qtd:"1/2 colher (chá)"},
{nome:"Cominho", qtd:"1/2 colher (chá)"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Alface", qtd:"20g fatiada - opcional"}
],
passos:[
{texto:"Tempere o frango com sal, pimenta, páprica e cominho. Grelhe no azeite em fogo médio-alto por 4 minutos de cada lado, até dourar e cozinhar por dentro. Retire, deixe descansar 2 minutos e desfie ou corte em tiras finas.", timer:8},
{texto:"Na mesma frigideira, refogue a cebola por 2 minutos, até ficar transparente, e o alho por mais 1 minuto. Junte o pimentão e refogue por 2 minutos, até ficar macio mas ainda crocante.", timer:5},
{texto:"Adicione o feijão, o milho e o requeijão. Misture em fogo baixo por 2 minutos, até virar um creme. Junte o frango e o limão e misture. Prove e acerte o sal.", timer:2},
{texto:"Aqueça as tortilhas em frigideira seca por 30 segundos de cada lado, só até ficarem maleáveis. Coloque metade do recheio no centro de cada uma, deixando 3 dedos de borda. Se quiser, adicione a alface por cima.", timer:1},
{texto:"Dobre as laterais para dentro, enrole firme de baixo para cima. Coloque com a emenda para baixo em chapa ou frigideira em fogo médio e doure por 3 minutos, virando uma vez, até ficar dourada e crocante.", timer:3}
]
},
{
id:"quesadilla-queijo", titulo:"Quesadilla de Queijo com Salsa", categoria_principal:"Mexicana", categorias:["Mexicana","Lanche"], tempo:"15 min", porcoes:"2 porções", foto:"assets/quesadilla-queijo.jpg",
ingredientes:[
{nome:"Tortilha de trigo", qtd:"2 unidades"},
{nome:"Muçarela ralada", qtd:"120g"},
{nome:"Tomate", qtd:"80g picado sem sementes"},
{nome:"Coentro", qtd:"1 colher (sopa) picado"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Cebola roxa", qtd:"30g picada - opcional"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 fio - opcional"}
],
passos:[
{texto:"Misture o tomate, a cebola roxa se for usar, o coentro, o limão, o sal e a pimenta. Deixe escorrer um pouco para não molhar a tortilha.", timer:0},
{texto:"Coloque 1 tortilha em frigideira antiaderente em fogo médio, sem óleo. Espalhe a muçarela por toda a tortilha, deixando 1 dedo de borda livre, e distribua a salsa por cima.", timer:0},
{texto:"Cubra com a outra tortilha, aperte levemente e deixe por 4 minutos, até a parte de baixo ficar bem dourada e crocante. Vire com cuidado e doure por mais 4 minutos, até o queijo derreter.", timer:8},
{texto:"Retire, deixe descansar 1 minuto, corte em 4 triângulos e sirva com mais limão espremido por cima.", timer:1}
]
},
{
id:"sopa-tortilla", titulo:"Sopa de Tortilla", categoria_principal:"Mexicana", categorias:["Mexicana"], tempo:"40 min", porcoes:"4 porções", foto:"assets/sopa-tortilla.jpg",
ingredientes:[
{nome:"Peito de frango cozido desfiado", qtd:"300g"},
{nome:"Tomate pelado", qtd:"400g - 1 lata"},
{nome:"Caldo de frango", qtd:"800ml"},
{nome:"Tortilha de milho", qtd:"3 unidades em tiras finas"},
{nome:"Abacate", qtd:"1 unidade em fatias"},
{nome:"Queijo branco ou muçarela", qtd:"100g ralado"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Pimentão", qtd:"1/2 unidade picada"},
{nome:"Cominho", qtd:"1/2 colher (chá)"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Coentro", qtd:"para finalizar"},
{nome:"Sal", qtd:"a gosto"}
],
passos:[
{texto:"Refogue a cebola no azeite por 3 minutos, junte o alho e o pimentão e refogue por 3 minutos.", timer:6},
{texto:"Junte o tomate pelado, o cominho e a páprica e cozinhe por 5 minutos, amassando o tomate.", timer:5},
{texto:"Junte o caldo e o frango desfiado e cozinhe em fogo baixo por 15 minutos. Tempere com sal e limão.", timer:15},
{texto:"Frite as tiras de tortilha em frigideira com um fio de azeite por 3 minutos, até ficarem crocantes.", timer:3},
{texto:"Sirva a sopa com o queijo, o abacate, as tiras crocantes e coentro por cima.", timer:0}
]
},
{
id:"chilli-carne", titulo:"Chilli com Carne", categoria_principal:"Mexicana", categorias:["Mexicana"], tempo:"50 min", porcoes:"4 porções", foto:"assets/chilli-carne.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"400g"},
{nome:"Feijão vermelho cozido", qtd:"300g escorrido"},
{nome:"Tomate pelado", qtd:"400g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Pimentão", qtd:"1 unidade média picada"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Pimenta chili em pó", qtd:"1/2 colher (chá) - a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Queijo cheddar ralado", qtd:"para finalizar"},
{nome:"Coentro", qtd:"para finalizar"}
],
passos:[
{texto:"Refogue a cebola no azeite por 3 minutos, junte o alho e o pimentão e refogue por 3 minutos.", timer:6},
{texto:"Junte a carne, tempere com cominho, páprica, pimenta e sal e refogue por 8 minutos, até dourar.", timer:8},
{texto:"Junte o tomate pelado e o feijão e cozinhe em fogo baixo por 25 minutos, até engrossar.", timer:25},
{texto:"Sirva com cheddar e coentro por cima.", timer:0}
]
},
{
id:"nachos-guacamole", titulo:"Nachos com Guacamole e Cheddar", categoria_principal:"Mexicana", categorias:["Mexicana","Lanche"], tempo:"20 min", porcoes:"3 porções", foto:"assets/nachos-guacamole.jpg",
ingredientes:[
{nome:"Doritos ou nachos de milho", qtd:"150g"},
{nome:"Queijo cheddar ralado", qtd:"120g"},
{nome:"Abacate maduro", qtd:"2 unidades"},
{nome:"Tomate", qtd:"1 unidade pequena picada sem sementes"},
{nome:"Cebola roxa", qtd:"1/4 unidade picada"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Coentro", qtd:"1 colher (sopa) picado"},
{nome:"Jalapeño fatiado", qtd:"a gosto"},
{nome:"Sal", qtd:"a gosto"}
],
passos:[
{texto:"Amasse o abacate com garfo, misture o tomate, a cebola, o limão, o coentro e o sal. Reserve.", timer:0},
{texto:"Espalhe os nachos em forma, cubra com o cheddar e leve ao forno preaquecido a 200°C por 6 minutos, até o queijo derreter.", timer:6},
{texto:"Coloque o guacamole por cima e finalize com jalapeño.", timer:0}
]
},
{
id:"tacos-peixe", titulo:"Tacos de Peixe", categoria_principal:"Mexicana", categorias:["Mexicana"], tempo:"30 min", porcoes:"4 porções", foto:"assets/tacos-peixe.jpg",
ingredientes:[
{nome:"Filé de peixe branco", qtd:"400g - tilápia ou merluza"},
{nome:"Tortilha de milho", qtd:"8 unidades"},
{nome:"Repolho roxo", qtd:"100g fatiado fino"},
{nome:"Repolho verde", qtd:"100g fatiado fino"},
{nome:"Cenoura", qtd:"1 unidade pequena ralada"},
{nome:"Maionese", qtd:"3 colheres (sopa)"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Farinha de trigo", qtd:"60g para empanar"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Óleo", qtd:"para fritar ou grelhar"},
{nome:"Coentro", qtd:"para finalizar"}
],
passos:[
{texto:"Misture o repolho, a cenoura, a maionese, metade do limão e sal para fazer a salada. Reserve.", timer:0},
{texto:"Tempere o peixe com sal, páprica e o restante do limão. Passe na farinha.", timer:0},
{texto:"Frite em óleo quente por 3 minutos de cada lado, até dourar, ou grelhe com um fio de óleo. Corte em tiras.", timer:6},
{texto:"Aqueça as tortilhas por 1 minuto de cada lado. Monte com peixe, salada e coentro.", timer:2}
]
},
{
id:"arroz-mexicano", titulo:"Arroz Mexicano", categoria_principal:"Mexicana", categorias:["Mexicana"], tempo:"35 min", porcoes:"4 porções", foto:"assets/arroz-mexicano.jpg",
ingredientes:[
{nome:"Arroz branco", qtd:"300g"},
{nome:"Tomate", qtd:"3 unidades médias picadas"},
{nome:"Milho verde", qtd:"100g escorrido"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Caldo de legumes", qtd:"600ml quente"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Cominho", qtd:"1/2 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Coentro", qtd:"para finalizar"},
{nome:"Limão", qtd:"suco de 1/2 unidade"}
],
passos:[
{texto:"Refogue a cebola no azeite por 3 minutos, junte o alho e o tomate e refogue por 4 minutos, até o tomate desmanchar.", timer:7},
{texto:"Junte o arroz, o cominho e o milho e misture por 1 minuto.", timer:1},
{texto:"Junte o caldo quente, tempere com sal, tampe e cozinhe em fogo baixo por 18 minutos, sem mexer. Desligue e deixe descansar tampado por 5 minutos.", timer:18},
{texto:"Solte com garfo, junte o limão e finalize com coentro.", timer:0}
]
}
];
