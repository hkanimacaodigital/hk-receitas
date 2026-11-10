// RECEITAS VEGANA
// 1 - Curry de Grão de Bico Cremoso
// 2 - Hambúrguer de Lentilha
// 3 - Brownie Vegano de Chocolate
// 4 - Strogonoff de Cogumelos Vegano
// 5 - Cuscuz Marroquino com Legumes
// 6 - Falafel com Molho de Tahine
// 7 - Bolo de Cenoura Vegano
// 8 - Moqueca de Banana da Terra
// TOTAL: 8 receitas
window.RECEITAS_VEGANA = [
{
id:"curry-grao-bico", titulo:"Curry de Grão de Bico Cremoso", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"30 min", porcoes:"3 porções", foto:"assets/curry-grao-bico.jpg",
ingredientes:[
{nome:"Grão-de-bico cozido", qtd:"250g"},
{nome:"Leite de coco", qtd:"200ml"},
{nome:"Curry em pó", qtd:"1 colher (chá)"},
{nome:"Cúrcuma", qtd:"1 colher (chá)"},
{nome:"Tomate pelado", qtd:"200g - 1 lata pequena"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Gengibre", qtd:"1 colher (chá) ralado - opcional"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Coentro ou salsinha", qtd:"para finalizar"},
{nome:"Limão", qtd:"suco de 1/2 unidade - opcional"}
],
passos:[
{texto:"Aqueça o azeite em fogo médio e refogue a cebola por 3 minutos, até ficar transparente. Junte o alho, o gengibre se for usar, o curry e a cúrcuma e refogue por mais 2 minutos, até perfumar.", timer:5},
{texto:"Junte o grão-de-bico, o tomate pelado e o leite de coco. Tempere com sal e pimenta e misture bem.", timer:0},
{texto:"Ferva em fogo médio-baixo por 15 minutos, mexendo de vez em quando, até o molho engrossar e ficar bem cremoso. Prove e acerte o sal. Desligue, junte o limão se quiser, finalize com coentro ou salsinha e sirva com arroz ou pão.", timer:15}
]
},
{
id:"hamburguer-lentilha", titulo:"Hambúrguer de Lentilha", categoria_principal:"Vegana", categorias:["Vegana","Lanche","Saudável"], tempo:"40 min", porcoes:"4 unidades", foto:"assets/hamburguer-lentilha.jpg", airfryer:true,
ingredientes:[
{nome:"Lentilha cozida", qtd:"200g"},
{nome:"Aveia em flocos", qtd:"40g"},
{nome:"Cebola roxa", qtd:"50g picada - cerca de 1/2 cebola"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Cheiro-verde", qtd:"1 colher (sopa) picada"},
{nome:"Farinha de trigo", qtd:"1 colher (sopa) se precisar dar liga"}
],
passos:[
{texto:"Cozinhe a lentilha em água com sal até ficar macia, sem desmanchar. Escorra muito bem e deixe esfriar por 5 minutos.", dica:"Tem que estar bem sequinha para não desmanchar.", timer:0},
{texto:"Aqueça o azeite em fogo médio e refogue a cebola roxa por 3 minutos, até ficar transparente, e o alho por mais 1 minuto. Desligue e deixe amornar.", timer:4},
{texto:"No processador, coloque a lentilha, a aveia, a cebola refogada, o alho, o cominho, a páprica, o sal, a pimenta e o cheiro-verde. Pulse até formar uma massa moldável, ainda com pedacinhos. Se ficar muito mole, junte a farinha.", dica:"Não bata demais para não virar purê.", timer:0},
{texto:"Com as mãos untadas, divida em 4 partes e modele 4 hambúrgueres grossos, de cerca de 2cm, apertando bem. Leve à geladeira por 10 minutos para firmar.", timer:10},
{texto:"Asse na Airfryer preaquecida a 200°C por 12 minutos, virando aos 6 minutos, até dourar. Ou na frigideira com 1 fio de azeite, 4 minutos de cada lado. Sirva no pão com salada ou no prato.", timer:12}
]
},
{
id:"brownie-vegano", titulo:"Brownie Vegano de Chocolate", categoria_principal:"Vegana", categorias:["Vegana","Doce"], tempo:"35 min", porcoes:"8 unidades", foto:"assets/brownie-vegano.jpg", airfryer:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"120g"},
{nome:"Cacau em pó", qtd:"30g"},
{nome:"Açúcar", qtd:"120g"},
{nome:"Óleo vegetal", qtd:"60ml"},
{nome:"Chocolate vegano", qtd:"80g picado"},
{nome:"Água", qtd:"80ml"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Fermento em pó", qtd:"1/2 colher (chá)"},
{nome:"Baunilha", qtd:"1 colher (chá) - opcional"}
],
passos:[
{texto:"Peneire a farinha, o cacau, o açúcar, o sal e o fermento em tigela grande e misture bem para não empelotar.", timer:0},
{texto:"Adicione o óleo, a água e a baunilha se for usar. Misture por 1 minuto, até formar uma massa grossa e lisa, sem farinha seca. Não bata demais.", timer:1},
{texto:"Junte o chocolate picado e misture delicadamente, deixando alguns pedacinhos para derreterem dentro.", timer:0},
{texto:"Despeje em forma quadrada de 20x20cm forrada com papel-manteiga, espalhe e alise. Asse na Airfryer preaquecida a 160°C por 18 minutos, ou no forno a 180°C por 22 minutos, até formar casquinha e o centro ainda estar úmido no palito. Deixe esfriar 10 minutos antes de cortar em 8 pedaços.", dica:"Cortar quente quebra o brownie.", timer:18}
]
},
{
id:"strogonoff-cogumelos", titulo:"Strogonoff de Cogumelos Vegano", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"25 min", porcoes:"2 porções", foto:"assets/strogonoff-cogumelos.jpg",
ingredientes:[
{nome:"Cogumelo paris", qtd:"300g fatiado"},
{nome:"Cogumelo shitake", qtd:"150g fatiado - opcional"},
{nome:"Creme de castanha-de-caju ou creme de leite vegetal", qtd:"200ml"},
{nome:"Molho de tomate", qtd:"3 colheres (sopa)"},
{nome:"Mostarda", qtd:"1 colher (sopa)"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Páprica", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Salsinha", qtd:"para finalizar"},
{nome:"Arroz cozido", qtd:"para acompanhar"}
],
passos:[
{texto:"Aqueça o azeite e refogue a cebola por 3 minutos, junte o alho por 1 minuto.", timer:4},
{texto:"Junte os cogumelos e refogue em fogo alto por 6 minutos, até dourar e secar a água.", timer:6},
{texto:"Junte a páprica, o molho de tomate e a mostarda, misture por 1 minuto.", timer:1},
{texto:"Junte o creme, tempere com sal e pimenta, cozinhe em fogo baixo por 4 minutos sem ferver forte. Finalize com salsinha e sirva com arroz.", timer:4}
]
},
{
id:"couscous-legumes", titulo:"Cuscuz Marroquino com Legumes", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"25 min", porcoes:"2 porções", foto:"assets/couscous-legumes.jpg",
ingredientes:[
{nome:"Cuscuz marroquino", qtd:"150g"},
{nome:"Água quente", qtd:"200ml"},
{nome:"Abobrinha", qtd:"1 unidade pequena em cubos"},
{nome:"Cenoura", qtd:"1 unidade média em cubos"},
{nome:"Pimentão", qtd:"1/2 unidade em cubos"},
{nome:"Grão-de-bico cozido", qtd:"150g"},
{nome:"Cebola roxa", qtd:"1/2 unidade picada"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Cominho", qtd:"1/2 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Hortelã ou salsinha", qtd:"para finalizar"}
],
passos:[
{texto:"Coloque o cuscuz em tigela, cubra com a água quente, tampe e deixe hidratar por 5 minutos. Solte com garfo.", timer:5},
{texto:"Aqueça 1 colher de azeite e refogue a cebola por 2 minutos, junte cenoura, abobrinha e pimentão e refogue por 6 minutos, até ficarem al dente.", timer:8},
{texto:"Junte o grão-de-bico e o cominho, tempere com sal e pimenta e misture com o cuscuz.", timer:0},
{texto:"Regue com o restante do azeite e o limão e finalize com hortelã ou salsinha.", timer:0}
]
},
{
id:"falafel", titulo:"Falafel com Molho de Tahine", categoria_principal:"Vegana", categorias:["Vegana","Lanche"], tempo:"35 min", porcoes:"12 unidades", foto:"assets/falafel.jpg", airfryer:true,
ingredientes:[
{nome:"Grão-de-bico cru de molho por 12h", qtd:"250g - não use cozido"},
{nome:"Salsinha", qtd:"30g"},
{nome:"Coentro", qtd:"20g"},
{nome:"Cebola", qtd:"1/2 unidade média"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Farinha de trigo", qtd:"2 colheres (sopa)"},
{nome:"Fermento em pó", qtd:"1/2 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Tahine", qtd:"3 colheres (sopa) para o molho"},
{nome:"Limão", qtd:"suco de 1 unidade para o molho"},
{nome:"Água", qtd:"3 colheres (sopa) para o molho"}
],
passos:[
{texto:"Escorra bem o grão-de-bico de molho. Bata no processador com salsinha, coentro, cebola, alho, cominho, sal e pimenta até virar uma massa grossa com pedacinhos.", timer:0},
{texto:"Junte a farinha e o fermento, misture e leve à geladeira por 15 minutos para firmar.", timer:15},
{texto:"Modele 12 bolinhas apertando bem. Asse na Airfryer preaquecida a 200°C por 15 minutos, virando na metade, até dourar.", timer:15},
{texto:"Para o molho, misture tahine, limão, água e sal até ficar cremoso. Sirva com salada.", timer:0}
]
},
{
id:"bolo-cenoura-vegano", titulo:"Bolo de Cenoura Vegano com Chocolate", categoria_principal:"Vegana", categorias:["Vegana","Doce"], tempo:"50 min", porcoes:"8 fatias", foto:"assets/bolo-cenoura-vegano.jpg",
ingredientes:[
{nome:"Cenoura", qtd:"300g descascada e picada"},
{nome:"Farinha de trigo", qtd:"200g"},
{nome:"Açúcar", qtd:"150g"},
{nome:"Óleo vegetal", qtd:"120ml"},
{nome:"Água", qtd:"100ml"},
{nome:"Fermento em pó", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 pitada"},
{nome:"Cacau em pó", qtd:"30g para a cobertura"},
{nome:"Açúcar", qtd:"60g para a cobertura"},
{nome:"Leite vegetal", qtd:"60ml para a cobertura"},
{nome:"Óleo vegetal", qtd:"1 colher (sopa) para a cobertura"}
],
passos:[
{texto:"Bata a cenoura, o óleo, a água e o açúcar no liquidificador até ficar liso.", timer:0},
{texto:"Misture com a farinha e o sal em tigela, junte o fermento por último.", timer:0},
{texto:"Despeje em forma untada e asse em forno preaquecido a 180°C por 35 minutos, até o palito sair limpo.", timer:35},
{texto:"Para a cobertura, ferva o leite vegetal, o açúcar, o cacau e o óleo por 3 minutos até engrossar. Jogue sobre o bolo morno.", timer:3}
]
},
{
id:"moqueca-banana", titulo:"Moqueca de Banana da Terra", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"30 min", porcoes:"3 porções", foto:"assets/moqueca-banana.jpg",
ingredientes:[
{nome:"Banana da terra madura mas firme", qtd:"3 unidades em rodelas grossas"},
{nome:"Leite de coco", qtd:"300ml"},
{nome:"Tomate", qtd:"2 unidades médias em rodelas"},
{nome:"Pimentão", qtd:"1 unidade média em tiras"},
{nome:"Cebola", qtd:"1 unidade média em rodelas"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Azeite de dendê", qtd:"1 colher (sopa) - opcional"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Coentro", qtd:"para finalizar"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Limão", qtd:"suco de 1/2 unidade"}
],
passos:[
{texto:"Tempere a banana com limão, sal e pimenta.", timer:0},
{texto:"Refogue a cebola e o alho no azeite por 3 minutos.", timer:3},
{texto:"Monte camadas na panela: tomate, pimentão, cebola refogada e banana. Cubra com leite de coco.", timer:0},
{texto:"Tampe e cozinhe em fogo baixo por 15 minutos, sem mexer muito para a banana não desmanchar. Finalize com dendê e coentro.", timer:15}
]
}
];
