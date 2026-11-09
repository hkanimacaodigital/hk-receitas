// RECEITAS BRASILEIRA
// 1 - Feijoada Completa da Casa
// 2 - Moqueca Baiana de Peixe
// 3 - Bobó de Camarão Cremoso
// 4 - Baião de Dois
// 5 - Galinhada Caipira
// 6 - Picanha na Frigideira com Farofa
// 7 - Escondidinho de Carne Seca
// 8 - Strogonoff de Frango
// TOTAL: 8 receitas
window.RECEITAS_BRASILEIRA = [
{
id:"feijoada-completa", titulo:"Feijoada Completa da Casa", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"180 min + 12h de molho", porcoes:"6 porções", nivel:"Médio", foto:"assets/feijoada-completa.jpg",
ingredientes:[
{nome:"Feijão preto", qtd:"500g"},
{nome:"Linguiça calabresa", qtd:"200g em rodelas"},
{nome:"Paio", qtd:"100g em rodelas"},
{nome:"Costela defumada", qtd:"100g em pedaços"},
{nome:"Bacon", qtd:"100g em cubos"},
{nome:"Louro", qtd:"2 folhas"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Óleo ou banha", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Água quente", qtd:"o quanto baste"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Na noite anterior, deixe o feijão de molho em água por 12 horas. No dia seguinte, descarte a água e lave bem.", timer:0},
{texto:"Coloque o feijão na panela de pressão, cubra com água até 2 dedos acima, junte o louro e cozinhe por 40 minutos após pegar pressão. Espere a pressão sair sozinha.", timer:40},
{texto:"Enquanto isso, doure o bacon, a calabresa, o paio e a costela em fogo médio por 8 minutos.", timer:8},
{texto:"Na mesma frigideira, refogue a cebola até ficar transparente, junte o alho e refogue por mais 1 minuto. Tempere com o sal e a pimenta.", timer:2},
{texto:"Junte as carnes e o refogado ao feijão e cozinhe em fogo baixo, sem tampa, por 60 minutos, até o caldo engrossar.", timer:60, dica:"Só acerte o sal no final, as carnes defumadas já são salgadas."},
{texto:"Retire o louro, finalize com o cheiro-verde e sirva com arroz, farofa, couve e laranja.", timer:0}
]
},
{
id:"moqueca-baiana", titulo:"Moqueca Baiana de Peixe", categoria_principal:"Brasileira", categorias:["Brasileira","Saudável"], tempo:"50 min", porcoes:"4 porções", nivel:"Fácil", foto:"assets/moqueca-baiana.jpg",
ingredientes:[
{nome:"Robalo em postas", qtd:"800g"},
{nome:"Leite de coco", qtd:"200ml"},
{nome:"Azeite de dendê", qtd:"30ml"},
{nome:"Pimentão amarelo", qtd:"1 unidade pequena em rodelas"},
{nome:"Pimentão vermelho", qtd:"1/2 unidade em rodelas"},
{nome:"Cebola roxa", qtd:"1 unidade média em rodelas"},
{nome:"Tomate", qtd:"2 unidades médias em rodelas"},
{nome:"Limão", qtd:"suco de 1 unidade"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Coentro fresco", qtd:"1/2 maço picado"},
{nome:"Cebolinha", qtd:"2 colheres (sopa) picada"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"}
],
passos:[
{texto:"Tempere o peixe com o limão, o alho, o sal e a pimenta. Deixe marinando por 15 minutos.", timer:15},
{texto:"Regue o fundo da panela com o azeite e faça uma camada com metade da cebola, dos pimentões e dos tomates.", timer:0},
{texto:"Coloque o peixe por cima, sem sobrepor muito, e cubra com o restante dos legumes e metade do coentro.", timer:0},
{texto:"Regue com o leite de coco e o dendê, tampe e cozinhe em fogo médio por 20 minutos, sem mexer.", timer:20, dica:"Não mexa depois que tampar, para o peixe não desmanchar."},
{texto:"Finalize com o restante do coentro e a cebolinha e sirva com arroz e farofa.", timer:0}
]
},
{
id:"bobo-camarao", titulo:"Bobó de Camarão Cremoso", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"50 min", porcoes:"4 porções", nivel:"Médio", foto:"assets/bobo-camarao.jpg",
ingredientes:[
{nome:"Camarão limpo", qtd:"500g"},
{nome:"Mandioca", qtd:"500g descascada em pedaços"},
{nome:"Leite de coco", qtd:"200ml"},
{nome:"Azeite de dendê", qtd:"15ml"},
{nome:"Pimentão amarelo", qtd:"1/2 unidade picada"},
{nome:"Tomate", qtd:"1 unidade média picada sem sementes"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Limão", qtd:"suco de 1/2 unidade"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Coentro fresco", qtd:"1/2 maço picado"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"},
{nome:"Água", qtd:"o quanto baste para cozinhar a mandioca"}
],
passos:[
{texto:"Cozinhe a mandioca em água por 25 minutos, até ficar bem macia. Escorra, retire os fiapos e reserve um pouco da água do cozimento.", timer:25},
{texto:"Bata a mandioca com o leite de coco e um pouco da água reservada, até virar um purê liso. Reserve.", timer:0},
{texto:"Tempere o camarão com o limão, o sal e a pimenta e deixe descansar por 10 minutos. Refogue a cebola no azeite até ficar transparente.", timer:10},
{texto:"Junte o alho, o pimentão e o tomate e refogue por 5 minutos, até murchar.", timer:5},
{texto:"Junte o camarão e cozinhe por 5 minutos, até ficar rosado.", timer:5, dica:"Não passe de 5 minutos, senão o camarão fica borrachudo."},
{texto:"Junte o purê, misture em fogo baixo, regue com o dendê, junte o coentro, acerte o sal e ferva por mais 5 minutos. Sirva com arroz.", timer:5}
]
},
{
id:"baiao-de-dois", titulo:"Baião de Dois", categoria_principal:"Brasileira", categorias:["Brasileira","Almoço"], tempo:"55 min", porcoes:"6 porções", foto:"assets/baiao-de-dois.jpg",
ingredientes:[
{nome:"Feijão-de-corda cozido", qtd:"300g"},
{nome:"Arroz branco", qtd:"300g lavado"},
{nome:"Carne seca dessalgada", qtd:"250g em cubos"},
{nome:"Queijo coalho", qtd:"150g em cubos"},
{nome:"Manteiga de garrafa", qtd:"2 colheres (sopa)"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Pimentão verde", qtd:"1/2 unidade picada"},
{nome:"Tomate", qtd:"1 unidade média picada sem sementes"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Doure a carne seca na manteiga de garrafa por 6 minutos, até ficar bem dourada.", timer:6},
{texto:"Junte a cebola, o alho, o pimentão e o tomate e refogue por 5 minutos, até murchar.", timer:5},
{texto:"Junte o arroz e o feijão-de-corda, cubra com água quente até 2 dedos acima e cozinhe em fogo baixo com a panela semitampada por 20 minutos, até o arroz ficar macio.", timer:20},
{texto:"Desligue, junte o queijo coalho e tampe por 5 minutos para derreter.", timer:5},
{texto:"Finalize com o cheiro-verde e acerte o sal.", timer:0}
]
},
{
id:"galinhada-caipira", titulo:"Galinhada Caipira", categoria_principal:"Brasileira", categorias:["Brasileira","Almoço"], tempo:"60 min", porcoes:"6 porções", foto:"assets/galinhada-caipira.jpg",
ingredientes:[
{nome:"Frango em pedaços", qtd:"800g - coxa e sobrecoxa"},
{nome:"Arroz branco", qtd:"300g lavado"},
{nome:"Cenoura", qtd:"1 unidade média em cubos"},
{nome:"Milho verde", qtd:"100g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Tomate", qtd:"2 unidades médias picadas sem pele"},
{nome:"Açafrão / cúrcuma", qtd:"1 colher (chá)"},
{nome:"Óleo", qtd:"2 colheres (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"},
{nome:"Água quente", qtd:"700ml"}
],
passos:[
{texto:"Tempere o frango com o sal, a pimenta e metade do alho. Doure em óleo quente por 8 minutos, até dourar de todos os lados.", timer:8},
{texto:"Retire o frango e na mesma panela refogue a cebola, o restante do alho e o tomate por 5 minutos.", timer:5},
{texto:"Volte o frango, junte o arroz, a cenoura, o milho e o açafrão e misture bem.", timer:0},
{texto:"Cubra com a água quente, tampe e cozinhe em fogo baixo por 25 minutos, sem mexer, até o arroz ficar macio e o caldo secar.", timer:25},
{texto:"Desligue, deixe descansar tampado por 5 minutos e finalize com o cheiro-verde.", timer:5}
]
},
{
id:"picanha-frigideira", titulo:"Picanha na Frigideira com Farofa", categoria_principal:"Brasileira", categorias:["Brasileira","Churrasco"], tempo:"30 min", porcoes:"4 porções", foto:"assets/picanha-frigideira.jpg",
ingredientes:[
{nome:"Picanha em bifes grossos", qtd:"600g"},
{nome:"Sal grosso", qtd:"1 colher (chá)"},
{nome:"Alho", qtd:"3 dentes laminados"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Farinha de mandioca", qtd:"150g"},
{nome:"Bacon", qtd:"80g em cubos"},
{nome:"Cebola", qtd:"1/2 unidade picada"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Tempere a picanha com o sal grosso. Aqueça bem uma frigideira grossa em fogo alto.", timer:0},
{texto:"Sele a picanha 4 minutos de cada lado, sem apertar, até dourar por fora e ficar rosada por dentro. Retire e deixe descansar por 5 minutos.", dica:"Não fure a carne, senão perde o suco.", timer:8},
{texto:"Na mesma frigideira, doure o bacon por 4 minutos, junte a cebola e o alho e refogue por 2 minutos.", timer:6},
{texto:"Junte a manteiga e a farinha e mexa por 3 minutos, até a farofa ficar dourada e crocante.", timer:3},
{texto:"Fatie a picanha, cubra com a farofa e finalize com o cheiro-verde.", timer:0}
]
},
{
id:"escondidinho-carne-seca", titulo:"Escondidinho de Carne Seca", categoria_principal:"Brasileira", categorias:["Brasileira","Almoço"], tempo:"70 min", porcoes:"6 porções", foto:"assets/escondidinho-carne-seca.jpg",
ingredientes:[
{nome:"Carne seca dessalgada e desfiada", qtd:"400g"},
{nome:"Mandioca", qtd:"600g descascada em pedaços"},
{nome:"Leite integral", qtd:"100ml"},
{nome:"Manteiga", qtd:"2 colheres (sopa)"},
{nome:"Queijo muçarela", qtd:"150g ralado"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Cheiro-verde", qtd:"para finalizar"}
],
passos:[
{texto:"Cozinhe a mandioca em água com sal por 25 minutos, até ficar bem macia. Escorra e retire os fiapos.", timer:25},
{texto:"Amasse a mandioca ainda quente com a manteiga e o leite, até virar um purê liso. Acerte o sal.", timer:0},
{texto:"Refogue a cebola e o alho em um fio de azeite por 3 minutos, junte a carne seca e refogue por 5 minutos.", timer:8},
{texto:"Em um refratário, coloque a carne, cubra com o purê e finalize com a muçarela.", timer:0},
{texto:"Leve ao forno a 200°C por 15 minutos, até gratinar.", timer:15},
{texto:"Finalize com o cheiro-verde.", timer:0}
]
},
{
id:"strogonoff-frango", titulo:"Strogonoff de Frango", categoria_principal:"Brasileira", categorias:["Brasileira","Almoço"], tempo:"35 min", porcoes:"4 porções", foto:"assets/strogonoff-frango.jpg",
ingredientes:[
{nome:"Peito de frango", qtd:"600g em cubos"},
{nome:"Champignon", qtd:"150g fatiado"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Ketchup", qtd:"3 colheres (sopa)"},
{nome:"Mostarda", qtd:"1 colher (sopa)"},
{nome:"Creme de leite", qtd:"200g"},
{nome:"Manteiga", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"a gosto"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Batata palha", qtd:"para servir"},
{nome:"Arroz branco", qtd:"para servir"}
],
passos:[
{texto:"Tempere o frango com o sal e a pimenta. Doure na manteiga por 8 minutos, até ficar bem dourado.", timer:8},
{texto:"Junte a cebola e o alho e refogue por 3 minutos. Junte o champignon e refogue por 3 minutos.", timer:6},
{texto:"Junte o ketchup e a mostarda e mexa por 1 minuto.", timer:1},
{texto:"Desligue o fogo, junte o creme de leite e misture até ficar cremoso.", dica:"Desligar o fogo evita talhar o creme.", timer:0},
{texto:"Acerte o sal e sirva com arroz e batata palha.", timer:0}
]
}
];
