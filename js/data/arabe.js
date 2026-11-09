// RECEITAS ÁRABE
// 1 - Esfiha Aberta de Carne
// 2 - Kafta Kebab na Brasa
// 3 - Homus Cremoso com Pão Pita
// 4 - Falafel Crocante na Airfryer
// 5 - Tabule Fresco
// 6 - Mujaddara - Arroz com Lentilha e Cebola Caramelizada
// 7 - Manakish de Zaatar
// TOTAL: 7 receitas
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
{texto:"Sove em bancada enfarinhada por 10 minutos, até ficar lisa, macia e não grudar nas mãos. Se precisar, adicione farinha aos poucos, sem exagerar para não ressecar.", timer:10},
{texto:"Volte para a tigela, cubra com um pano e deixe descansar em local abafado por 30 minutos, até dobrar de tamanho.", timer:30},
{texto:"Enquanto isso, refogue a cebola em um fio de azeite por 3 minutos, até ficar transparente. Junte a carne, tempere com sal e pimenta síria e refogue por 8 minutos, quebrando os pedaços, até secar bem a água.", timer:8},
{texto:"Desligue o fogo, junte o tomate, a hortelã e o limão. Misture e deixe esfriar completamente antes de usar.", dica:"Recheio quente deixa a massa úmida.", timer:0},
{texto:"Divida a massa em 10 bolinhas. Em bancada polvilhada, abra cada uma até um disco de cerca de 12cm, com a borda um pouco mais grossa que o centro.", timer:0},
{texto:"Coloque 1 colher e meia de recheio já frio no centro de cada disco, espalhando até quase a borda, sem fechar. Aperte levemente com as costas da colher para grudar.", timer:0},
{texto:"Coloque em forma untada ou com papel-manteiga, com espaço entre elas. Asse em forno ou Airfryer a 200°C por 12 minutos, até dourar nas bordas e o recheio ficar sequinho.", timer:12}
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
{texto:"Misture a carne com a cebola espremida, o alho, a hortelã, a salsinha, a pimenta síria, o cominho, o sal, a pimenta-do-reino e o azeite. Amasse com as mãos por 3 minutos, até ficar bem ligada e grudenta.", timer:3},
{texto:"Cubra e leve à geladeira por 15 minutos. Esse descanso deixa a carne mais firme e facilita modelar.", timer:15},
{texto:"Com as mãos úmidas, modele uma porção de carne em volta de cada espeto, apertando bem e formando um cilindro de cerca de 12cm. Repita até fazer os 6 espetos.", timer:0},
{texto:"Grelhe na brasa bem quente, ou na Airfryer a 200°C por 10 minutos, virando aos 5 minutos, até dourar por fora e ficar suculenta por dentro.", timer:10}
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
{texto:"Aqueça o pão pita no forno ou na Airfryer a 180°C por 3 minutos e corte em triângulos para mergulhar.", timer:3}
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
{texto:"Bata o grão-de-bico com a cebola, o alho, a salsinha, a hortelã, o cominho, o coentro e o sal no processador, pulsando até formar uma massa grossa com pedacinhos, não uma pasta lisa.", timer:0},
{texto:"Misture a farinha e o fermento, cubra e leve à geladeira por 15 minutos para firmar.", timer:15},
{texto:"Faça bolinhas do tamanho de uma noz, apertando bem para não rachar.", timer:0},
{texto:"Preaqueça a Airfryer a 200°C por 5 minutos. Coloque os falaféis no cesto sem encostar e borrife azeite.", timer:5},
{texto:"Asse a 200°C por 15 minutos, virando aos 8 minutos, até dourar e ficar crocante por fora.", timer:15}
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
{texto:"Deixe o trigo de molho em água por 15 minutos, depois escorra e esprema bem para tirar toda a água.", timer:15},
{texto:"Misture a salsinha, a hortelã, o tomate e a cebola em uma tigela grande.", timer:0},
{texto:"Junte o trigo espremido, o limão, o azeite e o sal e misture bem.", timer:0},
{texto:"Deixe na geladeira por 10 minutos para pegar sabor e sirva gelado.", timer:10}
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
{texto:"Cozinhe a lentilha em água com sal por 15 minutos, até ficar macia mas sem desmanchar. Escorra e reserve.", timer:15},
{texto:"Em uma panela grande, aqueça o azeite em fogo médio e frite a cebola por 15 minutos, mexendo de vez em quando, até ficar bem dourada e caramelizada. Retire metade e reserve.", timer:15},
{texto:"Na mesma panela com o restante da cebola, junte o arroz, o cominho e o sal e refogue por 2 minutos.", timer:2},
{texto:"Junte a lentilha cozida e a água, tampe e cozinhe em fogo baixo por 18 minutos, até o arroz secar e ficar soltinho. Não mexa depois que tampar.", timer:18},
{texto:"Desligue, deixe descansar tampado por 5 minutos, solte com um garfo e cubra com a cebola reservada e a salsinha.", timer:5}
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
{texto:"Asse em forno ou Airfryer a 200°C por 10 minutos, até a borda dourar e a base ficar firme.", timer:10}
]
}
];
