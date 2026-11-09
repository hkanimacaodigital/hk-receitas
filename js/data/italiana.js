// RECEITAS ITALIANA
// 1 - Lasanha Bolonhesa Caseira
// 2 - Carbonara Cremosa Original
// 3 - Risoto de Funghi Cremoso
// 4 - Macarrão Alho e Óleo 15min
// 5 - Pizza Margherita Caseira
// 6 - Nhoque de Batata ao Molho de Tomate
// 7 - Penne Quatro Queijos
// 8 - Bruschetta de Tomate
// 9 - Polenta Cremosa com Ragu
// TOTAL: 9 receitas
window.RECEITAS_ITALIANA = [
{
id:"lasanha-bolonhesa-caseira", titulo:"Lasanha Bolonhesa Caseira", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"70 min", porcoes:"6 porções", foto:"assets/lasanha-bolonhesa.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"500g"},
{nome:"Massa para lasanha", qtd:"200g - seca, que vai direto ao forno"},
{nome:"Molho de tomate", qtd:"400g - 1 vidro ou sachê"},
{nome:"Muçarela", qtd:"300g fatiada ou ralada"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Manjericão", qtd:"5 folhas frescas"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Parmesão ralado", qtd:"30g para finalizar - opcional"}
],
passos:[
{texto:"Aqueça o azeite em fogo médio e refogue a cebola por 3 minutos, até ficar transparente. Junte o alho e refogue por mais 1 minuto.", timer:4},
{texto:"Adicione a carne, tempere com sal e pimenta e refogue por 8 minutos, quebrando os pedaços, até perder a cor rosada e secar a água. Junte o molho de tomate e o manjericão rasgado.", timer:8},
{texto:"Abaixe o fogo e cozinhe por 15 minutos, mexendo de vez em quando, até engrossar levemente. Prove e acerte o sal.", timer:15},
{texto:"Em refratário untado, monte em camadas: molho, massa, molho e muçarela. Repita até acabar, terminando com molho e bastante muçarela por cima.", timer:0},
{texto:"Polvilhe o parmesão, se quiser, cubra com papel-alumínio e asse em forno preaquecido a 200°C por 20 minutos. Retire o alumínio e asse por mais 5 minutos, até o queijo dourar e o molho borbulhar. Deixe descansar 5 minutos antes de cortar.", dica:"Descansar evita que desmanche ao cortar.", timer:25}
]
},
{
id:"carbonara-cremosa", titulo:"Carbonara Cremosa Original", categoria_principal:"Italiana", categorias:["Italiana","Rápida"], tempo:"20 min", porcoes:"2 porções", foto:"assets/carbonara-cremosa.jpg",
ingredientes:[
{nome:"Espaguete", qtd:"200g"},
{nome:"Bacon", qtd:"150g em cubinhos - ou pancetta"},
{nome:"Ovos", qtd:"2 unidades grandes - cerca de 80g sem casca"},
{nome:"Parmesão ralado", qtd:"50g"},
{nome:"Pimenta-do-reino", qtd:"moída na hora a gosto"},
{nome:"Sal", qtd:"a gosto para a água do macarrão"},
{nome:"Água", qtd:"2L para cozinhar o macarrão"}
],
passos:[
{texto:"Ferva a água com sal em fogo alto. Cozinhe o espaguete por 10 minutos, até ficar al dente. Antes de escorrer, reserve 1 concha da água do cozimento.", timer:10},
{texto:"Enquanto isso, frite o bacon em frigideira grande e fria, sem óleo, em fogo médio por 6 minutos, até ficar bem dourado e crocante. Desligue e reserve na frigideira.", timer:6},
{texto:"Bata os ovos com o parmesão e bastante pimenta-do-reino, até formar um creme grosso. Não coloque creme de leite, o creme original é só ovo e queijo.", timer:0},
{texto:"Escorra o espaguete e jogue na frigideira do bacon ainda quente, mas com o fogo já desligado. Despeje o creme por cima e misture vigorosamente por 1 minuto, adicionando a água reservada aos poucos, até formar um creme brilhante que envolve todo o macarrão.", dica:"Fogo desligado evita virar ovo mexido.", timer:1}
]
},
{
id:"risoto-funghi-cremoso", titulo:"Risoto de Funghi Cremoso", categoria_principal:"Italiana", categorias:["Italiana"], tempo:"40 min", porcoes:"2 porções", foto:"assets/risoto-funghi.jpg",
ingredientes:[
{nome:"Arroz arbóreo", qtd:"200g"},
{nome:"Funghi fresco", qtd:"200g fatiado - paris ou shitake"},
{nome:"Caldo de legumes", qtd:"1L quente"},
{nome:"Manteiga", qtd:"50g - 25g para refogar + 25g gelada para finalizar"},
{nome:"Parmesão ralado", qtd:"50g"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Vinho branco seco", qtd:"100ml"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Deixe o caldo aquecido em fogo baixo ao lado. Em frigideira, aqueça o azeite com 10g de manteiga em fogo médio-alto e refogue o funghi com o alho por 6 minutos, até dourar e secar a água. Tempere e reserve.", timer:6},
{texto:"Na panela do risoto, derreta 15g de manteiga em fogo médio e refogue a cebola por 3 minutos, até ficar transparente, sem dourar. Junte o arroz e refogue por 2 minutos, até os grãos ficarem brilhantes. Não lave o arroz.", timer:5},
{texto:"Despeje o vinho e mexa até evaporar, cerca de 1 minuto. Vá adicionando o caldo quente, 1 concha por vez, mexendo sempre, e só coloque a próxima quando a anterior tiver secado quase toda.", timer:18},
{texto:"Continue por cerca de 18 minutos, até o arroz ficar al dente, macio por fora e firme no centro. Prove e acerte o sal. Desligue ainda com o risoto um pouco úmido.", timer:0},
{texto:"Com o fogo desligado, junte a manteiga gelada em cubinhos e o parmesão. Mexa vigorosamente por 1 minuto, até ficar bem cremoso. Volte o funghi, misture delicadamente e finalize com cheiro-verde.", timer:1}
]
},
{
id:"macarrao-alho-15min", titulo:"Macarrão Alho e Óleo 15min", categoria_principal:"Italiana", categorias:["Italiana","Rápida"], tempo:"15 min", porcoes:"2 porções", foto:"assets/macarrao-alho-15min.jpg",
ingredientes:[
{nome:"Espaguete", qtd:"200g"},
{nome:"Alho", qtd:"4 dentes fatiados fininho"},
{nome:"Azeite de oliva", qtd:"30ml - 2 colheres (sopa)"},
{nome:"Pimenta calabresa", qtd:"1 pitada"},
{nome:"Sal", qtd:"a gosto para a água do macarrão"},
{nome:"Água", qtd:"2L para cozinhar o macarrão"},
{nome:"Cheiro-verde ou salsinha", qtd:"1 colher (sopa) picada para finalizar"}
],
passos:[
{texto:"Ferva a água com sal em fogo alto. Cozinhe o espaguete por 9 minutos, até ficar al dente. Antes de escorrer, reserve 1 concha da água do cozimento.", timer:9},
{texto:"Enquanto isso, aqueça o azeite em frigideira grande em fogo baixo. Junte o alho e a pimenta calabresa e doure por 2 minutos, mexendo sempre, até o alho ficar levemente dourado. Desligue.", dica:"Alho queimado amarga o prato inteiro.", timer:2},
{texto:"Escorra o macarrão e jogue na frigideira, com o fogo desligado. Adicione a água reservada, misture bem por 1 minuto até ficar bem envolvido no azeite. Finalize com a salsinha.", timer:1}
]
},
{
id:"pizza-margherita", titulo:"Pizza Margherita Caseira", categoria_principal:"Italiana", categorias:["Italiana","Lanche"], tempo:"90 min", porcoes:"2 pizzas médias", foto:"assets/pizza-margherita.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Água morna", qtd:"240ml"},
{nome:"Fermento biológico seco", qtd:"5g - 1/2 sachê"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Molho de tomate", qtd:"200g"},
{nome:"Muçarela", qtd:"300g fatiada"},
{nome:"Tomate", qtd:"2 unidades médias em rodelas"},
{nome:"Manjericão", qtd:"1 maço de folhas frescas"},
{nome:"Azeite de oliva", qtd:"1 fio para finalizar"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal. Junte a água morna e o azeite e sove por 10 minutos, até ficar lisa. Cubra e deixe crescer por 60 minutos.", timer:60},
{texto:"Divida em 2 partes, abra em formato redondo em forma untada, deixando a borda mais grossa.", timer:0},
{texto:"Espalhe o molho, coloque a muçarela e o tomate. Asse em forno preaquecido a 220°C por 18 minutos, até dourar a borda.", timer:18},
{texto:"Finalize com o manjericão fresco e um fio de azeite.", timer:0}
]
},
{
id:"nhoque-batata-tomate", titulo:"Nhoque de Batata ao Molho de Tomate", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"60 min", porcoes:"4 porções", foto:"assets/nhoque-batata-tomate.jpg",
ingredientes:[
{nome:"Batata asterix", qtd:"800g com casca"},
{nome:"Farinha de trigo", qtd:"150g"},
{nome:"Ovo", qtd:"1 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Molho de tomate", qtd:"400g"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Manjericão", qtd:"5 folhas"},
{nome:"Parmesão ralado", qtd:"para finalizar"}
],
passos:[
{texto:"Cozinhe as batatas com casca em água com sal por 30 minutos, até ficarem bem macias. Escorra, descasque e passe ainda quentes pelo espremedor.", timer:30},
{texto:"Junte o ovo, o sal e a farinha aos poucos, misturando até formar uma massa macia que não gruda nas mãos.", timer:0},
{texto:"Faça rolinhos, corte em pedaços de 2cm e marque com garfo, se quiser.", timer:0},
{texto:"Cozinhe em água fervente com sal, em levas, até boiarem. Retire com escumadeira.", timer:3},
{texto:"Aqueça o azeite, refogue o alho por 1 minuto, junte o molho e o manjericão e ferva por 3 minutos. Misture o nhoque e finalize com parmesão.", timer:4}
]
},
{
id:"penne-quatro-queijos", titulo:"Penne Quatro Queijos", categoria_principal:"Italiana", categorias:["Italiana","Rápida"], tempo:"25 min", porcoes:"3 porções", foto:"assets/penne-quatro-queijos.jpg",
ingredientes:[
{nome:"Penne", qtd:"300g"},
{nome:"Creme de leite", qtd:"200g"},
{nome:"Muçarela", qtd:"100g ralada"},
{nome:"Parmesão ralado", qtd:"60g"},
{nome:"Gorgonzola", qtd:"60g"},
{nome:"Catupiry", qtd:"100g"},
{nome:"Leite", qtd:"100ml"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Noz-moscada", qtd:"1 pitada"}
],
passos:[
{texto:"Cozinhe o penne em água com sal por 9 minutos, até ficar al dente. Reserve 1 concha da água do cozimento.", timer:9},
{texto:"Em panela em fogo baixo, junte o creme de leite, o leite e os 4 queijos. Mexa por 5 minutos, até derreter tudo e virar um creme liso.", timer:5},
{texto:"Tempere com sal, pimenta e noz-moscada. Junte o penne e a água reservada e misture por 1 minuto.", timer:1}
]
},
{
id:"bruschetta-tomate", titulo:"Bruschetta de Tomate", categoria_principal:"Italiana", categorias:["Italiana","Lanche","Rápida"], tempo:"15 min", porcoes:"4 porções", foto:"assets/bruschetta-tomate.jpg",
ingredientes:[
{nome:"Pão italiano", qtd:"8 fatias grossas"},
{nome:"Tomate", qtd:"4 unidades médias em cubos sem sementes"},
{nome:"Alho", qtd:"1 dente cortado ao meio"},
{nome:"Manjericão", qtd:"8 folhas picadas"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"}
],
passos:[
{texto:"Misture o tomate com o manjericão, 2 colheres de azeite, sal e pimenta. Deixe descansar por 5 minutos.", timer:5},
{texto:"Torre as fatias de pão em frigideira ou forno por 2 minutos de cada lado, até ficar crocante.", timer:4},
{texto:"Esfregue o alho nas fatias ainda quentes, regue com o restante do azeite e coloque o tomate por cima.", timer:0}
]
},
{
id:"polenta-ragu", titulo:"Polenta Cremosa com Ragu", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"70 min", porcoes:"4 porções", foto:"assets/polenta-ragu.jpg",
ingredientes:[
{nome:"Fubá", qtd:"200g"},
{nome:"Água", qtd:"1L"},
{nome:"Leite", qtd:"200ml"},
{nome:"Manteiga", qtd:"2 colheres (sopa)"},
{nome:"Parmesão ralado", qtd:"50g"},
{nome:"Carne moída", qtd:"400g"},
{nome:"Molho de tomate", qtd:"400g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Cenoura", qtd:"1 unidade pequena ralada"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"}
],
passos:[
{texto:"Refogue a cebola no azeite por 3 minutos, junte o alho e a cenoura e refogue por 3 minutos. Junte a carne e refogue por 8 minutos.", timer:14},
{texto:"Junte o molho, tempere com sal e cozinhe em fogo baixo por 25 minutos, até engrossar.", timer:25},
{texto:"Em outra panela, ferva a água com o leite e o sal. Despeje o fubá em fio, mexendo sem parar. Cozinhe em fogo baixo por 25 minutos, mexendo sempre, até ficar cremosa.", timer:25},
{texto:"Desligue, junte a manteiga e o parmesão e misture. Sirva a polenta com o ragu por cima.", timer:0}
]
}
];
