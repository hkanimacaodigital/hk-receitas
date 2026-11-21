// RECEITAS ÁRABE
// 1 - Esfiha Aberta de Carne
// 2 - Kafta Kebab na Brasa
// 3 - Homus Cremoso com Pão Pita
// 4 - Falafel Crocante na Airfryer
// 5 - Tabule Fresco
// 6 - Mujaddara - Arroz com Lentilha e Cebola Caramelizada
// 7 - Manakish de Zaatar
// --------------------
// Incluído no dia 21/11/2026
// 8 - Quibe Assado
// 9 - Babaganoush
// 10 - Labneh com Azeite
// 11 - Shawarma de Frango
// 12 - Pão Pita Caseiro
// 13 - Fattoush
// 14 - Sopa de Lentilha Árabe
// 15 - Charuto de Folha de Uva
// 16 - Arroz com Amêndoas
// 17 - Baklava
// TOTAL: 17 receitas
window.RECEITAS_ARABE = [
{
id:"esfiha-aberta", titulo:"Esfiha Aberta de Carne", categoria_principal:"Árabe", categorias:["Árabe","Lanche"], tempo:"80 min", porcoes:"10 unidades", foto:"assets/esfiha-aberta.jpg", airfryer:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"500g"},
{nome:"Fermento biológico seco", qtd:"10g"},
{nome:"Açúcar", qtd:"1 colher (sopa)"},
{nome:"Sal", qtd:"1 colher (chá) para a massa + a gosto para o recheio"},
{nome:"Água morna", qtd:"300ml"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Carne moída", qtd:"300g"},
{nome:"Cebola", qtd:"1 unidade média picada"},
{nome:"Tomate", qtd:"1 unidade média picada sem sementes"},
{nome:"Hortelã fresca", qtd:"10 folhas picadas"},
{nome:"Pimenta síria", qtd:"1 colher (chá)"},
{nome:"Suco de limão", qtd:"suco de 1/2 limão"},
{nome:"Fubá ou farinha de trigo", qtd:"para polvilhar a bancada"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal em uma tigela grande. Abra um buraco no centro, junte a água morna e o azeite e misture até formar uma massa.", timer:0},
{texto:"Sove em bancada enfarinhada por 10 minutos, até ficar lisa, macia e não grudar nas mãos. Se precisar, adicione farinha aos poucos, sem exagerar para não ressecar.", dica:"Não exagere na farinha, senão a esfiha fica seca.", timer:10},
{texto:"Volte para a tigela, cubra com um pano e deixe descansar em local abafado por 30 minutos, até dobrar de tamanho.", timer:30},
{texto:"Enquanto isso, refogue a cebola em um fio de azeite por 3 minutos, até ficar transparente. Junte a carne, tempere com sal e pimenta síria e refogue por 8 minutos, quebrando os pedaços, até secar bem a água.", dica:"Deixe a carne bem sequinha, recheio úmido deixa a massa mole.", timer:8},
{texto:"Desligue o fogo, junte o tomate, a hortelã e o limão. Misture e deixe esfriar completamente antes de usar.", dica:"Recheio quente deixa a massa úmida.", timer:0},
{texto:"Divida a massa em 10 bolinhas. Em bancada polvilhada, abra cada uma até um disco de cerca de 12cm, com a borda um pouco mais grossa que o centro.", timer:0},
{texto:"Coloque 1 colher e meia de recheio já frio no centro de cada disco, espalhando até quase a borda, sem fechar. Aperte levemente com as costas da colher para grudar.", timer:0},
{texto:"Coloque em forma untada ou com papel-manteiga, com espaço entre elas. Asse em forno ou Airfryer a 200°C por 12 minutos, até dourar nas bordas e o recheio ficar sequinho.", dica:"Sirva quente, com limão espremido por cima.", timer:12}
]
},
{
id:"kafta-kebab", titulo:"Kafta Kebab na Brasa", categoria_principal:"Árabe", categorias:["Árabe","Brasileira"], tempo:"40 min", porcoes:"6 espetos", foto:"assets/kafta-kebab.jpg", airfryer:true,
ingredientes:[
{nome:"Carne moída", qtd:"500g - de preferência patinho ou acém"},
{nome:"Cebola", qtd:"1 unidade grande ralada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Hortelã fresca", qtd:"2 colheres (sopa) picada"},
{nome:"Salsinha", qtd:"2 colheres (sopa) picada"},
{nome:"Pimenta síria", qtd:"1 colher (chá)"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Pimenta-do-reino", qtd:"a gosto"},
{nome:"Azeite de oliva", qtd:"1 colher (sopa)"},
{nome:"Espetos de bambu ou de metal", qtd:"6 unidades"}
],
passos:[
{texto:"Rale a cebola, coloque em um pano limpo e esprema bem para tirar todo o excesso de água.", dica:"Cebola com água faz a kafta desmanchar na brasa.", timer:0},
{texto:"Misture a carne com a cebola espremida, o alho, a hortelã, a salsinha, a pimenta síria, o cominho, o sal, a pimenta-do-reino e o azeite. Amasse com as mãos por 3 minutos, até ficar bem ligada e grudenta.", dica:"Amasse bem, é isso que faz a kafta não soltar do espeto.", timer:3},
{texto:"Cubra e leve à geladeira por 15 minutos. Esse descanso deixa a carne mais firme e facilita modelar.", timer:15},
{texto:"Com as mãos úmidas, modele uma porção de carne em volta de cada espeto, apertando bem e formando um cilindro de cerca de 12cm. Repita até fazer os 6 espetos.", dica:"Mãos úmidas evitam que a carne grude na mão.", timer:0},
{texto:"Grelhe na brasa bem quente, ou na Airfryer a 200°C por 10 minutos, virando aos 5 minutos, até dourar por fora e ficar suculenta por dentro.", dica:"Sirva quente, com pão pita e homus.", timer:10}
]
},
{
id:"homus", titulo:"Homus Cremoso com Pão Pita", categoria_principal:"Árabe", categorias:["Árabe","Entrada","Vegana"], tempo:"25 min", porcoes:"4 porções", foto:"assets/homus.jpg", airfryer:false,
ingredientes:[
{nome:"Grão-de-bico cozido", qtd:"400g escorrido"},
{nome:"Tahine", qtd:"3 colheres (sopa)"},
{nome:"Suco de limão", qtd:"suco de 1 unidade"},
{nome:"Alho", qtd:"1 dente pequeno"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa) + para regar"},
{nome:"Água gelada", qtd:"60ml"},
{nome:"Páprica doce", qtd:"1 pitada para polvilhar"},
{nome:"Pão pita", qtd:"4 unidades para servir"}
],
passos:[
{texto:"Bata o grão-de-bico com o tahine, o limão, o alho, o sal e o azeite no processador por 2 minutos, até virar uma pasta grossa.", timer:2},
{texto:"Junte a água gelada aos poucos e bata por mais 3 minutos, até ficar bem cremoso e liso.", dica:"A água gelada é o segredo para ficar cremoso e não pesado.", timer:3},
{texto:"Prove e acerte o sal e o limão.", timer:0},
{texto:"Espalhe em um prato, faça um buraco no centro com as costas da colher, regue com azeite e polvilhe a páprica.", timer:0},
{texto:"Aqueça o pão pita no forno ou na Airfryer a 180°C por 3 minutos e corte em triângulos para mergulhar.", dica:"Sirva em temperatura ambiente, com o pita quentinho.", timer:3}
]
},
{
id:"falafel", titulo:"Falafel Crocante na Airfryer", categoria_principal:"Árabe", categorias:["Árabe","Vegana","Lanche"], tempo:"40 min", porcoes:"16 unidades", foto:"assets/falafel.jpg", airfryer:true,
ingredientes:[
{nome:"Grão-de-bico cru", qtd:"250g deixado de molho por 12 horas"},
{nome:"Cebola", qtd:"1 unidade pequena picada"},
{nome:"Alho", qtd:"2 dentes"},
{nome:"Salsinha", qtd:"1 xícara picada"},
{nome:"Hortelã fresca", qtd:"1/2 xícara picada"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Coentro em pó", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Farinha de trigo", qtd:"2 colheres (sopa)"},
{nome:"Fermento em pó", qtd:"1 colher (chá)"},
{nome:"Azeite em spray", qtd:"para borrifar"}
],
passos:[
{texto:"Escorra o grão-de-bico do molho e seque bem. Não use grão-de-bico cozido de lata.", dica:"Grão cozido deixa o falafel mole e desmancha.", timer:0},
{texto:"Bata o grão-de-bico com a cebola, o alho, a salsinha, a hortelã, o cominho, o coentro e o sal no processador, pulsando até formar uma massa grossa com pedacinhos, não uma pasta lisa.", dica:"Pulse, não bata liso, o falafel tem que ter pedacinhos.", timer:0},
{texto:"Misture a farinha e o fermento, cubra e leve à geladeira por 15 minutos para firmar.", timer:15},
{texto:"Faça bolinhas do tamanho de uma noz, apertando bem para não rachar.", dica:"Aperte bem, se ficar frouxo ele racha na airfryer.", timer:0},
{texto:"Preaqueça a Airfryer a 200°C por 5 minutos. Coloque os falaféis no cesto sem encostar e borrife azeite.", timer:5},
{texto:"Asse a 200°C por 15 minutos, virando aos 8 minutos, até dourar e ficar crocante por fora.", dica:"Sirva quente e crocante, com homus ou molho de tahine.", timer:15}
]
},
{
id:"tabule", titulo:"Tabule Fresco", categoria_principal:"Árabe", categorias:["Árabe","Salada","Vegana"], tempo:"25 min", porcoes:"4 porções", foto:"assets/tabule.jpg", airfryer:false,
ingredientes:[
{nome:"Salsinha", qtd:"2 maços picados bem fininho"},
{nome:"Hortelã fresca", qtd:"1/2 maço picado"},
{nome:"Tomate", qtd:"3 unidades médias picadas sem sementes"},
{nome:"Trigo para quibe fino", qtd:"3 colheres (sopa)"},
{nome:"Cebola", qtd:"1/2 unidade pequena bem picada"},
{nome:"Suco de limão", qtd:"suco de 2 unidades"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Sal", qtd:"1 colher (chá)"}
],
passos:[
{texto:"Deixe o trigo de molho em água por 15 minutos, depois escorra e esprema bem para tirar toda a água.", dica:"Espremido bem, senão o tabule fica aguado.", timer:15},
{texto:"Misture a salsinha, a hortelã, o tomate e a cebola em uma tigela grande.", timer:0},
{texto:"Junte o trigo espremido, o limão, o azeite e o sal e misture bem.", timer:0},
{texto:"Deixe na geladeira por 10 minutos para pegar sabor e sirva gelado.", dica:"Sirva gelado, bem fresco. Tempere na hora para a salsinha não murchar.", timer:10}
]
},
{
id:"mujaddara", titulo:"Mujaddara - Arroz com Lentilha e Cebola Caramelizada", categoria_principal:"Árabe", categorias:["Árabe","Almoço","Vegana"], tempo:"50 min", porcoes:"4 porções", foto:"assets/mujaddara.jpg", airfryer:false,
ingredientes:[
{nome:"Lentilha", qtd:"200g"},
{nome:"Arroz branco", qtd:"200g lavado"},
{nome:"Cebola", qtd:"3 unidades grandes em meias-luas finas"},
{nome:"Azeite de oliva", qtd:"4 colheres (sopa)"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá) + a gosto"},
{nome:"Água", qtd:"500ml"},
{nome:"Salsinha", qtd:"para finalizar"}
],
passos:[
{texto:"Cozinhe a lentilha em água com sal por 15 minutos, até ficar macia mas sem desmanchar. Escorra e reserve.", dica:"Não deixe desmanchar, ela ainda vai cozinhar com o arroz.", timer:15},
{texto:"Em uma panela grande, aqueça o azeite em fogo médio e frite a cebola por 15 minutos, mexendo de vez em quando, até ficar bem dourada e caramelizada. Retire metade e reserve.", dica:"Paciência na cebola, ela tem que caramelizar de verdade, não só murchar.", timer:15},
{texto:"Na mesma panela com o restante da cebola, junte o arroz, o cominho e o sal e refogue por 2 minutos.", timer:2},
{texto:"Junte a lentilha cozida e a água, tampe e cozinhe em fogo baixo por 18 minutos, até o arroz secar e ficar soltinho. Não mexa depois que tampar.", dica:"Não mexa depois de tampar, senão empapa.", timer:18},
{texto:"Desligue, deixe descansar tampado por 5 minutos, solte com um garfo e cubra com a cebola reservada e a salsinha.", dica:"Sirva quente, com a cebola crocante por cima.", timer:5}
]
},
{
id:"manakish-zaatar", titulo:"Manakish de Zaatar", categoria_principal:"Árabe", categorias:["Árabe","Lanche","Café da Manhã"], tempo:"70 min", porcoes:"6 unidades", foto:"assets/manakish-zaatar.jpg", airfryer:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"300g"},
{nome:"Fermento biológico seco", qtd:"5g"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Água morna", qtd:"180ml"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa) + para a cobertura"},
{nome:"Zaatar", qtd:"4 colheres (sopa)"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal. Junte a água morna e o azeite e misture até formar uma massa.", timer:0},
{texto:"Sove por 8 minutos até ficar lisa e macia. Cubra e deixe crescer por 30 minutos, até dobrar.", timer:30},
{texto:"Misture o zaatar com 4 colheres de azeite até virar uma pastinha.", timer:0},
{texto:"Divida a massa em 6 bolinhas e abra cada uma em disco fino de 15cm.", timer:0},
{texto:"Espalhe a pastinha de zaatar até quase a borda, sem deixar acumular no centro.", dica:"Se colocar muito, fica amargo.", timer:0},
{texto:"Asse em forno ou Airfryer a 200°C por 10 minutos, até a borda dourar e a base ficar firme.", dica:"Sirva quente, com labneh ou coalhada.", timer:10}
]
},
{
id:"quibe-assado", titulo:"Quibe Assado", categoria_principal:"Árabe", categorias:["Árabe","Almoço"], tempo:"60 min", porcoes:"8 porções", foto:"assets/quibe-assado.jpg",
ingredientes:[
{nome:"Trigo para quibe fino", qtd:"250g"},
{nome:"Carne moída", qtd:"500g"},
{nome:"Cebola", qtd:"1 unidade grande picada"},
{nome:"Hortelã fresca", qtd:"3 colheres (sopa) picada"},
{nome:"Pimenta síria", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá) + a gosto"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Pinoli ou castanha", qtd:"50g para finalizar - opcional"},
{nome:"Água quente", qtd:"300ml para hidratar o trigo"}
],
passos:[
{texto:"Deixe o trigo de molho na água quente por 20 minutos. Escorra e esprema muito bem para tirar toda a água.", dica:"Espremido bem, senão o quibe fica mole e desmancha.", timer:20},
{texto:"Misture o trigo espremido com a carne, a cebola, a hortelã, a pimenta síria e o sal. Amasse bem por 3 minutos até ficar ligado.", dica:"Amasse bem, é isso que dá liga.", timer:3},
{texto:"Espalhe metade da massa em assadeira untada com azeite, apertando bem.", timer:0},
{texto:"Se quiser recheio, coloque uma camada de carne moída refogada no meio. Cubra com o restante da massa e alise.", timer:0},
{texto:"Risque a superfície em losangos com faca e regue com azeite. Polvilhe pinoli se usar.", dica:"Riscar ajuda a cortar depois e deixa o azeite entrar.", timer:0},
{texto:"Asse em forno preaquecido a 200°C por 30 minutos, até dourar por cima.", dica:"Sirva quente, com limão e tabule.", timer:30}
]
},
{
id:"babaganoush", titulo:"Babaganoush", categoria_principal:"Árabe", categorias:["Árabe","Entrada","Vegana"], tempo:"40 min", porcoes:"4 porções", foto:"assets/babaganoush.jpg",
ingredientes:[
{nome:"Berinjela", qtd:"2 unidades grandes"},
{nome:"Tahine", qtd:"2 colheres (sopa)"},
{nome:"Suco de limão", qtd:"suco de 1 unidade"},
{nome:"Alho", qtd:"1 dente pequeno"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Páprica defumada", qtd:"1 pitada"},
{nome:"Pão pita", qtd:"para servir"}
],
passos:[
{texto:"Fure as berinjelas com garfo e asse direto na boca do fogão ou em forno a 220°C por 25 minutos, virando de vez em quando, até murchar e ficar bem macia por dentro.", dica:"Queimar a casca de propósito é o que dá o defumado do babaganoush.", timer:25},
{texto:"Deixe amornar, abra e retire a polpa com colher, descartando a casca queimada.", timer:0},
{texto:"Pique a polpa grosseiramente e misture com tahine, limão, alho amassado, sal e azeite.", dica:"Não bata no processador, o babaganoush tem que ficar com pedacinhos.", timer:0},
{texto:"Coloque em prato, regue com azeite e polvilhe páprica.", dica:"Sirva em temperatura ambiente, com pão pita quentinho.", timer:0}
]
},
{
id:"labneh", titulo:"Labneh com Azeite", categoria_principal:"Árabe", categorias:["Árabe","Entrada","Café da Manhã"], tempo:"15 min + 12h de geladeira", porcoes:"6 porções", foto:"assets/labneh.jpg",
ingredientes:[
{nome:"Iogurte natural integral", qtd:"800g - sem açúcar"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Azeite de oliva", qtd:"para cobrir e regar"},
{nome:"Zaatar", qtd:"1 colher (sopa) para finalizar"},
{nome:"Hortelã fresca", qtd:"folhas para finalizar"},
{nome:"Pão pita", qtd:"para servir"}
],
passos:[
{texto:"Misture o iogurte com o sal.", timer:0},
{texto:"Coloque em pano de prato limpo sobre peneira, amarre e deixe escorrendo na geladeira por 12 horas, com uma tigela embaixo.", dica:"Quanto mais escorrer, mais firme fica. 12h é o mínimo.", timer:720},
{texto:"Retire o labneh firme do pano, coloque em prato e faça um buraco no centro.", timer:0},
{texto:"Regue generosamente com azeite, polvilhe zaatar e coloque hortelã.", dica:"Sirva gelado ou em temperatura ambiente, com pão pita e azeite por cima.", timer:0}
]
},
{
id:"shawarma-frango", titulo:"Shawarma de Frango", categoria_principal:"Árabe", categorias:["Árabe","Lanche"], tempo:"30 min + 30 min de marinada", porcoes:"4 porções", foto:"assets/shawarma-frango.jpg", airfryer:true,
ingredientes:[
{nome:"Peito de frango", qtd:"600g em filés"},
{nome:"Iogurte natural", qtd:"150g"},
{nome:"Suco de limão", qtd:"suco de 1 unidade"},
{nome:"Alho", qtd:"3 dentes amassados"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Páprica doce", qtd:"1 colher (chá)"},
{nome:"Cúrcuma", qtd:"1/2 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"},
{nome:"Pão pita", qtd:"4 unidades"},
{nome:"Molho de alho ou tahine", qtd:"para montar"},
{nome:"Picles", qtd:"para montar"}
],
passos:[
{texto:"Misture o iogurte, o limão, o alho, o cominho, a páprica, a cúrcuma, o sal e o azeite. Envolva o frango e deixe marinar por 30 minutos.", dica:"O iogurte amacia o frango e deixa suculento.", timer:30},
{texto:"Grelhe os filés em frigideira quente ou na Airfryer a 200°C por 12 minutos, virando na metade, até dourar e cozinhar por dentro.", timer:12},
{texto:"Deixe descansar 5 minutos e fatie fininho.", dica:"Descansar deixa o frango suculento, não corte na hora.", timer:5},
{texto:"Monte no pão pita com molho e picles.", dica:"Sirva quente, na hora. Monte só na hora para o pita não murchar.", timer:0}
]
},
{
id:"pao-pita-caseiro", titulo:"Pão Pita Caseiro", categoria_principal:"Árabe", categorias:["Árabe","Café da Manhã"], tempo:"70 min", porcoes:"8 unidades", foto:"assets/pao-pita-caseiro.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"400g"},
{nome:"Fermento biológico seco", qtd:"7g"},
{nome:"Açúcar", qtd:"1 colher (chá)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Água morna", qtd:"240ml"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"}
],
passos:[
{texto:"Misture a farinha, o fermento, o açúcar e o sal. Junte a água e o azeite e misture até formar uma massa.", timer:0},
{texto:"Sove por 8 minutos até ficar lisa e macia. Cubra e deixe crescer por 30 minutos.", timer:30},
{texto:"Divida em 8 bolinhas e abra cada uma em disco de 15cm, com cerca de 0,5cm de espessura.", dica:"Não abra fino demais, senão não infla e não forma o bolso.", timer:0},
{texto:"Asse em forno bem quente a 250°C por 5 minutos, até inflar e dourar levemente. Não deixe ressecar.", dica:"Forno tem que estar muito quente, é o choque térmico que faz inflar.", timer:5},
{texto:"Cubra com pano limpo assim que sair para não ressecar.", dica:"Sirva quente ou em temperatura ambiente. Cubra com pano para manter macio.", timer:0}
]
},
{
id:"fattoush", titulo:"Fattoush", categoria_principal:"Árabe", categorias:["Árabe","Salada","Vegana"], tempo:"20 min", porcoes:"4 porções", foto:"assets/fattoush.jpg",
ingredientes:[
{nome:"Alface", qtd:"1 pé picado"},
{nome:"Tomate", qtd:"3 unidades picadas"},
{nome:"Pepino", qtd:"1 unidade picada"},
{nome:"Rabanete", qtd:"4 unidades em rodelas finas"},
{nome:"Hortelã fresca", qtd:"1/2 xícara picada"},
{nome:"Salsinha", qtd:"1/2 xícara picada"},
{nome:"Pão pita", qtd:"1 unidade"},
{nome:"Sumac", qtd:"1 colher (sopa)"},
{nome:"Suco de limão", qtd:"suco de 1 unidade"},
{nome:"Azeite de oliva", qtd:"3 colheres (sopa)"},
{nome:"Sal", qtd:"1 colher (chá)"}
],
passos:[
{texto:"Torre o pão pita em forno ou Airfryer a 200°C por 5 minutos, até ficar crocante. Quebre em pedaços.", dica:"O pita tem que estar bem crocante, é ele que dá a graça da salada.", timer:5},
{texto:"Misture alface, tomate, pepino, rabanete, hortelã e salsinha em tigela grande.", timer:0},
{texto:"Tempere com sumac, limão, azeite e sal e misture.", timer:0},
{texto:"Jogue o pita crocante por cima só na hora de servir.", dica:"Sirva na hora. Se misturar antes, o pita murcha e perde a crocância.", timer:0}
]
},
{
id:"sopa-lentilha-arabe", titulo:"Sopa de Lentilha Árabe", categoria_principal:"Árabe", categorias:["Árabe","Sopa","Vegana"], tempo:"40 min", porcoes:"4 porções", foto:"assets/sopa-lentilha-arabe.jpg",
ingredientes:[
{nome:"Lentilha vermelha", qtd:"300g"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Cenoura", qtd:"1 unidade picada"},
{nome:"Alho", qtd:"2 dentes amassados"},
{nome:"Cominho", qtd:"1 colher (chá)"},
{nome:"Cúrcuma", qtd:"1/2 colher (chá)"},
{nome:"Água", qtd:"1 litro"},
{nome:"Azeite de oliva", qtd:"2 colheres (sopa)"},
{nome:"Suco de limão", qtd:"suco de 1 unidade"},
{nome:"Sal", qtd:"1 colher (chá)"}
],
passos:[
{texto:"Refogue a cebola e a cenoura no azeite por 5 minutos, até murchar.", timer:5},
{texto:"Junte o alho, o cominho e a cúrcuma e refogue por 1 minuto para soltar o aroma.", dica:"Fritar o tempero rapidinho solta muito mais aroma.", timer:1},
{texto:"Junte a lentilha e a água. Cozinhe em fogo médio por 25 minutos, até a lentilha desmanchar.", timer:25},
{texto:"Bata com mixer ou no liquidificador até ficar cremosa. Tempere com sal e limão.", dica:"O limão no final levanta o sabor, não pule.", timer:0},
{texto:"Regue com azeite e sirva.", dica:"Sirva quente, com pão pita e um fio de azeite.", timer:0}
]
},
{
id:"charuto-folha-uva", titulo:"Charuto de Folha de Uva", categoria_principal:"Árabe", categorias:["Árabe","Entrada"], tempo:"70 min", porcoes:"20 unidades", foto:"assets/charuto-folha-uva.jpg",
ingredientes:[
{nome:"Folha de uva em conserva", qtd:"20 folhas"},
{nome:"Arroz branco", qtd:"200g"},
{nome:"Tomate", qtd:"1 unidade picado sem sementes"},
{nome:"Cebola", qtd:"1/2 unidade picada"},
{nome:"Salsinha", qtd:"3 colheres (sopa) picada"},
{nome:"Hortelã fresca", qtd:"2 colheres (sopa) picada"},
{nome:"Suco de limão", qtd:"suco de 1 unidade + para regar"},
{nome:"Azeite de oliva", qtd:"4 colheres (sopa)"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Carne moída", qtd:"200g - opcional"}
],
passos:[
{texto:"Lave as folhas de uva em água corrente para tirar o excesso de sal e deixe escorrer.", dica:"Lavar bem tira o sal forte da conserva.", timer:0},
{texto:"Misture o arroz cru, o tomate, a cebola, a salsinha, a hortelã, o limão, metade do azeite, o sal e a carne se usar.", timer:0},
{texto:"Coloque 1 colher do recheio no centro de cada folha, com o lado brilhante para baixo. Dobre as laterais para dentro e enrole apertado como charuto.", dica:"Enrole apertado, o arroz cresce e pode abrir se ficar frouxo.", timer:0},
{texto:"Forre o fundo da panela com algumas folhas rasgadas, arrume os charutos bem juntinhos, com a emenda para baixo.", dica:"Bem juntinho evita que abram no cozimento.", timer:0},
{texto:"Regue com o restante do azeite, limão e cubra com água até quase cobrir. Coloque um prato por cima para pesar e cozinhe em fogo baixo por 35 minutos, até o arroz cozinhar.", dica:"O prato por cima segura os charutos e não deixa abrir.", timer:35},
{texto:"Deixe amornar na panela antes de tirar.", dica:"Sirva morno ou em temperatura ambiente, com limão e azeite.", timer:0}
]
},
{
id:"arroz-amendoas", titulo:"Arroz com Amêndoas", categoria_principal:"Árabe", categorias:["Árabe","Almoço"], tempo:"35 min", porcoes:"4 porções", foto:"assets/arroz-amendoas.jpg",
ingredientes:[
{nome:"Arroz basmati ou branco", qtd:"300g lavado"},
{nome:"Amêndoas laminadas", qtd:"80g"},
{nome:"Uva-passa", qtd:"50g"},
{nome:"Cebola", qtd:"1 unidade picada"},
{nome:"Canela em pau", qtd:"1 unidade"},
{nome:"Cardamomo", qtd:"3 bagas - opcional"},
{nome:"Manteiga", qtd:"2 colheres (sopa)"},
{nome:"Água quente", qtd:"600ml"},
{nome:"Sal", qtd:"1 colher (chá)"},
{nome:"Salsinha", qtd:"para finalizar"}
],
passos:[
{texto:"Torre as amêndoas em frigideira seca por 3 minutos, até dourar. Reserve.", dica:"Torre sem óleo e mexa sempre, queima rápido.", timer:3},
{texto:"Refogue a cebola na manteiga por 4 minutos, até dourar levemente. Junte a canela, o cardamomo e o arroz e refogue por 2 minutos.", timer:4},
{texto:"Junte a água quente, o sal e a uva-passa. Tampe e cozinhe em fogo baixo por 18 minutos, sem mexer.", dica:"Não mexa depois de tampar, senão empapa.", timer:18},
{texto:"Desligue, deixe descansar tampado por 5 minutos e solte com garfo.", timer:5},
{texto:"Cubra com as amêndoas torradas e salsinha.", dica:"Sirva quente, com as amêndoas crocantes por cima.", timer:0}
]
},
{
id:"baklava", titulo:"Baklava", categoria_principal:"Árabe", categorias:["Árabe","Doce"], tempo:"70 min", porcoes:"16 pedaços", foto:"assets/baklava.jpg",
ingredientes:[
{nome:"Massa filo", qtd:"300g - cerca de 20 folhas"},
{nome:"Pistache", qtd:"250g triturado"},
{nome:"Nozes", qtd:"100g trituradas - opcional"},
{nome:"Manteiga derretida", qtd:"200g"},
{nome:"Canela em pó", qtd:"1 colher (chá)"},
{nome:"Açúcar", qtd:"300g para a calda"},
{nome:"Água", qtd:"200ml para a calda"},
{nome:"Mel", qtd:"2 colheres (sopa) para a calda"},
{nome:"Suco de limão", qtd:"1 colher (sopa) para a calda"},
{nome:"Água de flor de laranjeira", qtd:"1 colher (chá) - opcional"}
],
passos:[
{texto:"Misture o pistache, as nozes e a canela.", timer:0},
{texto:"Pincele uma assadeira com manteiga. Coloque 10 folhas de massa filo, pincelando manteiga entre cada uma.", dica:"Cubra a massa que não está usando com pano úmido, ela resseca em minutos.", timer:0},
{texto:"Espalhe o recheio de pistache por cima.", timer:0},
{texto:"Cubra com as outras 10 folhas, pincelando manteiga entre cada uma. Pincele bem a última.", timer:0},
{texto:"Corte em losangos com faca afiada, antes de assar.", dica:"Corte antes de assar, depois de assada ela quebra.", timer:0},
{texto:"Asse em forno preaquecido a 180°C por 35 minutos, até dourar bem.", timer:35},
{texto:"Para a calda, ferva o açúcar, a água, o mel e o limão por 10 minutos. Despeje a calda fria sobre a baklava quente, assim que sair do forno.", dica:"Calda fria em baklava quente é o segredo para ficar crocante e não mole.", timer:10},
{texto:"Deixe esfriar por 2 horas antes de servir.", dica:"Sirva em temperatura ambiente, com pistache triturado por cima.", timer:120}
]
}
];
