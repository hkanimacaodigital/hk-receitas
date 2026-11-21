// RECEITAS LANCHE
// 1 - Pão de Queijo Mineiro
// 2 - Misto Quente de Airfryer
// 3 - Pastel de Forno de Queijo
// 4 - Coxinha com 【entity-Catupiry¦canonical_name=Catupiry】 Cremosa
// 5 - Cachorro-Quente de Forno
// 6 - Esfiha de Carne Aberta
// 7 - Bauru de Forno
// 8 - Kibe Assado Recheado com Queijo
// 9 - Sanduíche Natural de Atum
// --------------------
// Incluído no dia 21/11/2026
// 10 - Hambúrguer Caseiro com Queijo
// 11 - Empada de Frango
// 12 - Bolinha de Queijo
// 13 - Sanduíche de Frango Grelhado com Maionese
// 14 - Torta de Liquidificador de Frango
// 15 - Croissant de Presunto e Queijo
// 16 - Pastel de Carne
// 17 - Esfiha de Queijo
// 18 - Pão Recheado de Calabresa
// 19 - Sanduíche de Pernil Desfiado
// TOTAL: 19 receitas
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
{texto:"Junte o ovo e o queijo e misture com as mãos por 3 minutos, até formar uma massa lisa, macia e que desgruda da tigela. Se ficar muito seca, adicione leite aos poucos.", dica:"Massa muito seca racha, vai colocando leite aos poucos.", timer:3},
{texto:"Com as mãos untadas, faça bolinhas de cerca de 30g e coloque em forma ou na cesta da Airfryer, com espaço entre elas.", timer:0},
{texto:"Asse na Airfryer preaquecida a 180°C por 10 minutos, ou no forno a 200°C por 15 minutos, até estufar, dourar por fora e ficar macio por dentro.", dica:"Sirva quente, na hora, pão de queijo frio perde a graça.", timer:10}
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
{texto:"Coloque na Airfryer preaquecida a 180°C por 5 minutos, virando aos 2 minutos e meio, até o pão dourar e o queijo derreter.", dica:"Sirva quente, com o queijo derretido.", timer:5}
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
{texto:"Aperte as bordas com um garfo para fechar bem e o queijo não vazar. Coloque em forma untada ou com papel-manteiga, com espaço entre eles.", dica:"Fechar bem evita o queijo vazar no forno.", timer:0},
{texto:"Bata a gema com 1 colher de água. Pincele por cima de cada pastel e polvilhe o orégano. Asse em forno preaquecido a 200°C ou na Airfryer a 200°C por 12 minutos, até dourar e estufar.", dica:"Sirva quente.", timer:12}
]
},
{
id:"coxinha-creme-frango", titulo:"Coxinha com 【entity-Catupiry¦canonical_name=Catupiry】 Cremosa", categoria_principal:"Lanche", categorias:["Lanche","Brasileira","Airfryer"], tempo:"60 min", porcoes:"8 unidades", foto:"assets/coxinha-creme.jpg", airfryer:true,
ingredientes:[
{nome:"Frango desfiado já temperado e cozido", qtd:"300g"},
{nome:"Farinha de trigo", qtd:"240g"},
{nome:"Leite", qtd:"400ml"},
{nome:"【entity-Catupiry¦canonical_name=Catupiry】", qtd:"100g"},
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
{texto:"Divida em 8 porções. Abra cada uma na palma, coloque 1 colher de frango e 1 colher de 【entity-Catupiry¦canonical_name=Catupiry】. Feche puxando as bordas para cima, modele a coxinha e aperte bem para não abrir.", timer:0},
{texto:"Passe cada coxinha no leite extra e depois na panko, cobrindo bem e apertando levemente para grudar.", timer:0},
{texto:"Coloque na Airfryer preaquecida a 200°C por 12 minutos, virando na metade, até dourar. Ou frite em óleo quente a 180°C por 5 minutos.", dica:"Sirva quente.", timer:12}
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
{texto:"Coloque em refratário, polvilhe orégano e leve ao forno preaquecido a 200°C por 12 minutos, até o queijo derreter e dourar.", dica:"Sirva quente.", timer:12}
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
{texto:"Misture a carne crua com o tomate, a cebola, o limão, a salsa, sal e pimenta. Deixe descansar 10 minutos e escorra o excesso de líquido.", dica:"Escorrer o líquido evita a esfiha encharcar.", timer:10},
{texto:"Divida a massa em 10 bolinhas, abra em discos de 10cm deixando a borda mais alta. Coloque o recheio no centro.", timer:0},
{texto:"Coloque em forma untada e asse em forno preaquecido a 220°C por 18 minutos, até dourar a borda.", dica:"Sirva quente, com limão.", timer:18}
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
{texto:"Asse em forno preaquecido a 200°C por 20 minutos, até o queijo derreter e o pão dourar.", dica:"Sirva quente.", timer:20}
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
{texto:"Asse em forno preaquecido a 200°C por 30 minutos, até dourar por cima.", dica:"Sirva quente, com limão.", timer:30}
]
},
{
id:"sanduiche-atum", titulo:"Sanduíche Natural de Atum", categoria_principal:"Lanche", categorias:["Lanche","Rápida"], tempo:"10 min", porcoes:"2 porções", foto:"assets/sanduiche-atum.jpg",
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
{texto:"Monte os sanduíches com alface, a mistura de atum e o tomate. Feche e corte na diagonal.", dica:"Sirva na hora, fresco.", timer:0}
]
},
{
id:"hamburguer-caseiro-queijo", titulo:"Hambúrguer Caseiro com Queijo", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"30 min", porcoes:"4 hambúrgueres", foto:"assets/hamburguer-caseiro-queijo.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"600g - acém ou fraldinha"},
{nome:"Pão de hambúrguer", qtd:"4 unidades"},
{nome:"Queijo cheddar ou muçarela", qtd:"4 fatias"},
{nome:"Alface", qtd:"4 folhas"},
{nome:"Tomate", qtd:"1 unidade em rodelas"},
{nome:"Cebola", qtd:"1/2 unidade em rodelas"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Maionese", qtd:"para montar"},
{nome:"Ketchup", qtd:"para montar"}
],
passos:[
{texto:"Tempere a carne só com sal e pimenta, sem sovar. Modele 4 hambúrgueres grossos.", dica:"Não sovar deixa o hambúrguer mais suculento.", timer:0},
{texto:"Grelhe em frigideira ou chapa em fogo alto por 4 minutos de cada lado.", timer:8},
{texto:"Coloque o queijo por cima, tampe 1 minuto para derreter.", timer:1},
{texto:"Monte no pão com alface, tomate, cebola, maionese e ketchup.", dica:"Sirva quente, na hora.", timer:0}
]
},
{
id:"empada-frango", titulo:"Empada de Frango", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"70 min", porcoes:"12 empadas", foto:"assets/empada-frango.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Manteiga gelada", qtd:"200g em cubos"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Frango desfiado", qtd:"400g já temperado"},
{nome:"Milho", qtd:"100g"},
{nome:"Requeijão", qtd:"100g"},
{nome:"Gema", qtd:"1 unidade para pincelar"}
],
passos:[
{texto:"Misture a farinha com o sal e a manteiga até virar farofa. Junte o ovo e amasse até formar massa lisa. Leve à geladeira por 20 minutos.", timer:20},
{texto:"Misture o frango com o milho e o requeijão.", timer:0},
{texto:"Forre forminhas com metade da massa, coloque o recheio e cubra com o restante da massa. Pincele a gema.", timer:0},
{texto:"Asse a 200°C por 25 minutos, até dourar.", timer:25},
{texto:"Deixe amornar e desenforme.", dica:"Sirva morna ou fria, é ótima para levar.", timer:0}
]
},
{
id:"bolinha-queijo", titulo:"Bolinha de Queijo", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"45 min", porcoes:"20 unidades", foto:"assets/bolinha-queijo.jpg",
ingredientes:[
{nome:"Muçarela", qtd:"300g em cubos"},
{nome:"Leite", qtd:"300ml"},
{nome:"Farinha de trigo", qtd:"200g"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Ovo", qtd:"1 unidade para empanar"},
{nome:"Farinha de rosca", qtd:"100g para empanar"},
{nome:"Óleo", qtd:"para fritar"}
],
passos:[
{texto:"Ferva o leite com a manteiga e o sal. Junte a farinha de uma vez e mexa por 4 minutos, até desgrudar. Deixe amornar.", timer:4},
{texto:"Pegue porções, abra, coloque um cubo de muçarela e feche em bolinha.", dica:"Feche bem para o queijo não vazar na fritura.", timer:0},
{texto:"Passe no ovo e na farinha de rosca.", timer:0},
{texto:"Frite em óleo quente a 180°C por 3 minutos, até dourar.", timer:3},
{texto:"Escorra.", dica:"Sirva quente, com o queijo puxando.", timer:0}
]
},
{
id:"sanduiche-frango-grelhado", titulo:"Sanduíche de Frango Grelhado com Maionese", categoria_principal:"Lanche", categorias:["Lanche","Rápida"], tempo:"20 min", porcoes:"2 porções", foto:"assets/sanduiche-frango-grelhado.jpg",
ingredientes:[
{nome:"Peito de frango", qtd:"300g em 2 filés"},
{nome:"Pão de forma ou ciabatta", qtd:"4 fatias"},
{nome:"Maionese", qtd:"3 colheres (sopa)"},
{nome:"Alface", qtd:"4 folhas"},
{nome:"Tomate", qtd:"1 unidade em rodelas"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Azeite", qtd:"1 colher (sopa)"}
],
passos:[
{texto:"Tempere o frango com sal, limão e azeite. Grelhe por 5 minutos de cada lado.", timer:10},
{texto:"Deixe descansar 3 minutos e fatie.", timer:3},
{texto:"Passe maionese nos pães, monte com alface, tomate e frango.", dica:"Sirva quente, na hora.", timer:0}
]
},
{
id:"torta-liquidificador-frango", titulo:"Torta de Liquidificador de Frango", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"50 min", porcoes:"8 fatias", foto:"assets/torta-liquidificador-frango.jpg",
ingredientes:[
{nome:"Frango desfiado", qtd:"400g já temperado"},
{nome:"Ovos", qtd:"3 unidades"},
{nome:"Leite", qtd:"300ml"},
{nome:"Óleo", qtd:"100ml"},
{nome:"Farinha de trigo", qtd:"250g"},
{nome:"Fermento", qtd:"1 colher (sopa)"},
{nome:"Milho", qtd:"100g"},
{nome:"Queijo", qtd:"100g ralado"},
{nome:"Sal", qtd:"a gosto"}
],
passos:[
{texto:"Bata os ovos, o leite, o óleo e o sal no liquidificador. Junte a farinha aos poucos e bata até ficar homogêneo. Junte o fermento.", timer:0},
{texto:"Em forma untada, coloque metade da massa, o frango, o milho e o queijo, cubra com o restante da massa.", timer:0},
{texto:"Asse a 200°C por 30 minutos, até dourar e passar no teste do palito.", timer:30},
{texto:"Deixe amornar 10 minutos e corte.", dica:"Sirva morna ou fria.", timer:0}
]
},
{
id:"croissant-presunto-queijo", titulo:"Croissant de Presunto e Queijo", categoria_principal:"Lanche", categorias:["Lanche"], tempo:"15 min", porcoes:"4 unidades", foto:"assets/croissant-presunto-queijo.jpg", airfryer:true,
ingredientes:[
{nome:"Croissant pronto", qtd:"4 unidades"},
{nome:"Presunto", qtd:"200g fatiado"},
{nome:"Muçarela", qtd:"200g fatiada"},
{nome:"Manteiga", qtd:"para pincelar"}
],
passos:[
{texto:"Abra os croissants ao meio, sem separar totalmente.", timer:0},
{texto:"Recheie com presunto e muçarela.", timer:0},
{texto:"Pincele manteiga por fora e leve ao forno a 200°C por 8 minutos, ou Airfryer a 180°C por 5 minutos, até o queijo derreter.", timer:8},
{texto:"Sirva quente.", dica:"Sirva quente, com o queijo derretido.", timer:0}
]
},
{
id:"pastel-carne", titulo:"Pastel de Carne", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"35 min", porcoes:"8 unidades", foto:"assets/pastel-carne.jpg",
ingredientes:[
{nome:"Massa de pastel pronta", qtd:"400g"},
{nome:"Carne moída", qtd:"400g"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Tomate", qtd:"1 unidade picada"},
{nome:"Azeitona", qtd:"50g picada"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Óleo", qtd:"para fritar"}
],
passos:[
{texto:"Refogue a cebola e o alho, junte a carne e cozinhe por 8 minutos. Junte o tomate e a azeitona e cozinhe até secar. Deixe esfriar.", dica:"Recheio tem que estar seco e frio, senão o pastel abre.", timer:8},
{texto:"Corte a massa em 8 discos, recheie, dobre e feche com garfo.", timer:0},
{texto:"Frite em óleo quente a 180°C por 3 minutos de cada lado, até dourar.", timer:6},
{texto:"Escorra.", dica:"Sirva quente.", timer:0}
]
},
{
id:"esfiha-queijo", titulo:"Esfiha de Queijo", categoria_principal:"Lanche", categorias:["Lanche"], tempo:"90 min", porcoes:"10 unidades", foto:"assets/esfiha-queijo.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Água morna", qtd:"200ml"},
{nome:"Fermento biológico seco", qtd:"5g"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Óleo", qtd:"2 colheres (sopa)"},
{nome:"Muçarela", qtd:"400g ralada"},
{nome:"Requeijão", qtd:"100g"},
{nome:"Orégano", qtd:"a gosto"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal. Junte a água e o óleo e sove por 8 minutos. Cubra e deixe crescer por 45 minutos.", timer:45},
{texto:"Misture a muçarela com o requeijão e orégano.", timer:0},
{texto:"Divida a massa em 10 bolinhas, abra em discos e coloque o recheio no centro.", timer:0},
{texto:"Asse a 220°C por 18 minutos, até dourar.", timer:18},
{texto:"Sirva quente.", dica:"Sirva quente, com o queijo puxando.", timer:0}
]
},
{
id:"pao-recheado-calabresa", titulo:"Pão Recheado de Calabresa", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"90 min", porcoes:"1 pão grande", foto:"assets/pao-recheado-calabresa.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Água morna", qtd:"200ml"},
{nome:"Fermento biológico seco", qtd:"5g"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Óleo", qtd:"2 colheres (sopa)"},
{nome:"Calabresa", qtd:"300g em rodelas finas"},
{nome:"Muçarela", qtd:"200g ralada"},
{nome:"Cebola", qtd:"1 unidade em rodelas"},
{nome:"Orégano", qtd:"a gosto"}
],
passos:[
{texto:"Misture a farinha, o fermento e o sal. Junte a água e o óleo e sove por 8 minutos. Cubra e deixe crescer por 45 minutos.", timer:45},
{texto:"Abra a massa em retângulo, espalhe a calabresa, a muçarela, a cebola e o orégano.", timer:0},
{texto:"Enrole como rocambole, feche as pontas e coloque em forma untada.", timer:0},
{texto:"Asse a 200°C por 30 minutos, até dourar.", timer:30},
{texto:"Deixe amornar 10 minutos e corte.", dica:"Sirva morno.", timer:0}
]
},
{
id:"sanduiche-pernil-desfiado", titulo:"Sanduíche de Pernil Desfiado", categoria_principal:"Lanche", categorias:["Lanche","Brasileira"], tempo:"150 min", porcoes:"6 porções", foto:"assets/sanduiche-pernil-desfiado.jpg",
ingredientes:[
{nome:"Pernil", qtd:"800g"},
{nome:"Pão francês", qtd:"6 unidades"},
{nome:"Cebola", qtd:"2 unidades em rodelas"},
{nome:"Alho", qtd:"4 dentes"},
{nome:"Laranja", qtd:"suco de 1 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta", qtd:"a gosto"},
{nome:"Vinagrete", qtd:"para acompanhar - opcional"}
],
passos:[
{texto:"Tempere o pernil com alho, sal, pimenta e suco de laranja. Deixe marinando por 30 minutos.", timer:30},
{texto:"Asse em forma tampada a 180°C por 90 minutos, até ficar bem macio. Destampe e doure por 15 minutos.", timer:105},
{texto:"Desfie a carne, misture com o molho da forma e a cebola.", timer:0},
{texto:"Recheie os pães e sirva com vinagrete se quiser.", dica:"Sirva quente, com vinagrete.", timer:0}
]
}
];
