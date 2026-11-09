// RECEITAS LANCHE
// 1 - Pão de Queijo Mineiro
// 2 - Misto Quente de Airfryer
// 3 - Pastel de Forno de Queijo
// 4 - Coxinha com Catupiry Cremosa
// 5 - Cachorro-Quente de Forno
// 6 - Esfiha de Carne Aberta
// 7 - Bauru de Forno
// 8 - Kibe Assado Recheado com Queijo
// 9 - Sanduíche Natural de Atum
// TOTAL: 9 receitas
window.RECEITAS_LANCHE = [
{
id:"pao-queijo", titulo:"Pão de Queijo Mineiro", categoria_principal:"Lanche", categorias:["Lanche"], tempo:"25 min", porcoes:"12 unidades", foto:"assets/pao-queijo.jpg", airfryer:true,
ingredientes:[
{nome:"Polvilho azedo", qtd:"200g"},
{nome:"Queijo meia cura ralado", qtd:"150g"},
{nome:"Leite", qtd:"100ml"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Óleo", qtd:"50ml"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Água", qtd:"50ml"}
],
passos:[
{texto:"Ferva o leite com o óleo, a água e o sal em fogo médio.", timer:3},
{texto:"Despeje a mistura quente sobre o polvilho em tigela grande, aos poucos, mexendo para escaldar bem. Deixe amornar por 5 minutos.", timer:5},
{texto:"Junte o ovo e o queijo e misture com as mãos por 3 minutos, até formar uma massa lisa, macia e que desgruda da tigela. Se ficar muito seca, adicione leite aos poucos.", timer:3},
{texto:"Com as mãos untadas, faça bolinhas de cerca de 30g e coloque em forma ou na cesta da Airfryer, com espaço entre elas.", timer:0},
{texto:"Asse na Airfryer preaquecida a 180°C por 10 minutos, ou no forno a 200°C por 15 minutos, até estufar, dourar por fora e ficar macio por dentro.", timer:10}
]
},
{
id:"misto-quente-airfryer", titulo:"Misto Quente de Airfryer", categoria_principal:"Lanche", categorias:["Lanche","Airfryer"], tempo:"8 min", porcoes:"1 porção", foto:"assets/misto-quente-airfryer.jpg", airfryer:true,
ingredientes:[
{nome:"Pão de forma", qtd:"2 fatias - 60g"},
{nome:"Muçarela", qtd:"40g - 2 fatias"},
{nome:"Presunto", qtd:"40g - 2 fatias"},
{nome:"Manteiga", qtd:"10g em temperatura ambiente"}
],
passos:[
{texto:"Monte alternando muçarela e presunto entre as fatias de pão. Aperte levemente.", timer:0},
{texto:"Pincele a manteiga no lado de fora dos dois pães, de forma uniforme.", timer:0},
{texto:"Coloque na Airfryer preaquecida a 180°C por 5 minutos, virando aos 2 minutos e meio, até o pão dourar e o queijo derreter.", timer:5}
]
},
{
id:"pastel-forno-queijo", titulo:"Pastel de Forno de Queijo", categoria_principal:"Lanche", categorias:["Lanche","Airfryer","Brasileira"], tempo:"30 min", porcoes:"6 unidades", foto:"assets/pastel-forno.jpg", airfryer:true,
ingredientes:[
{nome:"Massa de pastel pronta", qtd:"300g - 1 rolo"},
{nome:"Muçarela", qtd:"200g ralada ou em cubinhos"},
{nome:"Gema", qtd:"1 unidade - cerca de 20g"},
{nome:"Orégano", qtd:"1 colher (chá) - 5g"},
{nome:"Farinha de trigo", qtd:"para polvilhar a bancada"},
{nome:"Tomate", qtd:"1 unidade pequena picada sem sementes - opcional"}
],
passos:[
{texto:"Polvilhe a bancada e abra a massa. Corte 6 discos de cerca de 12cm.", timer:0},
{texto:"Coloque 1 colher e meia de muçarela no centro de cada disco, deixando 1 dedo de borda livre. Se quiser, adicione um pouco de tomate. Dobre ao meio, formando meia-lua, e aperte bem as bordas para tirar o ar.", timer:0},
{texto:"Aperte as bordas com um garfo para fechar bem e o queijo não vazar. Coloque em forma untada ou com papel-manteiga, com espaço entre eles.", timer:0},
{texto:"Bata a gema com 1 colher de água. Pincele por cima de cada pastel e polvilhe o orégano. Asse em forno preaquecido a 200°C ou na Airfryer a 200°C por 12 minutos, até dourar e estufar.", timer:12}
]
},
{
id:"coxinha-creme-frango", titulo:"Coxinha com Catupiry Cremosa", categoria_principal:"Lanche", categorias:["Lanche","Brasileira","Airfryer"], tempo:"60 min", porcoes:"8 unidades", foto:"assets/coxinha-creme.jpg", airfryer:true,
ingredientes:[
{nome:"Frango desfiado já temperado e cozido", qtd:"300g"},
{nome:"Farinha de trigo", qtd:"240g"},
{nome:"Leite", qtd:"400ml"},
{nome:"Catupiry", qtd:"100g"},
{nome:"Farinha panko", qtd:"100g"},
{nome:"Caldo de galinha", qtd:"1 cubo ou 200ml de caldo caseiro"},
{nome:"Manteiga", qtd:"1 colher (sopa) - 15g"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Leite", qtd:"100ml extra para empanar"},
{nome:"Cheiro-verde", qtd:"1 colher (sopa) picada"}
],
passos:[
{texto:"Aqueça a manteiga em fogo médio e refogue a cebola por 2 minutos, até ficar transparente, e o alho por mais 1 minuto. Junte o frango, tempere com sal e pimenta, junte o cheiro-verde e misture. Reserve.", timer:3},
{texto:"Na mesma panela, coloque o leite, o caldo e a manteiga. Leve ao fogo médio e deixe ferver, mexendo para dissolver o caldo.", timer:5},
{texto:"Quando ferver, abaixe o fogo e jogue a farinha de uma só vez, mexendo vigorosamente por 5 minutos, até desgrudar do fundo e formar uma bola lisa.", dica:"Jogar de uma vez evita empelotar.", timer:5},
{texto:"Transfira ainda quente para bancada e sove por 5 minutos, com as mãos untadas, até ficar lisa e macia. Cubra e deixe amornar por 10 minutos.", timer:10},
{texto:"Divida em 8 porções. Abra cada uma na palma, coloque 1 colher de frango e 1 colher de Catupiry. Feche puxando as bordas para cima, modele a coxinha e aperte bem para não abrir.", timer:0},
{texto:"Passe cada coxinha no leite extra e depois na panko, cobrindo bem e apertando levemente para grudar.", timer:0},
{texto:"Coloque na Airfryer preaquecida a 200°C por 12 minutos, virando na metade, até dourar. Ou frite em óleo quente a 180°C por 5 minutos.", timer:12}
]
},
{
id:"cachorro-quente-forno", titulo:"Cachorro-Quente de Forno", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"35 min", porcoes:"6 porções", foto:"assets/cachorro-quente-forno.jpg",
ingredientes:[
{nome:"Pão para cachorro-quente", qtd:"6 unidades"},
{nome:"Salsicha", qtd:"6 unidades"},
{nome:"Molho de tomate", qtd:"400g"},
{nome:"Muçarela", qtd:"200g fatiada"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Orégano", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"a gosto"}
],
passos:[
{texto:"Refogue a cebola no azeite por 3 minutos, junte o alho por 1 minuto, junte o molho e as salsichas inteiras. Cozinhe por 8 minutos em fogo baixo.", timer:12},
{texto:"Abra os pães sem separar totalmente, coloque 1 salsicha com um pouco de molho em cada um e cubra com muçarela.", timer:0},
{texto:"Coloque em refratário, polvilhe orégano e leve ao forno preaquecido a 200°C por 12 minutos, até o queijo derreter e dourar.", timer:12}
]
},
{
id:"esfiha-carne", titulo:"Esfiha de Carne Aberta", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"90 min", porcoes:"10 unidades", foto:"assets/esfiha-carne.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Água morna", qtd:"200ml"},
{nome:"Fermento biológico seco", qtd:"5g"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Óleo", qtd:"2 colheres (sopa)"},
{nome:"Carne moída", qtd:"400g"},
{nome:"Tomate", qtd:"2 unidades médias picadas sem sementes"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Salsa", qtd:"2 colheres (sopa) picada"},
{nome:"Pimenta síria ou pimenta-do-reino", qtd:"a gosto"},
{nome:"Sal", qtd:"a gosto para o recheio"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal. Junte a água morna e o óleo e sove por 8 minutos, até ficar lisa. Cubra e deixe crescer por 45 minutos.", timer:45},
{texto:"Misture a carne crua com o tomate, a cebola, o limão, a salsa, sal e pimenta. Deixe descansar 10 minutos e escorra o excesso de líquido.", timer:10},
{texto:"Divida a massa em 10 bolinhas, abra em discos de 10cm deixando a borda mais alta. Coloque o recheio no centro.", timer:0},
{texto:"Coloque em forma untada e asse em forno preaquecido a 220°C por 18 minutos, até dourar a borda.", timer:18}
]
},
{
id:"bauru-forno", titulo:"Bauru de Forno", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"35 min", porcoes:"6 porções", foto:"assets/bauru-forno.jpg",
ingredientes:[
{nome:"Pão de forma sem casca", qtd:"12 fatias"},
{nome:"Presunto", qtd:"250g fatiado"},
{nome:"Muçarela", qtd:"250g fatiada"},
{nome:"Tomate", qtd:"3 unidades médias em rodelas"},
{nome:"Orégano", qtd:"1 colher (chá)"},
{nome:"Manteiga", qtd:"para untar"},
{nome:"Molho de tomate", qtd:"200g"}
],
passos:[
{texto:"Unte um refratário com manteiga. Faça uma camada com 6 fatias de pão, espalhe metade do molho.", timer:0},
{texto:"Coloque o presunto, a muçarela e o tomate. Polvilhe metade do orégano.", timer:0},
{texto:"Cubra com o restante do pão, espalhe o restante do molho e finalize com orégano.", timer:0},
{texto:"Asse em forno preaquecido a 200°C por 20 minutos, até o queijo derreter e o pão dourar.", timer:20}
]
},
{
id:"kibe-assado-queijo", titulo:"Kibe Assado Recheado com Queijo", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"60 min", porcoes:"8 porções", foto:"assets/kibe-assado-queijo.jpg",
ingredientes:[
{nome:"Trigo para kibe", qtd:"300g"},
{nome:"Água quente", qtd:"400ml para hidratar"},
{nome:"Carne moída", qtd:"500g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Hortelã", qtd:"1/2 xícara (chá) picada"},
{nome:"Muçarela", qtd:"200g em cubos"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"}
],
passos:[
{texto:"Hidrate o trigo na água quente por 30 minutos. Escorra e aperte bem para tirar toda a água.", timer:30},
{texto:"Misture o trigo com a carne, a cebola, a hortelã, sal e pimenta, amassando bem.", timer:0},
{texto:"Em refratário untado com azeite, coloque metade da massa, espalhe a muçarela e cubra com o restante da massa. Regue com azeite.", timer:0},
{texto:"Asse em forno preaquecido a 200°C por 30 minutos, até dourar por cima.", timer:30}
]
},
{
id:"sanduiche-atum", titulo:"Sanduíche Natural de Atum", categoria_principal:"Lanche", categorias:["Lanche","Saudável","Rápida"], tempo:"10 min", porcoes:"2 porções", foto:"assets/sanduiche-atum.jpg",
ingredientes:[
{nome:"Pão de forma integral", qtd:"4 fatias"},
{nome:"Atum em lata", qtd:"170g escorrido"},
{nome:"Maionese", qtd:"2 colheres (sopa)"},
{nome:"Cenoura", qtd:"1 unidade pequena ralada"},
{nome:"Alface", qtd:"4 folhas"},
{nome:"Tomate", qtd:"1 unidade média em rodelas"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"}
],
passos:[
{texto:"Misture o atum com a maionese, a cenoura, o limão, sal e pimenta.", timer:0},
{texto:"Monte os sanduíches com alface, a mistura de atum e o tomate. Feche e corte na diagonal.", timer:0}
]
}
];
