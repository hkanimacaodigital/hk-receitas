window.CATEGORIAS = [
{id:"airfryer", nome:"Airfryer", icone:"🍟"},
{id:"arabe", nome:"Árabe", icone:"🥙"},
{id:"brasileira", nome:"Brasileira", icone:"🇧🇷"},
{id:"cafe-da-manha", nome:"Café da Manhã", icone:"☕"},
{id:"caldo", nome:"Caldo", icone:"🍲"},
{id:"doce", nome:"Doce", icone:"🧁"},
{id:"fit", nome:"Fit", icone:"💪"},
{id:"italiana", nome:"Italiana", icone:"🍝"},
{id:"lanche", nome:"Lanche", icone:"🍔"},
{id:"mexicana", nome:"Mexicana", icone:"🌮"},
{id:"oriental", nome:"Oriental", icone:"🥢"},
{id:"rapida", nome:"Rápida", icone:"⚡"},
{id:"saudavel", nome:"Saudável", icone:"🥬"},
{id:"vegana", nome:"Vegana", icone:"🌱"}
];

window.RECEITAS = [
{
id:"karaage", titulo:"Karaage de Frango Crocante", categoria_principal:"Oriental", categorias:["Oriental"], tempo:"32 min", foto:"assets/karaage.jpg",
ingredientes:[
{nome:"Coxa de frango", qtd:"500g", kcal:440},
{nome:"Shoyu", qtd:"45ml", kcal:15},
{nome:"Alho", qtd:"2 dentes", kcal:8},
{nome:"Gengibre", qtd:"1 colher chá", kcal:5},
{nome:"Farinha de trigo", qtd:"50g", kcal:90},
{nome:"Amido", qtd:"50g", kcal:90}
],
passos:[
{texto:"Misture frango, shoyu, alho e gengibre. Deixe pegar sabor.", timer:0},
{texto:"Deixe marinando 20 min na geladeira.", timer:20, label:"Marinada"},
{texto:"Empane na mistura de farinhas e leve na Airfryer 180°C 13 min virando.", timer:13, label:"Karaage"}
]
},
{
id:"salmao-legumes", titulo:"Salmão Grelhado com Legumes", categoria_principal:"Saudável", categorias:["Saudável","Fit"], tempo:"20 min", foto:"assets/salmao.jpg",
ingredientes:[
{nome:"Salmão", qtd:"300g", kcal:280},
{nome:"Abobrinha", qtd:"1 unidade", kcal:25},
{nome:"Cenoura", qtd:"1 média", kcal:35}
],
passos:[
{texto:"Tempere salmão com limão, sal e pimenta 5 min.", timer:5},
{texto:"Airfryer 200°C 12 min com os legumes ao lado.", timer:12}
]
},
{
id:"esfiha-aberta", titulo:"Esfiha Aberta de Carne", categoria_principal:"Árabe", categorias:["Árabe","Lanche"], tempo:"50 min", foto:"assets/esfiha-aberta.jpg", airfryer:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"500g", kcal:1800},
{nome:"Fermento biológico", qtd:"10g", kcal:30},
{nome:"Carne moída", qtd:"300g", kcal:630},
{nome:"Cebola", qtd:"1 unidade", kcal:35},
{nome:"Tomate", qtd:"1 unidade", kcal:15},
{nome:"Hortelã", qtd:"10 folhas", kcal:2},
{nome:"Pimenta síria", qtd:"1 colher chá", kcal:8}
],
passos:[
{texto:"Misture farinha, fermento, açúcar, sal, água e azeite até massa lisa. Descanse 30 min.", timer:30},
{texto:"Refogue carne com cebola, depois junte tomate, hortelã e pimenta síria.", timer:0},
{texto:"Abra discos em formato de barquinho aberto, recheie.", timer:0},
{texto:"Forno ou Airfryer 200°C 12 min até dourar.", timer:12}
]
},
{
id:"kafta-kebab", titulo:"Kafta Kebab na Brasa", categoria_principal:"Árabe", categorias:["Árabe","Brasileira"], tempo:"25 min", foto:"assets/kafta-kebab.jpg", airfryer:true,
ingredientes:[
{nome:"Carne moída", qtd:"500g", kcal:750},
{nome:"Cebola", qtd:"1 grande", kcal:40},
{nome:"Hortelã", qtd:"2 colheres", kcal:3},
{nome:"Salsinha", qtd:"2 colheres", kcal:2},
{nome:"Pimenta síria", qtd:"1 colher chá", kcal:4},
{nome:"Cominho", qtd:"1 colher chá", kcal:4}
],
passos:[
{texto:"Misture carne, cebola espremida, ervas e temperos.", timer:0},
{texto:"Modele em espetos grossos.", timer:0},
{texto:"Grelhe na brasa ou Airfryer 200°C 10 min virando.", timer:10}
]
},
{
id:"coxinha-airfryer", titulo:"Coxinha de Frango na Airfryer", categoria_principal:"Airfryer", categorias:["Airfryer","Lanche","Brasileira"], tempo:"28 min", foto:"assets/coxinha-airfryer.jpg", airfryer:true,
ingredientes:[
{nome:"Leite integral", qtd:"480ml", kcal:150},
{nome:"Farinha de trigo", qtd:"240g", kcal:850},
{nome:"Frango desfiado", qtd:"300g", kcal:495},
{nome:"Farinha panko", qtd:"80g", kcal:280}
],
passos:[
{texto:"Ferva leite com manteiga e sal, jogue farinha de uma vez e mexa até desgrudar.", timer:0},
{texto:"Deixe massa esfriar, abra na mão, recheie com frango e modele coxinha.", timer:0},
{texto:"Passe no ovo e na panko, borrife azeite.", timer:0},
{texto:"Airfryer 200°C 18 min virando na metade.", timer:18}
]
},
{
id:"pao-queijo", titulo:"Pão de Queijo Mineiro", categoria_principal:"Lanche", categorias:["Lanche"], tempo:"15 min", foto:"assets/pao-queijo.jpg",
ingredientes:[
{nome:"Polvilho azedo", qtd:"200g", kcal:700},
{nome:"Queijo meia cura", qtd:"150g", kcal:450},
{nome:"Leite", qtd:"100ml", kcal:60},
{nome:"Ovo", qtd:"1 unidade", kcal:70}
],
passos:[
{texto:"Escalde polvilho com leite quente, junte queijo e ovo até massa lisa.", timer:0},
{texto:"Faça bolinhas de 30g.", timer:0},
{texto:"Airfryer 180°C 10 min até estufar.", timer:10}
]
},
{
id:"batata-rustica", titulo:"Batata Rústica com Alecrim", categoria_principal:"Saudável", categorias:["Saudável","Vegana"], tempo:"25 min", foto:"assets/batata-rustica.jpg",
ingredientes:[
{nome:"Batata", qtd:"400g", kcal:260},
{nome:"Alecrim", qtd:"1 ramo", kcal:2}
],
passos:[
{texto:"Corte em gomos, tempere com azeite, sal e alecrim.", timer:0},
{texto:"Airfryer 200°C 18 min mexendo na metade.", timer:18}
]
},
{
id:"churros", titulo:"Churros com Doce de Leite", categoria_principal:"Doce", categorias:["Doce"], tempo:"18 min", foto:"assets/churros.jpg",
ingredientes:[
{nome:"Farinha de trigo", qtd:"120g", kcal:430},
{nome:"Açúcar", qtd:"100g", kcal:400},
{nome:"Canela", qtd:"1 colher chá", kcal:5},
{nome:"Doce de leite", qtd:"200g", kcal:600}
],
passos:[
{texto:"Ferva água com manteiga, jogue farinha e mexa até desgrudar.", timer:0},
{texto:"Modele tirinhas de 10cm.", timer:0},
{texto:"Airfryer 180°C 8 min até dourar, passe no açúcar com canela.", timer:8}
]
},
{
id:"feijoada-completa", titulo:"Feijoada Completa da Casa", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"180 min", foto:"assets/feijoada-completa.jpg",
ingredientes:[
{nome:"Feijão preto", qtd:"500g", kcal:1500},
{nome:"Linguiça calabresa", qtd:"200g", kcal:700},
{nome:"Paio", qtd:"100g", kcal:350},
{nome:"Costela defumada", qtd:"100g", kcal:400},
{nome:"Bacon", qtd:"100g", kcal:400},
{nome:"Louro", qtd:"2 folhas", kcal:0},
{nome:"Alho", qtd:"3 dentes", kcal:12}
],
passos:[
{texto:"Deixe feijão de molho 12h. Cozinhe 40 min na pressão.", timer:40},
{texto:"Doure carnes e linguiças, junte ao feijão com louro.", timer:0},
{texto:"Cozinhe mais 60 min em fogo baixo até engrossar.", timer:60}
]
},
{
id:"moqueca-baiana", titulo:"Moqueca Baiana de Peixe", categoria_principal:"Brasileira", categorias:["Brasileira","Saudável"], tempo:"35 min", foto:"assets/moqueca-baiana.jpg",
ingredientes:[
{nome:"Robalo", qtd:"800g", kcal:700},
{nome:"Leite de coco", qtd:"200ml", kcal:300},
{nome:"Azeite de dendê", qtd:"30ml", kcal:180},
{nome:"Pimentão amarelo", qtd:"50g", kcal:15},
{nome:"Cebola roxa", qtd:"100g", kcal:35},
{nome:"Tomate", qtd:"150g", kcal:25},
{nome:"Coentro", qtd:"a gosto", kcal:5},
{nome:"Limão", qtd:"1 unidade", kcal:5}
],
passos:[
{texto:"Tempere peixe com limão, alho e sal 15 min.", timer:15},
{texto:"Na panela de barro, faça camadas de cebola, pimentão, tomate e peixe.", timer:0},
{texto:"Regue com leite coco e dendê, cozinhe tampado 20 min sem mexer.", timer:20}
]
},
{
id:"bobo-camarao", titulo:"Bobó de Camarão Cremoso", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"40 min", foto:"assets/bobo-camarao.jpg",
ingredientes:[
{nome:"Camarão", qtd:"500g", kcal:350},
{nome:"Mandioca", qtd:"500g", kcal:600},
{nome:"Leite de coco", qtd:"200ml", kcal:300},
{nome:"Azeite de dendê", qtd:"15ml", kcal:90},
{nome:"Pimentão amarelo", qtd:"1/2 unidade", kcal:15},
{nome:"Tomate", qtd:"1 médio", kcal:15},
{nome:"Coentro", qtd:"a gosto", kcal:2}
],
passos:[
{texto:"Cozinhe mandioca até desmanchar, bata com leite coco virando purê liso.", timer:0},
{texto:"Refogue pimentão, cebola, tomate. Junte camarão 5 min até ficar rosa.", timer:5},
{texto:"Misture purê, acerte dendê, coentro e pimenta. Ferva 5 min.", timer:5}
]
},
{
id:"pao-chapa-cremoso", titulo:"Pão na Chapa Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Lanche","Rápida"], tempo:"10 min", foto:"assets/pao-chapa-cremoso.jpg",
ingredientes:[
{nome:"Pão francês", qtd:"2 unidades", kcal:140},
{nome:"Manteiga", qtd:"30g", kcal:220},
{nome:"Muçarela", qtd:"60g", kcal:180},
{nome:"Orégano", qtd:"1 pitada", kcal:2}
],
passos:[
{texto:"Passe manteiga generosa nos dois lados do pão.", timer:0},
{texto:"Chapa quente, doure 2 min cada lado com muçarela dentro até derreter.", timer:4},
{texto:"Finalize com orégano e sirva estalando.", timer:0}
]
},
{
id:"tapioca-frango-cremoso", titulo:"Tapioca de Frango Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Saudável"], tempo:"15 min", foto:"assets/tapioca-frango.jpg",
ingredientes:[
{nome:"Goma de tapioca", qtd:"80g", kcal:110},
{nome:"Frango desfiado", qtd:"150g", kcal:165},
{nome:"Requeijão light", qtd:"40g", kcal:55},
{nome:"Tomate", qtd:"15g", kcal:4},
{nome:"Cheiro verde", qtd:"15g", kcal:4}
],
passos:[
{texto:"Peneire a goma na frigideira quente formando disco. 2 min cada lado.", timer:4},
{texto:"Recheie com frango misturado com requeijão, tomate e cheiro verde.", timer:0},
{texto:"Dobre e sirva quente.", timer:0}
]
},
{
id:"ovos-mexidos-turbinado", titulo:"Ovos Mexidos Turbinado", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Rápida"], tempo:"8 min", foto:"assets/ovos-mexidos-turbinado.jpg",
ingredientes:[
{nome:"Ovos", qtd:"3 un", kcal:210},
{nome:"Manteiga", qtd:"15g", kcal:110},
{nome:"Creme de leite", qtd:"30g", kcal:45},
{nome:"Cebolinha", qtd:"a gosto", kcal:3}
],
passos:[
{texto:"Bata ovos levemente com sal, pimenta e creme de leite.", timer:0},
{texto:"Manteiga derretida fogo baixo, mexa sem parar 3 min até ficar cremoso.", timer:3},
{texto:"Desligue ainda mole, finalize com cebolinha.", timer:0}
]
},
{
id:"caldo-verde-tradicional", titulo:"Caldo Verde Tradicional", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"35 min", foto:"assets/caldo-verde.jpg",
ingredientes:[
{nome:"Batata asterix", qtd:"500g", kcal:320},
{nome:"Linguiça calabresa", qtd:"200g", kcal:520},
{nome:"Couve", qtd:"100g", kcal:35},
{nome:"Cebola", qtd:"50g", kcal:20},
{nome:"Alho", qtd:"3 dentes", kcal:12}
],
passos:[
{texto:"Cozinhe batatas em 1L água com sal até desmanchar. Bata metade virando creme.", timer:20},
{texto:"Refogue calabresa até dourar, adicione alho e cebola.", timer:5},
{texto:"Junte creme, batatas em pedaços e couve. Ferva 5 min.", timer:5}
]
},
{
id:"caldo-abobora-frango", titulo:"Caldo de Abóbora com Frango", categoria_principal:"Caldo", categorias:["Caldo","Fit","Saudável"], tempo:"30 min", foto:"assets/caldo-abobora-frango.jpg",
ingredientes:[
{nome:"Abóbora cabotiá", qtd:"500g", kcal:200},
{nome:"Frango desfiado", qtd:"200g", kcal:220},
{nome:"Leite de coco", qtd:"100ml", kcal:40},
{nome:"Gengibre", qtd:"10g", kcal:5},
{nome:"Alho", qtd:"1 dente", kcal:4}
],
passos:[
{texto:"Cozinhe abóbora com gengibre e alho em 800ml água até macia.", timer:18},
{texto:"Bata no liquidificador com leite de coco até creme liso.", timer:0},
{texto:"Volte pra panela, junte frango desfiado, acerte sal e ferva 5 min.", timer:5}
]
},
{
id:"caldo-feijao-bacon", titulo:"Caldo de Feijão com Bacon", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"40 min", foto:"assets/caldo-feijao-bacon.jpg",
ingredientes:[
{nome:"Feijão carioca", qtd:"400g", kcal:280},
{nome:"Bacon", qtd:"100g", kcal:430},
{nome:"Cebola", qtd:"40g", kcal:15},
{nome:"Alho", qtd:"3 dentes", kcal:12},
{nome:"Couve", qtd:"50g", kcal:12}
],
passos:[
{texto:"Frite bacon até dourar e soltar gordura. Reserve metade.", timer:6},
{texto:"Na mesma gordura refogue cebola e alho, junte feijão com caldo e bata 1/2 no mixer.", timer:0},
{texto:"Misture tudo, ferva 10 min até engrossar.", timer:10}
]
},
{
id:"pudim-leite-condensado", titulo:"Pudim de Leite Condensado", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"90 min", foto:"assets/pudim-leite.jpg", airfryer:true,
ingredientes:[
{nome:"Leite condensado", qtd:"395g", kcal:1264},
{nome:"Leite integral", qtd:"600ml", kcal:360},
{nome:"Ovos", qtd:"3 un", kcal:210},
{nome:"Açúcar", qtd:"200g", kcal:780}
],
passos:[
{texto:"Derreta açúcar até caramelo âmbar, espalhe na forma e deixe esfriar.", timer:8},
{texto:"Bata leite condensado, leite e ovos só até misturar.", timer:0},
{texto:"Despeje na forma caramelada, cubra com alumínio.", timer:0},
{texto:"Asse em banho-maria 200°C 60 min ou Airfryer 160°C 40 min. Geladeira 4h.", timer:60}
]
},
{
id:"pave-pacoca-cremoso", titulo:"Pavê de Paçoca Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"30 min", foto:"assets/pave-pacoca.jpg",
ingredientes:[
{nome:"Leite condensado", qtd:"395g", kcal:1264},
{nome:"Leite", qtd:"500ml", kcal:300},
{nome:"Amido", qtd:"40g", kcal:20},
{nome:"Paçoca", qtd:"120g", kcal:540},
{nome:"Bolacha maisena", qtd:"200g", kcal:860}
],
passos:[
{texto:"Leite condensado, leite e amido fogo médio mexendo até creme grosso. Misture 4 paçocas.", timer:10},
{texto:"Travessa: creme, bolacha, creme, bolacha até acabar.", timer:0},
{texto:"Finalize com creme e 2 paçocas esfareladas por cima. Geladeira 3h.", timer:180}
]
},
{
id:"frango-grelhado-fit", titulo:"Frango Grelhado Fit com Legumes", categoria_principal:"Fit", categorias:["Fit","Saudável","Brasileira"], tempo:"20 min", foto:"assets/frango-grelhado-fit.jpg", airfryer:true,
ingredientes:[
{nome:"Peito de frango", qtd:"300g", kcal:495},
{nome:"Abobrinha", qtd:"100g", kcal:25},
{nome:"Cenoura", qtd:"100g", kcal:30},
{nome:"Azeite", qtd:"15ml", kcal:135},
{nome:"Limão", qtd:"1 unidade", kcal:5}
],
passos:[
{texto:"Tempere frango com limão, alho, sal e pimenta 10 min.", timer:10},
{texto:"Grelhe 5 min cada lado até dourar.", timer:10},
{texto:"Salteie legumes rapidamente no azeite 3 min al dente.", timer:3}
]
},
{
id:"salada-proteica-tunada", titulo:"Salada Proteica Tunada", categoria_principal:"Fit", categorias:["Fit","Saudável","Rápida"], tempo:"15 min", foto:"assets/salada-proteica.jpg",
ingredientes:[
{nome:"Frango desfiado", qtd:"150g", kcal:220},
{nome:"Mix de folhas", qtd:"60g", kcal:15},
{nome:"Abacate", qtd:"80g", kcal:128},
{nome:"Ovo", qtd:"1 unidade", kcal:70},
{nome:"Tomate", qtd:"50g", kcal:8},
{nome:"Quinoa", qtd:"60g", kcal:70}
],
passos:[
{texto:"Misture folhas, tomate, quinoa, frango e abacate.", timer:0},
{texto:"Tempere com limão, azeite e sal. Finalize com ovo cozido.", timer:0}
]
},
{
id:"wrap-fit-frango", titulo:"Wrap Fit de Frango", categoria_principal:"Fit", categorias:["Fit","Lanche","Saudável"], tempo:"12 min", foto:"assets/wrap-fit.jpg",
ingredientes:[
{nome:"Tortilha integral", qtd:"40g", kcal:110},
{nome:"Frango grelhado", qtd:"100g", kcal:165},
{nome:"Guacamole", qtd:"40g", kcal:55},
{nome:"Alface", qtd:"20g", kcal:3},
{nome:"Tomate", qtd:"20g", kcal:4},
{nome:"Cenoura", qtd:"20g", kcal:8}
],
passos:[
{texto:"Aqueça tortilha 1 min.", timer:1},
{texto:"Recheie com guacamole, frango e salada, enrole firme.", timer:0}
]
},
{
id:"lasanha-bolonhesa-caseira", titulo:"Lasanha Bolonhesa Caseira", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"60 min", foto:"assets/lasanha-bolonhesa.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"500g", kcal:650},
{nome:"Massa para lasanha", qtd:"200g", kcal:700},
{nome:"Molho de tomate", qtd:"400g", kcal:200},
{nome:"Muçarela", qtd:"300g", kcal:900},
{nome:"Cebola", qtd:"1 unidade", kcal:15},
{nome:"Alho", qtd:"1 dente", kcal:4},
{nome:"Manjericão", qtd:"a gosto", kcal:5}
],
passos:[
{texto:"Refogue cebola, alho, carne, junte molho e manjericão. Cozinhe 15 min.", timer:15},
{texto:"Monte: molho, massa, molho, muçarela repetindo.", timer:0},
{texto:"Finalize com muçarela e forno 200°C 25 min até borbulhar.", timer:25}
]
},
{
id:"carbonara-cremosa", titulo:"Carbonara Cremosa Original", categoria_principal:"Italiana", categorias:["Italiana","Rápida"], tempo:"20 min", foto:"assets/carbonara-cremosa.jpg",
ingredientes:[
{nome:"Espaguete", qtd:"200g", kcal:700},
{nome:"Bacon", qtd:"150g", kcal:645},
{nome:"Ovos", qtd:"80g", kcal:180},
{nome:"Parmesão", qtd:"50g", kcal:180}
],
passos:[
{texto:"Cozinhe espaguete al dente. Reserve 1 concha água massa.", timer:10},
{texto:"Frite bacon até dourar e crocante.", timer:6},
{texto:"Fora fogo, misture massa quente com ovos, parmesão e água do cozimento até creme brilhante.", timer:0}
]
},
{
id:"risoto-funghi-cremoso", titulo:"Risoto de Funghi Cremoso", categoria_principal:"Italiana", categorias:["Italiana"], tempo:"35 min", foto:"assets/risoto-funghi.jpg",
ingredientes:[
{nome:"Arroz arbóreo", qtd:"200g", kcal:700},
{nome:"Funghi", qtd:"200g", kcal:60},
{nome:"Caldo de legumes", qtd:"1L", kcal:20},
{nome:"Manteiga", qtd:"50g", kcal:350},
{nome:"Parmesão", qtd:"50g", kcal:100}
],
passos:[
{texto:"Refogue funghi com alho até dourar. Reserve.", timer:6},
{texto:"Na mesma panela refogue cebola, junte arroz, vinho branco e vá adicionando caldo quente mexendo 18 min.", timer:18},
{texto:"Desligue, manteiga gelada e parmesão, mexa vigoroso até cremoso. Volte funghi.", timer:0}
]
},
{
id:"misto-quente-airfryer", titulo:"Misto Quente de Airfryer", categoria_principal:"Lanche", categorias:["Lanche","Rápida","Airfryer"], tempo:"8 min", foto:"assets/misto-quente-airfryer.jpg", airfryer:true,
ingredientes:[
{nome:"Pão de forma", qtd:"60g", kcal:150},
{nome:"Muçarela", qtd:"40g", kcal:120},
{nome:"Presunto", qtd:"40g", kcal:60},
{nome:"Manteiga", qtd:"10g", kcal:73}
],
passos:[
{texto:"Monte misto, pincele manteiga fora.", timer:0},
{texto:"Airfryer 180°C 5 min virando na metade até dourar e queijo esticar.", timer:5}
]
},
{
id:"pastel-forno-queijo", titulo:"Pastel de Forno de Queijo", categoria_principal:"Lanche", categorias:["Lanche","Airfryer","Brasileira"], tempo:"30 min", foto:"assets/pastel-forno.jpg", airfryer:true,
ingredientes:[
{nome:"Massa de pastel", qtd:"300g", kcal:750},
{nome:"Muçarela", qtd:"200g", kcal:600},
{nome:"Gema", qtd:"20g", kcal:55},
{nome:"Orégano", qtd:"5g", kcal:2},
{nome:"Tomate seco", qtd:"15g", kcal:10}
],
passos:[
{texto:"Corte discos, recheie com queijo, feche apertando com garfo.", timer:0},
{texto:"Pincele gema, orégano.", timer:0},
{texto:"Forno ou Airfryer 200°C 12 min até dourar e estufar.", timer:12}
]
},
{
id:"coxinha-creme-frango", titulo:"Coxinha com Catupiry Cremosa", categoria_principal:"Lanche", categorias:["Lanche","Brasileira","Airfryer"], tempo:"50 min", foto:"assets/coxinha-creme.jpg", airfryer:true,
ingredientes:[
{nome:"Frango desfiado", qtd:"300g", kcal:330},
{nome:"Farinha de trigo", qtd:"240g", kcal:800},
{nome:"Leite", qtd:"400ml", kcal:240},
{nome:"Catupiry", qtd:"100g", kcal:250},
{nome:"Farinha panko", qtd:"100g", kcal:350}
],
passos:[
{texto:"Leite, caldo, manteiga ferver, jogue farinha de uma vez mexendo até desgrudar.", timer:5},
{texto:"Sove massa quente, abra, recheie frango com catupiry, modele coxinha.", timer:0},
{texto:"Passe leite e panko, Airfryer 200°C 12 min ou frite.", timer:12}
]
},
{
id:"tacos-carne-mexicana", titulo:"Tacos de Carne Mexicana", categoria_principal:"Mexicana", categorias:["Mexicana","Rápida"], tempo:"20 min", foto:"assets/tacos-carne-mexicana.jpg",
ingredientes:[
{nome:"Carne moída", qtd:"300g", kcal:450},
{nome:"Tortilha de milho", qtd:"120g", kcal:240},
{nome:"Alface", qtd:"50g", kcal:8},
{nome:"Tomate", qtd:"50g", kcal:8},
{nome:"Cebola roxa", qtd:"50g", kcal:15},
{nome:"Queijo cheddar", qtd:"50g", kcal:200}
],
passos:[
{texto:"Refogue carne com páprica, cominho, sal e pimenta até dourar e secar.", timer:8},
{texto:"Aqueça tortilhas 1 min na frigideira.", timer:0},
{texto:"Monte com carne, salada e cheddar por cima.", timer:0}
]
},
{
id:"burrito-frango", titulo:"Burrito de Frango Cremoso", categoria_principal:"Mexicana", categorias:["Mexicana","Lanche"], tempo:"25 min", foto:"assets/burrito-frango.jpg", airfryer:true,
ingredientes:[
{nome:"Peito de frango", qtd:"300g", kcal:330},
{nome:"Tortilha", qtd:"140g", kcal:320},
{nome:"Feijão", qtd:"100g", kcal:90},
{nome:"Requeijão", qtd:"40g", kcal:80},
{nome:"Milho", qtd:"40g", kcal:30},
{nome:"Pimentão", qtd:"40g", kcal:10}
],
passos:[
{texto:"Grelhe frango temperado 8 min até dourar.", timer:8},
{texto:"Misture feijão, requeijão, milho e pimentão.", timer:0},
{texto:"Recheie tortilha, enrole burrito e doure 3 min na chapa.", timer:3}
]
},
{
id:"quesadilla-queijo", titulo:"Quesadilla de Queijo com Salsa", categoria_principal:"Mexicana", categorias:["Mexicana","Rápida","Lanche"], tempo:"12 min", foto:"assets/quesadilla-queijo.jpg",
ingredientes:[
{nome:"Tortilha", qtd:"2 unidades", kcal:320},
{nome:"Muçarela", qtd:"120g", kcal:360},
{nome:"Tomate", qtd:"80g", kcal:15},
{nome:"Coentro", qtd:"a gosto", kcal:3},
{nome:"Limão", qtd:"1 unidade", kcal:5}
],
passos:[
{texto:"Recheie uma tortilha com muçarela e tomate, cubra com a outra.", timer:0},
{texto:"Frigideira sem óleo 4 min cada lado até queijo derreter e ficar dourada.", timer:8},
{texto:"Corte em triângulos e sirva com limão.", timer:0}
]
},
{
id:"yakisoba-frango", titulo:"Yakisoba de Frango Rápido", categoria_principal:"Oriental", categorias:["Oriental","Rápida"], tempo:"22 min", foto:"assets/yakisoba-frango.jpg",
ingredientes:[
{nome:"Macarrão para yakisoba", qtd:"200g", kcal:700},
{nome:"Peito de frango", qtd:"250g", kcal:275},
{nome:"Repolho", qtd:"100g", kcal:25},
{nome:"Cenoura", qtd:"50g", kcal:15},
{nome:"Brócolis", qtd:"100g", kcal:35},
{nome:"Shoyu", qtd:"45ml", kcal:15},
{nome:"Óleo de gergelim", qtd:"5ml", kcal:40}
],
passos:[
{texto:"Cozinhe macarrão 5 min al dente, escorra.", timer:5},
{texto:"Wok bem quente, salteie frango 6 min, junte legumes 4 min.", timer:10},
{texto:"Misture macarrão e shoyu, salteie 2 min.", timer:2}
]
},
{
id:"tempura-legumes", titulo:"Tempurá de Legumes Crocante", categoria_principal:"Oriental", categorias:["Oriental","Vegana","Rápida"], tempo:"20 min", foto:"assets/tempura-legumes.jpg", airfryer:true,
ingredientes:[
{nome:"Abobrinha", qtd:"100g", kcal:30},
{nome:"Cenoura", qtd:"100g", kcal:30},
{nome:"Brócolis", qtd:"100g", kcal:30},
{nome:"Farinha de trigo", qtd:"30g", kcal:105},
{nome:"Amido", qtd:"30g", kcal:105},
{nome:"Água com gás", qtd:"150ml", kcal:0},
{nome:"Shoyu", qtd:"30ml", kcal:15}
],
passos:[
{texto:"Misture farinhas com água gelada até massa rala e com grumos.", timer:0},
{texto:"Passe legumes na massa.", timer:0},
{texto:"Airfryer 200°C 10 min borrifando azeite até dourar.", timer:10}
]
},
{
id:"ramen-cremoso", titulo:"Ramen Cremoso de Frango", categoria_principal:"Oriental", categorias:["Oriental","Caldo"], tempo:"30 min", foto:"assets/ramen-cremoso.jpg",
ingredientes:[
{nome:"Macarrão instantâneo", qtd:"90g", kcal:350},
{nome:"Caldo de frango", qtd:"500ml", kcal:30},
{nome:"Ovo", qtd:"1 unidade", kcal:70},
{nome:"Frango desfiado", qtd:"50g", kcal:80},
{nome:"Cebolinha", qtd:"10g", kcal:3},
{nome:"Nori", qtd:"1 folha", kcal:5}
],
passos:[
{texto:"Ferva caldo, cozinhe macarrão 4 min dentro do caldo.", timer:4},
{texto:"Sirva com frango, ovo cortado ao meio, cebolinha e nori.", timer:0}
]
},
{
id:"omelete-rapido", titulo:"Omelete de Forno Rápido", categoria_principal:"Rápida", categorias:["Rápida","Café da Manhã","Fit"], tempo:"12 min", foto:"assets/omelete-rapido.jpg", airfryer:true,
ingredientes:[
{nome:"Ovos", qtd:"3 un", kcal:210},
{nome:"Tomate", qtd:"40g", kcal:10},
{nome:"Muçarela", qtd:"40g", kcal:90},
{nome:"Cheiro verde", qtd:"5g", kcal:2}
],
passos:[
{texto:"Bata ovos, misture recheio.", timer:0},
{texto:"Frigideira antiaderente ou Airfryer 180°C 8 min.", timer:8}
]
},
{
id:"macarrao-alho-15min", titulo:"Macarrão Alho e Óleo 15min", categoria_principal:"Rápida", categorias:["Rápida","Italiana"], tempo:"15 min", foto:"assets/macarrao-alho-15min.jpg",
ingredientes:[
{nome:"Espaguete", qtd:"200g", kcal:700},
{nome:"Alho", qtd:"4 dentes", kcal:16},
{nome:"Azeite", qtd:"30ml", kcal:180},
{nome:"Pimenta calabresa", qtd:"1 pitada", kcal:2}
],
passos:[
{texto:"Cozinhe macarrão al dente.", timer:9},
{texto:"Doure alho no azeite 2 min sem queimar, junte macarrão com 1 concha da água do cozimento.", timer:2}
]
},
{
id:"tapioca-doce-rapida", titulo:"Tapioca Doce de Leite Ninho", categoria_principal:"Rápida", categorias:["Rápida","Doce"], tempo:"8 min", foto:"assets/tapioca-doce-rapida.jpg",
ingredientes:[
{nome:"Goma de tapioca", qtd:"80g", kcal:110},
{nome:"Leite ninho", qtd:"20g", kcal:80},
{nome:"Leite condensado", qtd:"20g", kcal:64},
{nome:"Morango", qtd:"50g", kcal:16}
],
passos:[
{texto:"Faça disco de tapioca 2 min cada lado.", timer:4},
{texto:"Recheie com leite ninho, leite condensado e morango.", timer:0}
]
},
{
id:"bowl-quinoa-colorido", titulo:"Bowl de Quinoa Colorido", categoria_principal:"Saudável", categorias:["Saudável","Vegana","Fit"], tempo:"20 min", foto:"assets/bowl-quinoa-colorido.jpg",
ingredientes:[
{nome:"Quinoa", qtd:"150g", kcal:180},
{nome:"Grão de bico", qtd:"80g", kcal:100},
{nome:"Abacate", qtd:"50g", kcal:80},
{nome:"Tomate cereja", qtd:"50g", kcal:12},
{nome:"Pepino", qtd:"50g", kcal:8}
],
passos:[
{texto:"Cozinhe quinoa 12 min.", timer:12},
{texto:"Monte bowl com quinoa, grão bico, abacate, tomate e pepino. Tempere com limão.", timer:0}
]
},
{
id:"sopa-detox-verde", titulo:"Sopa Detox Verde", categoria_principal:"Saudável", categorias:["Saudável","Vegana","Caldo"], tempo:"25 min", foto:"assets/sopa-detox-verde.jpg",
ingredientes:[
{nome:"Abobrinha", qtd:"200g", kcal:30},
{nome:"Couve", qtd:"100g", kcal:35},
{nome:"Ervilha", qtd:"80g", kcal:70},
{nome:"Gengibre", qtd:"10g", kcal:5},
{nome:"Alho", qtd:"1 dente", kcal:4}
],
passos:[
{texto:"Refogue alho e gengibre, junte legumes e 600ml água. Cozinhe 15 min.", timer:15},
{texto:"Bata metade para ficar cremosa com pedaços.", timer:0}
]
},
{
id:"frango-grelhado-legumes", titulo:"Frango Grelhado com Legumes", categoria_principal:"Saudável", categorias:["Saudável","Fit","Rápida"], tempo:"18 min", foto:"assets/frango-grelhado-legumes.jpg", airfryer:true,
ingredientes:[
{nome:"Peito de frango", qtd:"300g", kcal:330},
{nome:"Abobrinha", qtd:"100g", kcal:25},
{nome:"Cenoura", qtd:"100g", kcal:25},
{nome:"Azeite", qtd:"15ml", kcal:90},
{nome:"Limão", qtd:"1/2 unidade", kcal:5}
],
passos:[
{texto:"Tempere frango com limão, sal e pimenta.", timer:0},
{texto:"Grelhe frango 6 min cada lado e legumes junto. Airfryer 200°C 12 min.", timer:12}
]
},
{
id:"curry-grao-bico", titulo:"Curry de Grão de Bico Cremoso", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"28 min", foto:"assets/curry-grao-bico.jpg",
ingredientes:[
{nome:"Grão de bico", qtd:"250g", kcal:280},
{nome:"Leite de coco", qtd:"200ml", kcal:300},
{nome:"Curry", qtd:"1 colher chá", kcal:4},
{nome:"Cúrcuma", qtd:"1 colher chá", kcal:4},
{nome:"Tomate pelado", qtd:"200g", kcal:40}
],
passos:[
{texto:"Refogue cebola, alho, curry e cúrcuma 2 min.", timer:2},
{texto:"Junte grão bico, tomate e leite coco, ferva 15 min até engrossar.", timer:15}
]
},
{
id:"hamburguer-lentilha", titulo:"Hambúrguer de Lentilha", categoria_principal:"Vegana", categorias:["Vegana","Lanche","Saudável"], tempo:"30 min", foto:"assets/hamburguer-lentilha.jpg", airfryer:true,
ingredientes:[
{nome:"Lentilha", qtd:"200g", kcal:230},
{nome:"Aveia", qtd:"40g", kcal:140},
{nome:"Cebola roxa", qtd:"50g", kcal:15},
{nome:"Alho", qtd:"1 dente", kcal:5},
{nome:"Cominho", qtd:"1 colher chá", kcal:3},
{nome:"Páprica", qtd:"1 colher chá", kcal:3}
],
passos:[
{texto:"Processe lentilha, aveia, cebola, alho e temperos até massa moldável.", timer:0},
{texto:"Modele 4 hambúrgueres.", timer:0},
{texto:"Airfryer 200°C 12 min virando, ou frigideira 4 min cada lado.", timer:12}
]
},
{
id:"brownie-vegano", titulo:"Brownie Vegano de Chocolate", categoria_principal:"Vegana", categorias:["Vegana","Doce"], tempo:"28 min", foto:"assets/brownie-vegano.jpg", airfryer:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"120g", kcal:430},
{nome:"Cacau", qtd:"30g", kcal:90},
{nome:"Açúcar mascavo", qtd:"100g", kcal:380},
{nome:"Óleo", qtd:"60ml", kcal:500},
{nome:"Água", qtd:"120ml", kcal:0}
],
passos:[
{texto:"Misture secos, junte óleo e água até massa grossa brilhante.", timer:0},
{texto:"Forma 20cm forrada, Airfryer 160°C 18 min ou forno 180°C 22 min - centro úmido.", timer:18},
{texto:"Deixe esfriar 20 min para firmar.", timer:20}
]
}
];
