// RECEITAS CALDO
// 1 - Caldo Verde Tradicional
// 2 - Caldo de Abóbora com Frango
// 3 - Caldo de Feijão com Bacon
// 4 - Sopa de Legumes com Macarrão
// 5 - Caldo de Mandioquinha com Bacon
// 6 - Canja de Galinha
// 7 - Creme de Milho com Frango
// 8 - Caldo de Ervilha com Linguiça
// --------------------
// Incluído no dia 21/11/2026
// 9 - Sopa de Cebola Gratinada
// 10 - Sopa de Tomate com Manjericão
// 11 - Creme de Cenoura com Gengibre
// 12 - Caldo de Mocotó
// 13 - Sopa de Mandioca com Costela
// 14 - Creme de Espinafre com Queijo
// 15 - Sopa de Batata-Doce com Curry
// 16 - Caldo de Camarão
// 17 - Sopa de Grão-de-Bico com Linguiça
// 18 - Sopa de Couve-Flor com Queijo
// TOTAL: 18 receitas
window.RECEITAS_CALDO = [
{
id:"caldo-verde-tradicional", titulo:"Caldo Verde Tradicional", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"40 min", porcoes:"4 porções", foto:"assets/caldo-verde.jpg",
ingredientes:[
{nome:"Batata asterix", qtd:"500g descascada em pedaços"},
{nome:"Linguiça calabresa", qtd:"200g em rodelas finas"},
{nome:"Couve", qtd:"100g fatiada bem fininha"},
{nome:"Cebola", qtd:"50g picada - cerca de 1/2 cebola média"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Água", qtd:"1L"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Cheiro-verde", qtd:"para finalizar - opcional"}
],
passos:[
{texto:"Cozinhe a batata na água com sal em fogo alto por 20 minutos, até ficar bem macia e quase desmanchando.", dica:"Cozinhar até quase desmanchar deixa o caldo cremoso.", timer:20},
{texto:"Retire metade das batatas, bata no liquidificador com um pouco da água do cozimento até virar um creme liso. Reserve a outra metade em pedaços na panela.", timer:0},
{texto:"Em outra panela, aqueça o azeite em fogo médio e refogue a calabresa por 5 minutos, até dourar e soltar a gordurinha.", timer:5},
{texto:"Junte a cebola e o alho e refogue por mais 2 minutos, até a cebola ficar transparente. Tempere com sal e pimenta.", timer:2},
{texto:"Despeje o creme de batata e a calabresa refogada na panela com as batatas em pedaços. Misture, prove o sal e deixe ferver em fogo baixo.", timer:0},
{texto:"Junte a couve, misture e ferva por mais 5 minutos, até murchar mas continuar bem verdinha. Desligue e finalize com cheiro-verde, se quiser.", dica:"Sirva quente, com a couve verdinha. Couve cozida demais escurece.", timer:5}
]
},
{
id:"caldo-abobora-frango", titulo:"Caldo de Abóbora com Frango", categoria_principal:"Caldo", categorias:["Caldo","Fit","Saudável"], tempo:"35 min", porcoes:"4 porções", foto:"assets/caldo-abobora-frango.jpg",
ingredientes:[
{nome:"Abóbora cabotiá", qtd:"500g descascada em cubos"},
{nome:"Frango desfiado já temperado e cozido", qtd:"200g"},
{nome:"Leite de coco", qtd:"100ml"},
{nome:"Gengibre", qtd:"10g ralado - cerca de 1 colher (chá)"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Água", qtd:"800ml"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Aqueça o azeite em fogo médio e refogue a cebola por 2 minutos, até ficar transparente.", timer:2},
{texto:"Junte o alho e o gengibre e refogue por mais 1 minuto, até perfumar. Adicione a abóbora, tempere com sal e cubra com a água.", timer:1},
{texto:"Cozinhe em fogo alto por 18 minutos, até a abóbora ficar bem macia e quase desmanchando. Desligue e deixe amornar por 5 minutos antes de bater.", dica:"Deixar amornar antes de bater evita espirrar e queimar.", timer:18},
{texto:"Bata a abóbora com a água do cozimento e o leite de coco por 2 minutos, até virar um creme bem liso. Se ficar muito grosso, adicione um pouco de água quente.", timer:0},
{texto:"Volte para a panela, junte o frango, acerte o sal e a pimenta e ferva em fogo baixo por 5 minutos, até ficar bem quente e encorpado. Finalize com cheiro-verde.", dica:"Sirva quente, com cheiro-verde por cima.", timer:5}
]
},
{
id:"caldo-feijao-bacon", titulo:"Caldo de Feijão com Bacon", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"45 min", porcoes:"4 porções", foto:"assets/caldo-feijao-bacon.jpg",
ingredientes:[
{nome:"Feijão carioca cozido com o caldo", qtd:"400g - já cozido"},
{nome:"Bacon", qtd:"100g em cubinhos"},
{nome:"Cebola", qtd:"40g picada - cerca de 1/2 cebola pequena"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Couve", qtd:"50g fatiada bem fininha"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Páprica defumada", qtd:"1/2 colher (chá) - opcional"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Frite o bacon em panela grande em fogo médio, sem óleo, por 6 minutos, até ficar dourado e crocante. Retire metade e reserve para finalizar.", timer:6},
{texto:"Na mesma gordura, refogue a cebola por 2 minutos, até ficar transparente, e junte o alho, refogando por mais 1 minuto até perfumar.", timer:3},
{texto:"Junte o feijão com o caldo, tempere com sal, pimenta e páprica, se quiser, e misture. Bata cerca da metade com mixer ou concha até virar um creme, deixando a outra metade em grãos para dar textura.", dica:"Bater só metade deixa o caldo cremoso sem ficar papado.", timer:0},
{texto:"Ferva em fogo baixo por 10 minutos, mexendo de vez em quando, até engrossar. Se ficar grosso demais, adicione um pouco de água quente.", timer:10},
{texto:"Junte a couve, misture e ferva por mais 2 minutos, só até murchar e continuar verdinha. Desligue e finalize com o bacon crocante e o cheiro-verde.", dica:"Sirva quente, com o bacon crocante por cima.", timer:2}
]
},
{
id:"sopa-legumes-macarrao", titulo:"Sopa de Legumes com Macarrão", categoria_principal:"Caldo", categorias:["Caldo","Saudável","Vegana"], tempo:"40 min", porcoes:"5 porções", foto:"assets/sopa-legumes-macarrao.jpg",
ingredientes:[
{nome:"Batata", qtd:"300g em cubos"},
{nome:"Cenoura", qtd:"2 unidades médias em rodelas"},
{nome:"Abobrinha", qtd:"1 unidade média em cubos"},
{nome:"Vagem", qtd:"100g picada"},
{nome:"Macarrão conchinha", qtd:"120g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Tomate", qtd:"2 unidades médias picados sem sementes"},
{nome:"Água", qtd:"1,2L"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Aqueça o azeite e refogue a cebola por 3 minutos, até ficar transparente. Junte o alho e o tomate e refogue por mais 3 minutos.", timer:6},
{texto:"Junte a batata, a cenoura, a vagem e a água. Tempere com o sal e cozinhe em fogo médio por 15 minutos.", timer:15},
{texto:"Junte a abobrinha e o macarrão e cozinhe por mais 10 minutos, até o macarrão ficar macio e os legumes cozidos mas sem desmanchar.", dica:"Abobrinha entra por último, senão desmancha.", timer:10},
{texto:"Acerte o sal e finalize com o cheiro-verde.", dica:"Sirva quente, na hora. Macarrão na sopa vai absorvendo o caldo se esperar.", timer:0}
]
},
{
id:"caldo-mandioquinha-bacon", titulo:"Caldo de Mandioquinha com Bacon", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"45 min", porcoes:"4 porções", foto:"assets/caldo-mandioquinha-bacon.jpg",
ingredientes:[
{nome:"Mandioquinha", qtd:"600g descascada em pedaços"},
{nome:"Bacon", qtd:"120g em cubinhos"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Água", qtd:"900ml"},
{nome:"Creme de leite", qtd:"100g"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Frite o bacon em fogo médio por 6 minutos, até ficar crocante. Retire e reserve, deixando a gordura na panela.", timer:6},
{texto:"Na mesma panela, refogue a cebola por 2 minutos e o alho por 1 minuto.", timer:3},
{texto:"Junte a mandioquinha e a água, tempere com o sal e cozinhe por 20 minutos, até ficar bem macia.", timer:20},
{texto:"Bata com o creme de leite até virar um creme liso. Se ficar grosso, junte um pouco de água quente.", dica:"Bata bem, mandioquinha pede creme bem liso.", timer:0},
{texto:"Volte para a panela, ferva por 3 minutos, acerte o sal e finalize com o bacon crocante e o cheiro-verde.", dica:"Sirva quente, com o bacon crocante por cima.", timer:3}
]
},
{
id:"canja-galinha", titulo:"Canja de Galinha", categoria_principal:"Caldo", categorias:["Caldo","Brasileira","Saudável"], tempo:"50 min", porcoes:"5 porções", foto:"assets/canja-galinha.jpg",
ingredientes:[
{nome:"Peito de frango", qtd:"400g em cubos"},
{nome:"Arroz branco", qtd:"150g lavado"},
{nome:"Cenoura", qtd:"2 unidades médias em rodelas"},
{nome:"Batata", qtd:"2 unidades médias em cubos"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Água", qtd:"1,5L"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Tempere o frango com o sal e o limão. Doure no azeite por 6 minutos, até ficar dourado por fora.", timer:6},
{texto:"Junte a cebola e o alho e refogue por 3 minutos.", timer:3},
{texto:"Junte a cenoura, a batata, o arroz e a água. Cozinhe em fogo médio por 25 minutos, até o arroz e os legumes ficarem macios.", timer:25},
{texto:"Desfie o frango com dois garfos dentro da própria panela, acerte o sal e finalize com o cheiro-verde.", dica:"Sirva quente, com limão espremido na hora.", timer:0}
]
},
{
id:"creme-milho-frango", titulo:"Creme de Milho com Frango", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"35 min", porcoes:"4 porções", foto:"assets/creme-milho-frango.jpg",
ingredientes:[
{nome:"Milho verde", qtd:"400g - 2 latas escorridas ou 3 espigas"},
{nome:"Frango desfiado já temperado", qtd:"250g"},
{nome:"Leite integral", qtd:"300ml"},
{nome:"Cebola", qtd:"1/2 unidade média picada"},
{nome:"Alho", qtd:"1 dente amassado"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Farinha de trigo", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Bata o milho com o leite no liquidificador por 2 minutos, até ficar bem cremoso. Coe se quiser mais liso.", dica:"Coar deixa o creme bem lisinho.", timer:2},
{texto:"Derreta a manteiga e refogue a cebola por 2 minutos e o alho por 1 minuto. Junte a farinha e mexa por 1 minuto.", timer:4},
{texto:"Junte o creme de milho batido, tempere com sal e pimenta e cozinhe em fogo baixo por 8 minutos, mexendo sempre, até engrossar.", dica:"Mexa sempre para não empelotar.", timer:8},
{texto:"Junte o frango desfiado, misture e ferva por mais 3 minutos. Finalize com o cheiro-verde.", dica:"Sirva quente, com cheiro-verde por cima.", timer:3}
]
},
{
id:"caldo-ervilha-linguica", titulo:"Caldo de Ervilha com Linguiça", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"55 min", porcoes:"5 porções", foto:"assets/caldo-ervilha-linguica.jpg",
ingredientes:[
{nome:"Ervilha seca", qtd:"400g"},
{nome:"Linguiça calabresa", qtd:"200g em rodelas"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Cenoura", qtd:"1 unidade média ralada"},
{nome:"Água", qtd:"1,2L"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Deixe a ervilha de molho por 2 horas, escorra e lave bem.", timer:0},
{texto:"Doure a linguiça no azeite por 5 minutos. Retire e reserve.", timer:5},
{texto:"Na mesma panela, refogue a cebola por 3 minutos, o alho por 1 minuto e a cenoura por 2 minutos.", timer:6},
{texto:"Junte a ervilha e a água, tempere com sal e pimenta e cozinhe em fogo médio por 30 minutos, até a ervilha desmanchar e virar um creme grosso.", dica:"Mexa de vez em quando para não grudar no fundo.", timer:30},
{texto:"Junte a linguiça reservada, ferva por mais 5 minutos, acerte o sal e finalize com o cheiro-verde.", dica:"Sirva quente, com a linguiça por cima.", timer:5}
]
},
{
id:"sopa-cebola-gratinada", titulo:"Sopa de Cebola Gratinada", categoria_principal:"Caldo", categorias:["Caldo","Sopa"], tempo:"60 min", porcoes:"4 porções", foto:"assets/sopa-cebola-gratinada.jpg",
ingredientes:[
{nome:"Cebola", qtd:"6 unidades grandes em meias-luas finas"},
{nome:"Manteiga", qtd:"2 colheres (sopa)"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Farinha de trigo", qtd:"1 colher (sopa)"},
{nome:"Caldo de carne", qtd:"1 litro quente"},
{nome:"Vinho branco", qtd:"100ml - opcional"},
{nome:"Pão francês", qtd:"4 fatias"},
{nome:"Queijo gruyère ou muçarela", qtd:"150g ralado"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Tomilho", qtd:"1 ramo"}
],
passos:[
{texto:"Derreta a manteiga e refogue a cebola com açúcar em fogo baixo por 30 minutos, mexendo de vez em quando, até ficar bem dourada e caramelizada.", dica:"Paciência na cebola, é o caramelizar que dá o sabor da sopa.", timer:30},
{texto:"Junte a farinha e mexa por 1 minuto. Junte o vinho e deixe evaporar.", timer:1},
{texto:"Junte o caldo quente e o tomilho e cozinhe por 15 minutos em fogo baixo.", timer:15},
{texto:"Coloque em tigelas que vão ao forno, coloque o pão por cima e cubra com queijo.", timer:0},
{texto:"Gratine em forno a 220°C por 8 minutos, até o queijo dourar.", dica:"Sirva quente, na hora, com o queijo puxando.", timer:8}
]
},
{
id:"sopa-tomate-manjericao", titulo:"Sopa de Tomate com Manjericão", categoria_principal:"Caldo", categorias:["Caldo","Sopa","Vegana"], tempo:"35 min", porcoes:"4 porções", foto:"assets/sopa-tomate-manjericao.jpg",
ingredientes:[
{nome:"Tomate maduro", qtd:"1kg picado"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"3 dentes"},
{nome:"Manjericão fresco", qtd:"1 maço"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Creme de leite", qtd:"100ml - opcional"},
{nome:"Pão", qtd:"para servir"}
],
passos:[
{texto:"Refogue a cebola no azeite por 4 minutos, junte o alho e refogue por 1 minuto.", timer:5},
{texto:"Junte o tomate, o açúcar e o sal e cozinhe em fogo baixo por 20 minutos, até desmanchar.", dica:"Tomate bem maduro deixa a sopa mais doce, sem precisar de muito açúcar.", timer:20},
{texto:"Bata com o manjericão no liquidificador até ficar liso.", timer:0},
{texto:"Volte para a panela, junte o creme se usar e aqueça sem ferver.", dica:"Sirva quente, com um fio de azeite e pão torrado.", timer:0}
]
},
{
id:"creme-cenoura-gengibre", titulo:"Creme de Cenoura com Gengibre", categoria_principal:"Caldo", categorias:["Caldo","Sopa","Vegana"], tempo:"35 min", porcoes:"4 porções", foto:"assets/creme-cenoura-gengibre.jpg",
ingredientes:[
{nome:"Cenoura", qtd:"600g em rodelas"},
{nome:"Batata", qtd:"1 unidade em cubos"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Gengibre", qtd:"1 pedaço de 30g ralado"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Água", qtd:"800ml"},
{nome:"Azeite", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Creme de leite", qtd:"100ml para finalizar"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Refogue a cebola, o alho e o gengibre no azeite por 3 minutos.", timer:3},
{texto:"Junte a cenoura, a batata e a água e cozinhe por 20 minutos, até ficar bem macia.", timer:20},
{texto:"Bata tudo no liquidificador até virar um creme liso.", dica:"Bata bem, o creme tem que ficar veludo.", timer:0},
{texto:"Volte para a panela, acerte o sal e finalize com creme de leite e cheiro-verde.", dica:"Sirva quente, com um fio de creme por cima.", timer:0}
]
},
{
id:"caldo-mocoto", titulo:"Caldo de Mocotó", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"150 min", porcoes:"6 porções", foto:"assets/caldo-mocoto.jpg",
ingredientes:[
{nome:"Mocotó limpo", qtd:"1kg em rodelas"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"4 dentes amassados"},
{nome:"Tomate", qtd:"2 unidades picados"},
{nome:"Cheiro-verde", qtd:"1 maço"},
{nome:"Louro", qtd:"2 folhas"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta", qtd:"a gosto"},
{nome:"Água", qtd:"2 litros"},
{nome:"Farinha de mandioca", qtd:"para servir"}
],
passos:[
{texto:"Ferva o mocotó em água por 10 minutos, descarte a água e lave bem.", dica:"Ferver e descartar a água tira o cheiro forte.", timer:10},
{texto:"Coloque na pressão com água limpa, louro e sal e cozinhe por 60 minutos, até ficar bem macio.", timer:60},
{texto:"Retire o mocotó, desfie a carne e reserve o caldo. Refogue a cebola, o alho e o tomate.", timer:0},
{texto:"Junte a carne desfiada, o caldo coado e o cheiro-verde e cozinhe por 20 minutos em fogo baixo, até engrossar.", timer:20},
{texto:"Acerte o sal, o limão e a pimenta.", dica:"Sirva quente, com farinha de mandioca e limão.", timer:0}
]
},
{
id:"sopa-mandioca-costela", titulo:"Sopa de Mandioca com Costela", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"90 min", porcoes:"6 porções", foto:"assets/sopa-mandioca-costela.jpg",
ingredientes:[
{nome:"Mandioca", qtd:"800g em pedaços"},
{nome:"Costela bovina", qtd:"600g em pedaços"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"3 dentes"},
{nome:"Tomate", qtd:"1 unidade picada"},
{nome:"Cheiro-verde", qtd:"para finalizar"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Água", qtd:"1,5L"}
],
passos:[
{texto:"Doure a costela em fogo alto por 8 minutos, de todos os lados.", timer:8},
{texto:"Junte a cebola, o alho e o tomate e refogue por 5 minutos.", timer:5},
{texto:"Junte a mandioca e a água e cozinhe em fogo baixo por 60 minutos, até a mandioca desmanchar e a costela ficar macia.", dica:"Deixe a mandioca desmanchar, ela que engrossa a sopa.", timer:60},
{texto:"Desfie a costela com garfo, acerte o sal e finalize com cheiro-verde.", dica:"Sirva quente, com cheiro-verde por cima.", timer:0}
]
},
{
id:"creme-espinafre-queijo", titulo:"Creme de Espinafre com Queijo", categoria_principal:"Caldo", categorias:["Caldo","Sopa"], tempo:"25 min", porcoes:"4 porções", foto:"assets/creme-espinafre-queijo.jpg",
ingredientes:[
{nome:"Espinafre", qtd:"2 maços - só as folhas"},
{nome:"Batata", qtd:"2 unidades em cubos"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Leite", qtd:"300ml"},
{nome:"Queijo muçarela", qtd:"150g ralado"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Noz-moscada", qtd:"1 pitada"}
],
passos:[
{texto:"Cozinhe a batata em água com sal por 15 minutos, até ficar macia.", timer:15},
{texto:"Refogue a cebola e o alho na manteiga, junte o espinafre e refogue por 2 minutos, só até murchar.", dica:"Espinafre cozinha rápido, 2 minutos já basta, senão escurece.", timer:2},
{texto:"Bata a batata, o espinafre, o leite e a noz-moscada no liquidificador até ficar cremoso.", timer:0},
{texto:"Volte para a panela, junte o queijo e mexa até derreter.", dica:"Sirva quente, com queijo puxando.", timer:0}
]
},
{
id:"sopa-batata-doce-curry", titulo:"Sopa de Batata-Doce com Curry", categoria_principal:"Caldo", categorias:["Caldo","Sopa","Vegana"], tempo:"35 min", porcoes:"4 porções", foto:"assets/sopa-batata-doce-curry.jpg",
ingredientes:[
{nome:"Batata-doce", qtd:"600g em cubos"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Curry em pó", qtd:"1 colher (sopa)"},
{nome:"Leite de coco", qtd:"200ml"},
{nome:"Água", qtd:"600ml"},
{nome:"Azeite", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Limão", qtd:"suco de 1/2 unidade"}
],
passos:[
{texto:"Refogue a cebola e o alho no azeite por 3 minutos, junte o curry e refogue por 1 minuto.", dica:"Fritar o curry rapidinho solta muito mais aroma.", timer:4},
{texto:"Junte a batata-doce e a água e cozinhe por 20 minutos, até ficar macia.", timer:20},
{texto:"Bata com o leite de coco até ficar cremosa.", timer:0},
{texto:"Acerte o sal e o limão.", dica:"Sirva quente, com um fio de leite de coco por cima.", timer:0}
]
},
{
id:"caldo-camarao", titulo:"Caldo de Camarão", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"40 min", porcoes:"4 porções", foto:"assets/caldo-camarao.jpg",
ingredientes:[
{nome:"Camarão limpo", qtd:"400g"},
{nome:"Tomate", qtd:"3 unidades picados"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"3 dentes"},
{nome:"Pimentão", qtd:"1/2 unidade picada"},
{nome:"Leite de coco", qtd:"200ml"},
{nome:"Azeite de dendê", qtd:"1 colher (sopa)"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Coentro", qtd:"para finalizar"}
],
passos:[
{texto:"Tempere o camarão com limão e sal.", timer:0},
{texto:"Refogue a cebola, o alho, o tomate e o pimentão por 6 minutos, até virar um molho.", timer:6},
{texto:"Junte o leite de coco e o dendê e ferva por 5 minutos.", timer:5},
{texto:"Junte o camarão e cozinhe por 4 minutos, até ficar rosado.", dica:"Não passe de 4 minutos, senão o camarão fica borrachudo.", timer:4},
{texto:"Finalize com coentro.", dica:"Sirva quente, com arroz branco.", timer:0}
]
},
{
id:"sopa-grao-bico-linguica", titulo:"Sopa de Grão-de-Bico com Linguiça", categoria_principal:"Caldo", categorias:["Caldo","Sopa"], tempo:"60 min", porcoes:"5 porções", foto:"assets/sopa-grao-bico-linguica.jpg",
ingredientes:[
{nome:"Grão-de-bico", qtd:"400g - deixado de molho por 12h"},
{nome:"Linguiça calabresa", qtd:"200g em rodelas"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"3 dentes"},
{nome:"Cenoura", qtd:"1 unidade em cubos"},
{nome:"Água", qtd:"1,2L"},
{nome:"Azeite", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Escorra o grão-de-bico e cozinhe em água por 30 minutos, até ficar macio. Reserve com a água.", timer:30},
{texto:"Doure a linguiça no azeite por 5 minutos. Retire e reserve.", timer:5},
{texto:"Refogue a cebola, o alho e a cenoura na mesma panela por 5 minutos.", timer:5},
{texto:"Junte o grão-de-bico com a água, amasse um pouco com a concha para engrossar e cozinhe por 10 minutos.", dica:"Amassar um pouco deixa a sopa cremosa sem precisar bater tudo.", timer:10},
{texto:"Junte a linguiça, acerte o sal e finalize com cheiro-verde.", dica:"Sirva quente, com cheiro-verde por cima.", timer:0}
]
},
{
id:"sopa-couve-flor-queijo", titulo:"Sopa de Couve-Flor com Queijo", categoria_principal:"Caldo", categorias:["Caldo","Sopa"], tempo:"30 min", porcoes:"4 porções", foto:"assets/sopa-couve-flor-queijo.jpg",
ingredientes:[
{nome:"Couve-flor", qtd:"1 unidade média em floretes"},
{nome:"Batata", qtd:"1 unidade em cubos"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Leite", qtd:"300ml"},
{nome:"Queijo cheddar ou muçarela", qtd:"150g ralado"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"}
],
passos:[
{texto:"Refogue a cebola e o alho na manteiga por 3 minutos.", timer:3},
{texto:"Junte a couve-flor, a batata e cubra com água. Cozinhe por 18 minutos, até ficar macia.", timer:18},
{texto:"Bata com o leite até ficar cremosa.", timer:0},
{texto:"Volte para a panela, junte o queijo e mexa até derreter. Acerte o sal e a pimenta.", dica:"Sirva quente, com queijo puxando.", timer:0}
]
}
];
