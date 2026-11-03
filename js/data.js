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
id:"karaage", titulo:"Karaage de Frango Crocante", categoria_principal:"Oriental", categorias:["Oriental"], tempo:"32 min", foto:"assets/karaage.jpg", personalizada:false,
ingredientes:[
{nome:"Coxa de frango em cubos", qtd:"500g (2 xícaras)", kcal:440, beneficio:"Suculência"},
{nome:"Shoyu", qtd:"3 colheres sopa (45ml)", kcal:15, beneficio:"Umami"},
{nome:"Alho amassado", qtd:"2 dentes", kcal:8, beneficio:"Aroma"},
{nome:"Gengibre ralado", qtd:"1 colher chá", kcal:5, beneficio:"Perfume"},
{nome:"Farinha de trigo + amido", qtd:"1 xícara (100g)", kcal:180, beneficio:"Crocância"}
],
passos:[
{texto:"Misture frango, shoyu, alho e gengibre. Deixe pegar sabor.", timer:0},
{texto:"Deixe marinando 20 min na geladeira.", timer:20, label:"Marinada"},
{texto:"Empane na mistura de farinhas e leve na Airfryer 180°C 13 min virando.", timer:13, label:"Karaage"}
]
},
{
id:"salmao-legumes", titulo:"Salmão Grelhado com Legumes", categoria_principal:"Saudável", categorias:["Saudável","Fit"], tempo:"20 min", foto:"assets/salmao.jpg", personalizada:false,
ingredientes:[
{nome:"Filé de salmão", qtd:"2 filés (300g)", kcal:280, beneficio:"Ômega-3"},
{nome:"Abobrinha em cubos", qtd:"1 unidade (150g)", kcal:25, beneficio:"Fibras"},
{nome:"Cenoura em rodelas", qtd:"1 média (100g)", kcal:35, beneficio:"Vitamina A"},
{nome:"Azeite", qtd:"1 colher sopa", kcal:90, beneficio:"Gordura boa"},
{nome:"Limão e sal", qtd:"1 unidade + a gosto", kcal:5, beneficio:"Tempero"}
],
passos:[
{texto:"Tempere salmão com limão, sal e pimenta 5 min.", timer:5, label:"Temperando"},
{texto:"Airfryer 200°C 12 min com os legumes ao lado.", timer:12, label:"Salmão"}
]
},
{
id:"esfiha-aberta", titulo:"Esfiha Aberta de Carne", categoria_principal:"Árabe", categorias:["Árabe","Lanche"], tempo:"50 min", foto:"assets/esfiha-aberta.jpg", airfryer:true, personalizada:false,
ingredientes:[
{nome:"Farinha de trigo", qtd:"500g (3 xícaras e 3/4)", kcal:1800, beneficio:"Massa fofa"},
{nome:"Fermento biológico seco", qtd:"10g (1 colher sopa)", kcal:30, beneficio:"Crescimento"},
{nome:"Água morna", qtd:"300ml (1 xícara e 1/4)", kcal:0, beneficio:"Hidratação"},
{nome:"Carne moída", qtd:"300g", kcal:630, beneficio:"Proteína"},
{nome:"Cebola média picada", qtd:"1 unidade (100g) inteira picada", kcal:35, beneficio:"Sabor"},
{nome:"Tomate sem semente picado", qtd:"1 unidade média (80g) inteiro picado", kcal:15, beneficio:"Suculência"},
{nome:"Hortelã fresca", qtd:"10 folhas (5g)", kcal:2, beneficio:"Frescor"},
{nome:"Pimenta síria", qtd:"1 colher chá (3g)", kcal:8, beneficio:"Aroma árabe"}
],
passos:[
{texto:"Misture farinha, fermento, açúcar, sal, água e azeite até massa lisa. Descanse 30 min.", timer:30, label:"Massa Descansando"},
{texto:"Refogue carne com cebola, depois junte tomate, hortelã e pimenta síria. Deixe esfriar.", timer:0},
{texto:"Abra discos em formato de barquinho aberto, recheie no centro deixando borda.", timer:0},
{texto:"Forno ou Airfryer 200°C 12 min até dourar.", timer:12, label:"Esfiha Assando"}
]
},
{
id:"kafta-kebab", titulo:"Kafta Kebab na Brasa", categoria_principal:"Árabe", categorias:["Árabe","Brasileira"], tempo:"25 min", foto:"assets/kafta-kebab.jpg", airfryer:true, personalizada:false,
ingredientes:[
{nome:"Carne moída com gordura", qtd:"500g (patinho + 20% gordura)", kcal:750, beneficio:"Suculência"},
{nome:"Cebola ralada e espremida", qtd:"1 grande (120g) - espremer bem a água", kcal:40, beneficio:"Sabor"},
{nome:"Hortelã picada", qtd:"2 colheres sopa (8g)", kcal:3, beneficio:"Frescor"},
{nome:"Salsinha picada", qtd:"2 colheres sopa (8g)", kcal:2, beneficio:"Frescor"},
{nome:"Pimenta síria e cominho", qtd:"1 colher chá cada", kcal:8, beneficio:"Tempero"}
],
passos:[
{texto:"Misture carne, cebola espremida, ervas e temperos. Amasse 5 min até ficar pegajosa.", timer:0},
{texto:"Modele em espetos grossos tipo salsichão bem apertado.", timer:0},
{texto:"Grelhe na brasa ou Airfryer 200°C 10 min virando.", timer:10, label:"Kafta Grelhando"}
]
},
{
id:"coxinha-airfryer", titulo:"Coxinha de Frango na Airfryer", categoria_principal:"Airfryer", categorias:["Airfryer","Lanche","Brasileira"], tempo:"28 min", foto:"assets/coxinha-airfryer.jpg", airfryer:true, personalizada:false,
ingredientes:[
{nome:"Leite integral", qtd:"2 xícaras (480ml)", kcal:150, beneficio:"Massa macia"},
{nome:"Farinha de trigo", qtd:"2 xícaras (240g)", kcal:850, beneficio:"Base"},
{nome:"Frango desfiado temperado", qtd:"300g (1 xícara e meia)", kcal:495, beneficio:"Proteína"},
{nome:"Farinha panko", qtd:"1 xícara (80g) para empanar", kcal:280, beneficio:"Crocância"}
],
passos:[
{texto:"Ferva leite com manteiga e sal, jogue farinha de uma vez e mexa até desgrudar.", timer:0},
{texto:"Deixe massa esfriar, abra na mão, recheie com frango e modele coxinha.", timer:0},
{texto:"Passe no ovo e na panko, borrife azeite.", timer:0},
{texto:"Airfryer 200°C 15-20 min virando na metade até dourar.", timer:18, label:"Coxinha Airfryer"}
]
},
{
id:"pao-queijo", titulo:"Pão de Queijo Mineiro", categoria_principal:"Lanche", categorias:["Lanche"], tempo:"15 min", foto:"assets/pao-queijo.jpg", personalizada:false,
ingredientes:[
{nome:"Polvilho azedo", qtd:"200g (1 xícara e meia)", kcal:700, beneficio:"Crocância"},
{nome:"Queijo meia cura ralado", qtd:"150g (1 xícara)", kcal:450, beneficio:"Sabor"},
{nome:"Leite", qtd:"100ml (1/2 xícara)", kcal:60, beneficio:"Massa"},
{nome:"Ovo", qtd:"1 unidade", kcal:70, beneficio:"Liga"}
],
passos:[
{texto:"Escalde polvilho com leite quente, junte queijo e ovo até massa lisa.", timer:0},
{texto:"Faça bolinhas de 30g.", timer:0},
{texto:"Airfryer 180°C 10 min até estufar.", timer:10, label:"Pão de Queijo"}
]
},
{
id:"batata-rustica", titulo:"Batata Rústica com Alecrim", categoria_principal:"Saudável", categorias:["Saudável","Vegana"], tempo:"25 min", foto:"assets/batata-rustica.jpg", personalizada:false,
ingredientes:[
{nome:"Batata com casca em gomos", qtd:"3 médias (400g)", kcal:260, beneficio:"Potássio"},
{nome:"Azeite", qtd:"1 colher sopa", kcal:90, beneficio:"Crocância"},
{nome:"Alecrim fresco", qtd:"1 ramo", kcal:2, beneficio:"Aroma"},
{nome:"Sal grosso e pimenta", qtd:"a gosto", kcal:0, beneficio:"Tempero"}
],
passos:[
{texto:"Corte em gomos, tempere com azeite, sal e alecrim.", timer:0},
{texto:"Airfryer 200°C 18 min mexendo na metade.", timer:18, label:"Batata Rústica"}
]
},
{
id:"churros", titulo:"Churros com Doce de Leite", categoria_principal:"Doce", categorias:["Doce"], tempo:"18 min", foto:"assets/churros.jpg", personalizada:false,
ingredientes:[
{nome:"Água", qtd:"1 xícara (240ml)", kcal:0, beneficio:"Massa"},
{nome:"Manteiga", qtd:"2 colheres sopa (30g)", kcal:220, beneficio:"Sabor"},
{nome:"Farinha de trigo", qtd:"1 xícara (120g)", kcal:430, beneficio:"Base"},
{nome:"Açúcar + canela para envolver", qtd:"1/2 xícara + 1 colher chá", kcal:200, beneficio:"Finalização"},
{nome:"Doce de leite", qtd:"200g para servir", kcal:600, beneficio:"Recheio"}
],
passos:[
{texto:"Ferva água com manteiga, jogue farinha e mexa até desgrudar. Esfrie e coloque no saco de confeitar.", timer:0},
{texto:"Modele tirinhas de 10cm.", timer:0},
{texto:"Airfryer 180°C 8 min até dourar, passe no açúcar com canela.", timer:8, label:"Churros"}
]
},
{
id:"feijoada-completa", titulo:"Feijoada Completa da Casa", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"180 min", foto:"assets/feijoada-completa.jpg", airfryer:false, personalizada:false,
ingredientes:[
{nome:"Feijão preto", qtd:"500g (2 xícaras e meia) - deixar 12h de molho", kcal:1500, beneficio:"Ferro"},
{nome:"Linguiça calabresa em rodelas", qtd:"200g", kcal:700, beneficio:"Sabor"},
{nome:"Paio em rodelas", qtd:"100g", kcal:350, beneficio:"Sabor"},
{nome:"Costela defumada e bacon", qtd:"200g", kcal:800, beneficio:"Tradição"},
{nome:"Folha de louro", qtd:"2 folhas", kcal:0, beneficio:"Aroma"},
{nome:"Alho picado", qtd:"3 dentes", kcal:12, beneficio:"Base"}
],
passos:[
{texto:"Deixe feijão de molho 12h. Cozinhe 40 min na pressão.", timer:40, label:"Feijão Cozinhando"},
{texto:"Doure carnes e linguiças, junte ao feijão com louro.", timer:0},
{texto:"Cozinhe mais 60 min em fogo baixo até engrossar.", timer:60, label:"Feijoada Apurando"},
{texto:"Sirva com arroz, couve, farofa, laranja e torresmo.", timer:0}
]
},
{
id:"moqueca-baiana", titulo:"Moqueca Baiana de Peixe", categoria_principal:"Brasileira", categorias:["Brasileira","Saudável"], tempo:"35 min", foto:"assets/moqueca-baiana.jpg", airfryer:false, personalizada:false,
ingredientes:[
{nome:"Robalo em postas", qtd:"800g (4 postas)", kcal:700, beneficio:"Proteína leve"},
{nome:"Leite de coco", qtd:"200ml (1 garrafinha)", kcal:300, beneficio:"Cremoso"},
{nome:"Azeite de dendê", qtd:"2 colheres sopa (30ml)", kcal:180, beneficio:"Cor e sabor"},
{nome:"Pimentão amarelo em tiras", qtd:"1/2 unidade (50g)", kcal:15, beneficio:"Cor"},
{nome:"Cebola roxa em rodelas", qtd:"1 média (100g)", kcal:35, beneficio:"Base"},
{nome:"Tomate em rodelas", qtd:"2 médios (150g)", kcal:25, beneficio:"Frescor"},
{nome:"Coentro picado e limão", qtd:"a gosto", kcal:5, beneficio:"Finalização"}
],
passos:[
{texto:"Tempere peixe com limão, alho e sal 15 min.", timer:15, label:"Peixe Marinando"},
{texto:"Na panela de barro, faça camadas de cebola, pimentão, tomate e peixe.", timer:0},
{texto:"Regue com leite coco e dendê, cozinhe tampado 20 min sem mexer.", timer:20, label:"Moqueca Borbulhando"}
]
},
{
id:"bobo-camarao", titulo:"Bobó de Camarão Cremoso", categoria_principal:"Brasileira", categorias:["Brasileira"], tempo:"40 min", foto:"assets/bobo-camarao.jpg", airfryer:false, personalizada:false,
ingredientes:[
{nome:"Camarão médio limpo", qtd:"500g", kcal:350, beneficio:"Proteína"},
{nome:"Mandioca (aipim) cozida", qtd:"500g (3 xícaras)", kcal:600, beneficio:"Cremosidade"},
{nome:"Leite de coco", qtd:"200ml", kcal:300, beneficio:"Sabor baiano"},
{nome:"Azeite de dendê", qtd:"1 colher sopa", kcal:90, beneficio:"Cor"},
{nome:"Pimentão amarelo picado", qtd:"1/2 unidade", kcal:15, beneficio:"Base"},
{nome:"Tomate picado", qtd:"1 médio", kcal:15, beneficio:"Base"},
{nome:"Coentro", qtd:"a gosto", kcal:2, beneficio:"Aroma"}
],
passos:[
{texto:"Cozinhe mandioca até desmanchar, bata com leite coco virando purê liso.", timer:0},
{texto:"Refogue pimentão, cebola, tomate. Junte camarão 5 min até ficar rosa.", timer:5, label:"Camarão Selando"},
{texto:"Misture purê, acerte dendê, coentro e pimenta. Ferva 5 min.", timer:5, label:"Bobó Cremoso"}
]
},
// ===== CAFÉ DA MANHÃ (3) =====
{
id:"pao-chapa-cremoso", titulo:"Pão na Chapa Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Lanche","Rápida"], tempo:"10 min", foto:"assets/pao-chapa-cremoso.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"2 pães francês (100g)", qtd:"2 unidades", peso:"100g", kcal:140, beneficio:"Crocância"},
{nome:"2 colheres manteiga (30g)", qtd:"30g", peso:"30g", kcal:220, beneficio:"Sabor"},
{nome:"4 fatias muçarela (60g)", qtd:"60g", peso:"60g", kcal:180, beneficio:"Cremoso"},
{nome:"Orégano a gosto", qtd:"1 pitada", peso:"1g", kcal:2, beneficio:"Aroma"}
],
passos:[
{texto:"Passe manteiga generosa nos dois lados do pão.", timer:0},
{texto:"Chapa quente, doure 2 min cada lado com muçarela dentro até derreter.", timer:4, label:"Pão Dourando"},
{texto:"Finalize com orégano e sirva estalando.", timer:0}
]
},
{
id:"tapioca-frango-cremoso", titulo:"Tapioca de Frango Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Saudável"], tempo:"15 min", foto:"assets/tapioca-frango.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"4 colheres goma tapioca (80g)", qtd:"80g", peso:"80g", kcal:110, beneficio:"Sem glúten"},
{nome:"150g frango desfiado temperado", qtd:"150g", peso:"150g", kcal:165, beneficio:"Proteína"},
{nome:"2 colheres requeijão light (40g)", qtd:"40g", peso:"40g", kcal:55, beneficio:"Cremosidade"},
{nome:"Tomate e cheiro verde picado", qtd:"30g", peso:"30g", kcal:8, beneficio:"Frescor"}
],
passos:[
{texto:"Peneire a goma na frigideira quente formando disco. 2 min cada lado.", timer:4, label:"Tapioca Firmando"},
{texto:"Recheie com frango misturado com requeijão, tomate e cheiro verde.", timer:0},
{texto:"Dobre e sirva quente.", timer:0}
]
},
{
id:"ovos-mexidos-turbinado", titulo:"Ovos Mexidos Turbinado", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Fit","Rápida"], tempo:"8 min", foto:"assets/ovos-mexidos-turbinado.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"3 ovos inteiros (150g)", qtd:"3 un", peso:"150g", kcal:210, beneficio:"Proteína completa"},
{nome:"1 colher manteiga (15g)", qtd:"15g", peso:"15g", kcal:110, beneficio:"Sabor"},
{nome:"2 colheres creme leite (30g)", qtd:"30g", peso:"30g", kcal:45, beneficio:"Cremosidade"},
{nome:"Cebolinha, sal e pimenta", qtd:"a gosto", peso:"5g", kcal:3, beneficio:"Finalização"}
],
passos:[
{texto:"Bata ovos levemente com sal, pimenta e creme de leite.", timer:0},
{texto:"Manteiga derretida fogo baixo, mexa sem parar 3 min até ficar cremoso e brilhante.", timer:3, label:"Ovos Cremosos"},
{texto:"Desligue ainda mole, finalize com cebolinha.", timer:0}
]
},

// ===== CALDO (3) =====
{
id:"caldo-verde-tradicional", titulo:"Caldo Verde Tradicional", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"35 min", foto:"assets/caldo-verde.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"500g batata asterix", qtd:"500g", peso:"500g", kcal:320, beneficio:"Base cremosa"},
{nome:"200g linguiça calabresa fatiada", qtd:"200g", peso:"200g", kcal:520, beneficio:"Sabor defumado"},
{nome:"1 maço couve fatiada fina (100g)", qtd:"100g", peso:"100g", kcal:35, beneficio:"Fibra"},
{nome:"1 cebola, 3 dentes alho, azeite", qtd:"100g", peso:"100g", kcal:60, beneficio:"Refogado"}
],
passos:[
{texto:"Cozinhe batatas em 1L água com sal até desmanchar. Bata metade virando creme.", timer:20, label:"Batata Cozinhando"},
{texto:"Refogue calabresa até dourar, adicione alho e cebola.", timer:5, label:"Calabresa Dourando"},
{texto:"Junte creme, batatas em pedaços e couve. Ferva 5 min.", timer:5, label:"Caldo Apurando"}
]
},
{
id:"caldo-abobora-frango", titulo:"Caldo de Abóbora com Frango", categoria_principal:"Caldo", categorias:["Caldo","Fit","Saudável"], tempo:"30 min", foto:"assets/caldo-abobora-frango.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"500g abóbora cabotiá picada", qtd:"500g", peso:"500g", kcal:200, beneficio:"Vitaminas"},
{nome:"200g frango desfiado cozido", qtd:"200g", peso:"200g", kcal:220, beneficio:"Proteína leve"},
{nome:"100ml leite coco light (100g)", qtd:"100ml", peso:"100g", kcal:40, beneficio:"Cremoso"},
{nome:"Gengibre, alho e cheiro verde", qtd:"15g", peso:"15g", kcal:8, beneficio:"Aroma"}
],
passos:[
{texto:"Cozinhe abóbora com gengibre e alho em 800ml água até macia.", timer:18, label:"Abóbora Cozinhando"},
{texto:"Bata no liquidificador com leite de coco até creme liso.", timer:0},
{texto:"Volte pra panela, junte frango desfiado, acerte sal e ferva 5 min.", timer:5, label:"Caldo Cremoso"}
]
},
{
id:"caldo-feijao-bacon", titulo:"Caldo de Feijão com Bacon", categoria_principal:"Caldo", categorias:["Caldo","Brasileira"], tempo:"40 min", foto:"assets/caldo-feijao-bacon.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"400g feijão carioca cozido com caldo", qtd:"400g", peso:"400g", kcal:280, beneficio:"Ferro"},
{nome:"100g bacon em cubos", qtd:"100g", peso:"100g", kcal:430, beneficio:"Defumado"},
{nome:"1 cebola e 3 dentes alho", qtd:"80g", peso:"80g", kcal:35, beneficio:"Base"},
{nome:"Couve e pimenta biquinho para servir", qtd:"50g", peso:"50g", kcal:12, beneficio:"Acompanhamento"}
],
passos:[
{texto:"Frite bacon até dourar e soltar gordura. Reserve metade.", timer:6, label:"Bacon Crocante"},
{texto:"Na mesma gordura refogue cebola e alho, junte feijão com caldo e bata 1/2 no mixer.", timer:0},
{texto:"Misture tudo, ferva 10 min até engrossar. Sirva com couve e bacon por cima.", timer:10, label:"Caldo Engrossando"}
]
},

// ===== DOCE (faltavam 2) =====
{
id:"pudim-leite-condensado", titulo:"Pudim de Leite Condensado", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"90 min", foto:"assets/pudim-leite.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"1 lata leite condensado (395g)", qtd:"395g", peso:"395g", kcal:1264, beneficio:"Doçura"},
{nome:"2 medidas leite integral (mesma lata)", qtd:"600ml", peso:"600g", kcal:360, beneficio:"Cremoso"},
{nome:"3 ovos inteiros (150g)", qtd:"150g", peso:"150g", kcal:210, beneficio:"Estrutura"},
{nome:"1 xíc açúcar para calda (200g)", qtd:"200g", peso:"200g", kcal:780, beneficio:"Caramelo"}
],
passos:[
{texto:"Derreta açúcar até caramelo âmbar, espalhe na forma e deixe esfriar.", timer:8, label:"Caramelo"},
{texto:"Bata leite condensado, leite e ovos só até misturar (não espumar).", timer:0},
{texto:"Despeje na forma caramelada, cubra com alumínio.", timer:0},
{texto:"Asse em banho-maria 200°C 60 min ou Airfryer 160°C 40 min. Geladeira 4h.", timer:60, label:"Pudim Assando"}
]
},
{
id:"pave-pacoca-cremoso", titulo:"Pavê de Paçoca Cremoso", categoria_principal:"Doce", categorias:["Doce","Brasileira"], tempo:"30 min", foto:"assets/pave-pacoca.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"1 lata leite condensado (395g)", qtd:"395g", peso:"395g", kcal:1264, beneficio:"Base doce"},
{nome:"500ml leite + 2 colheres amido (40g)", qtd:"540g", peso:"540g", kcal:320, beneficio:"Creme"},
{nome:"6 paçocas esfareladas (120g)", qtd:"120g", peso:"120g", kcal:540, beneficio:"Sabor"},
{nome:"200g bolacha maisena", qtd:"200g", peso:"200g", kcal:860, beneficio:"Camadas"}
],
passos:[
{texto:"Leite condensado, leite e amido fogo médio mexendo até creme grosso. Desligue e misture 4 paçocas esfareladas.", timer:10, label:"Creme de Paçoca"},
{texto:"Travessa: creme, bolacha, creme, bolacha até acabar.", timer:0},
{texto:"Finalize com creme e 2 paçocas esfareladas por cima. Geladeira 3h.", timer:180, label:"Gelando"}
]
}
];