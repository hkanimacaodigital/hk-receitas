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
},
// ===== FIT (3) =====
{
id:"frango-grelhado-fit", titulo:"Frango Grelhado Fit com Legumes", categoria_principal:"Fit", categorias:["Fit","Saudável","Brasileira"], tempo:"20 min", foto:"assets/frango-grelhado-fit.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"300g peito frango em bifes", qtd:"300g", peso:"300g", kcal:495, beneficio:"Proteína magra"},
{nome:"1 abobrinha e 1 cenoura em tiras (200g)", qtd:"200g", peso:"200g", kcal:55, beneficio:"Fibras"},
{nome:"1 colher azeite (15ml)", qtd:"15ml", peso:"15g", kcal:135, beneficio:"Gordura boa"},
{nome:"Limon, alho, sal e pimenta", qtd:"a gosto", peso:"10g", kcal:8, beneficio:"Tempero"}
],
passos:[
{texto:"Tempere frango com limão, alho, sal e pimenta 10 min.", timer:10, label:"Frango Marinando"},
{texto:"Grelhe 5 min cada lado até dourar.", timer:10, label:"Frango Grelhando"},
{texto:"Salteie legumes rapidamente no azeite 3 min al dente.", timer:3, label:"Legumes Salteando"}
]
},
{
id:"salada-proteica-tunada", titulo:"Salada Proteica Tunada", categoria_principal:"Fit", categorias:["Fit","Saudável","Rápida"], tempo:"15 min", foto:"assets/salada-proteica.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"150g frango desfiado ou atum", qtd:"150g", peso:"150g", kcal:220, beneficio:"Proteína"},
{nome:"2 xícaras mix folhas (60g)", qtd:"60g", peso:"60g", kcal:15, beneficio:"Vitaminas"},
{nome:"1/2 abacate picado (80g)", qtd:"80g", peso:"80g", kcal:128, beneficio:"Gordura boa"},
{nome:"1 ovo cozido + tomate + quinoa cozida 3 colheres (60g)", qtd:"110g", peso:"110g", kcal:150, beneficio:"Completo"}
],
passos:[
{texto:"Misture folhas, tomate, quinoa, frango e abacate.", timer:0},
{texto:"Tempere com limão, azeite e sal. Finalize com ovo cozido.", timer:0}
]
},
{
id:"wrap-fit-frango", titulo:"Wrap Fit de Frango", categoria_principal:"Fit", categorias:["Fit","Lanche","Saudável"], tempo:"12 min", foto:"assets/wrap-fit.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"1 tortilha integral (40g)", qtd:"40g", peso:"40g", kcal:110, beneficio:"Fibra"},
{nome:"100g frango grelhado fatiado", qtd:"100g", peso:"100g", kcal:165, beneficio:"Proteína"},
{nome:"2 colheres guacamole ou creme ricota (40g)", qtd:"40g", peso:"40g", kcal:55, beneficio:"Cremoso"},
{nome:"Alface, tomate e cenoura ralada (50g)", qtd:"50g", peso:"50g", kcal:15, beneficio:"Crocância"}
],
passos:[
{texto:"Aqueça tortilha 1 min.", timer:1, label:"Tortilha Aquecendo"},
{texto:"Recheie com guacamole, frango e salada, enrole firme.", timer:0}
]
},

// ===== ITALIANA (3) =====
{
id:"lasanha-bolonhesa-caseira", titulo:"Lasanha Bolonhesa Caseira", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"60 min", foto:"assets/lasanha-bolonhesa.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"500g carne moída patinho", qtd:"500g", peso:"500g", kcal:650, beneficio:"Recheio"},
{nome:"1 pacote massa lasanha pré-cozida (200g)", qtd:"200g", peso:"200g", kcal:700, beneficio:"Massa"},
{nome:"400g molho tomate + 300g muçarela fatiada", qtd:"700g", peso:"700g", kcal:1100, beneficio:"Molho e queijo"},
{nome:"1 cebola, alho, manjericão", qtd:"100g", peso:"100g", kcal:35, beneficio:"Aroma"}
],
passos:[
{texto:"Refogue cebola, alho, carne, junte molho e manjericão. Cozinhe 15 min.", timer:15, label:"Bolonhesa Apurando"},
{texto:"Monte: molho, massa, molho, muçarela repetindo.", timer:0},
{texto:"Finalize com muçarela e forno 200°C 25 min até borbulhar.", timer:25, label:"Lasanha Gratinando"}
]
},
{
id:"carbonara-cremosa", titulo:"Carbonara Cremosa Original", categoria_principal:"Italiana", categorias:["Italiana","Rápida"], tempo:"20 min", foto:"assets/carbonara-cremosa.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"200g espaguete", qtd:"200g", peso:"200g", kcal:700, beneficio:"Massa"},
{nome:"150g bacon ou pancetta em cubos", qtd:"150g", peso:"150g", kcal:645, beneficio:"Defumado"},
{nome:"3 gemas + 1 ovo inteiro (80g)", qtd:"80g", peso:"80g", kcal:180, beneficio:"Cremosidade"},
{nome:"50g parmesão ralado + pimenta preta", qtd:"50g", peso:"50g", kcal:180, beneficio:"Sabor"}
],
passos:[
{texto:"Cozinhe espaguete al dente. Reserve 1 concha água massa.", timer:10, label:"Massa Cozinhando"},
{texto:"Frite bacon até dourar e crocante.", timer:6, label:"Bacon Dourando"},
{texto:"Fora fogo, misture massa quente com ovos, parmesão e água do cozimento até creme brilhante. Sem virar omelete.", timer:0}
]
},
{
id:"risoto-funghi-cremoso", titulo:"Risoto de Funghi Cremoso", categoria_principal:"Italiana", categorias:["Italiana"], tempo:"35 min", foto:"assets/risoto-funghi.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"1 xíc arroz arbóreo (200g)", qtd:"200g", peso:"200g", kcal:700, beneficio:"Base cremosa"},
{nome:"200g mix funghi fresco", qtd:"200g", peso:"200g", kcal:60, beneficio:"Umami"},
{nome:"1L caldo legumes quente", qtd:"1L", peso:"1000g", kcal:20, beneficio:"Sabor"},
{nome:"50g manteiga gelada + 50g parmesão", qtd:"100g", peso:"100g", kcal:450, beneficio:"Mantecatura"}
],
passos:[
{texto:"Refogue funghi com alho até dourar. Reserve.", timer:6, label:"Funghi Dourando"},
{texto:"Na mesma panela refogue cebola, junte arroz, vinho branco (opcional) e vá adicionando caldo quente mexendo 18 min.", timer:18, label:"Risoto Mexendo"},
{texto:"Desligue, manteiga gelada e parmesão, mexa vigoroso até cremoso. Volte funghi.", timer:0}
]
},

// ===== LANCHE (3) =====
{
id:"misto-quente-airfryer", titulo:"Misto Quente de Airfryer", categoria_principal:"Lanche", categorias:["Lanche","Rápida","Airfryer"], tempo:"8 min", foto:"assets/misto-quente-airfryer.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"2 fatias pão forma (60g)", qtd:"60g", peso:"60g", kcal:150, beneficio:"Base"},
{nome:"2 fatias muçarela (40g)", qtd:"40g", peso:"40g", kcal:120, beneficio:"Queijo"},
{nome:"2 fatias presunto (40g)", qtd:"40g", peso:"40g", kcal:60, beneficio:"Recheio"},
{nome:"Manteiga para pincelar (10g)", qtd:"10g", peso:"10g", kcal:73, beneficio:"Dourado"}
],
passos:[
{texto:"Monte misto, pincele manteiga fora.", timer:0},
{texto:"Airfryer 180°C 5 min virando na metade até dourar e queijo esticar.", timer:5, label:"Misto Dourando"}
]
},
{
id:"pastel-forno-queijo", titulo:"Pastel de Forno de Queijo", categoria_principal:"Lanche", categorias:["Lanche","Airfryer","Brasileira"], tempo:"30 min", foto:"assets/pastel-forno.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"1 rolo massa pastel (300g)", qtd:"300g", peso:"300g", kcal:750, beneficio:"Massa"},
{nome:"200g muçarela ralada", qtd:"200g", peso:"200g", kcal:600, beneficio:"Recheio puxa"},
{nome:"1 gema para pincelar (20g)", qtd:"20g", peso:"20g", kcal:55, beneficio:"Brilho"},
{nome:"Orégano e tomate seco opcional (20g)", qtd:"20g", peso:"20g", kcal:15, beneficio:"Sabor"}
],
passos:[
{texto:"Corte discos, recheie com queijo, feche apertando com garfo.", timer:0},
{texto:"Pincele gema, orégano.", timer:0},
{texto:"Forno ou Airfryer 200°C 12 min até dourar e estufar.", timer:12, label:"Pastel Assando"}
]
},
{
id:"coxinha-creme-frango", titulo:"Coxinha com Catupiry Cremosa", categoria_principal:"Lanche", categorias:["Lanche","Brasileira","Airfryer"], tempo:"50 min", foto:"assets/coxinha-creme.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"300g peito frango cozido desfiado", qtd:"300g", peso:"300g", kcal:330, beneficio:"Recheio"},
{nome:"2 xícaras farinha trigo (240g) + 2 xícaras leite (400ml) + caldo frango", qtd:"640g", peso:"640g", kcal:800, beneficio:"Massa"},
{nome:"100g catupiry (100g)", qtd:"100g", peso:"100g", kcal:250, beneficio:"Cremoso"},
{nome:"Farinha panko para empanar", qtd:"100g", peso:"100g", kcal:350, beneficio:"Crocância"}
],
passos:[
{texto:"Leite, caldo, manteiga ferver, jogue farinha de uma vez mexendo até desgrudar.", timer:5, label:"Massa Cozinhando"},
{texto:"Sove massa quente, abra, recheie frango com catupiry, modele coxinha.", timer:0},
{texto:"Passe leite e panko, Airfryer 200°C 12 min ou frite.", timer:12, label:"Coxinha Dourando"}
]
},
// ===== MEXICANA (3) =====
{
id:"tacos-carne-mexicana", titulo:"Tacos de Carne Mexicana", categoria_principal:"Mexicana", categorias:["Mexicana","Rápida"], tempo:"20 min", foto:"assets/tacos-carne-mexicana.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Carne moída", qtd:"300g", kcal:450, beneficio:"Proteína"},
{nome:"Tortilhas de milho", qtd:"6 unidades (120g)", kcal:240, beneficio:"Base"},
{nome:"Alface, tomate e cebola roxa picados", qtd:"150g", kcal:35, beneficio:"Frescor"},
{nome:"Queijo cheddar ralado", qtd:"50g", kcal:200, beneficio:"Cremoso"},
{nome:"Páprica, cominho e pimenta", qtd:"a gosto", kcal:8, beneficio:"Tempero mexicano"}
],
passos:[
{texto:"Refogue carne com páprica, cominho, sal e pimenta até dourar e secar.", timer:8, label:"Carne Tacos"},
{texto:"Aqueça tortilhas 1 min na frigideira.", timer:0},
{texto:"Monte com carne, salada e cheddar por cima.", timer:0}
]
},
{
id:"burrito-frango", titulo:"Burrito de Frango Cremoso", categoria_principal:"Mexicana", categorias:["Mexicana","Lanche"], tempo:"25 min", foto:"assets/burrito-frango.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Peito de frango em tiras", qtd:"300g", kcal:330, beneficio:"Proteína leve"},
{nome:"Tortilha grande", qtd:"2 unidades (140g)", kcal:320, beneficio:"Enrolado"},
{nome:"Feijão refrito ou cozido", qtd:"100g", kcal:90, beneficio:"Fibra"},
{nome:"Requeijão cremoso", qtd:"40g", kcal:80, beneficio:"Cremosidade"},
{nome:"Milho e pimentão picado", qtd:"80g", kcal:50, beneficio:"Cor"}
],
passos:[
{texto:"Grelhe frango temperado 8 min até dourar.", timer:8, label:"Frango Grelhando"},
{texto:"Misture feijão, requeijão, milho e pimentão.", timer:0},
{texto:"Recheie tortilha, enrole burrito e doure 3 min na chapa.", timer:3, label:"Burrito Fechando"}
]
},
{
id:"quesadilla-queijo", titulo:"Quesadilla de Queijo com Salsa", categoria_principal:"Mexicana", categorias:["Mexicana","Rápida","Lanche"], tempo:"12 min", foto:"assets/quesadilla-queijo.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Tortilha grande", qtd:"2 unidades", kcal:320, beneficio:"Crocante"},
{nome:"Muçarela ralada", qtd:"120g", kcal:360, beneficio:"Derrete"},
{nome:"Tomate sem semente picado", qtd:"1 médio (80g)", kcal:15, beneficio:"Salsa"},
{nome:"Coentro e limão", qtd:"a gosto", kcal:3, beneficio:"Frescor"}
],
passos:[
{texto:"Recheie uma tortilha com muçarela e tomate, cubra com a outra.", timer:0},
{texto:"Frigideira sem óleo 4 min cada lado até queijo derreter e ficar dourada.", timer:8, label:"Quesadilla Dourando"},
{texto:"Corte em triângulos e sirva com limão.", timer:0}
]
},

// ===== ORIENTAL (2 que faltam) + 1 extra pra fechar 3 =====
{
id:"yakisoba-frango", titulo:"Yakisoba de Frango Rápido", categoria_principal:"Oriental", categorias:["Oriental","Rápida"], tempo:"22 min", foto:"assets/yakisoba-frango.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Macarrão para yakisoba", qtd:"200g", kcal:700, beneficio:"Base"},
{nome:"Peito frango em tiras", qtd:"250g", kcal:275, beneficio:"Proteína"},
{nome:"Mix legumes yakisoba (repolho, cenoura, brócolis)", qtd:"250g", kcal:80, beneficio:"Fibras"},
{nome:"Molho shoyu + óleo de gergelim", qtd:"3 colheres + 1 colher chá", kcal:40, beneficio:"Umami"}
],
passos:[
{texto:"Cozinhe macarrão 5 min al dente, escorra.", timer:5, label:"Macarrão"},
{texto:"Wok bem quente, salteie frango 6 min, junte legumes 4 min.", timer:10, label:"Salteado"},
{texto:"Misture macarrão e shoyu, salteie 2 min.", timer:2, label:"Yakisoba Final"}
]
},
{
id:"tempura-legumes", titulo:"Tempurá de Legumes Crocante", categoria_principal:"Oriental", categorias:["Oriental","Vegana","Rápida"], tempo:"20 min", foto:"assets/tempura-legumes.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Abobrinha, cenoura e brócolis em palitos", qtd:"300g", kcal:90, beneficio:"Crocância"},
{nome:"Farinha de trigo + amido", qtd:"1/2 xícara cada (60g)", kcal:210, beneficio:"Massa leve"},
{nome:"Água com gás bem gelada", qtd:"150ml", kcal:0, beneficio:"Leveza"},
{nome:"Shoyu para mergulhar", qtd:"30ml", kcal:15, beneficio:"Acompanhamento"}
],
passos:[
{texto:"Misture farinhas com água gelada até massa rala e com grumos.", timer:0},
{texto:"Passe legumes na massa.", timer:0},
{texto:"Airfryer 200°C 10 min borrifando azeite até dourar e ficar sequinho.", timer:10, label:"Tempurá Crocante"}
]
},
{
id:"ramen-cremoso", titulo:"Ramen Cremoso de Frango", categoria_principal:"Oriental", categorias:["Oriental","Caldo"], tempo:"30 min", foto:"assets/ramen-cremoso.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Macarrão instantâneo sem tempero", qtd:"1 pacote (90g)", kcal:350, beneficio:"Base"},
{nome:"Caldo de frango", qtd:"500ml", kcal:30, beneficio:"Sabor"},
{nome:"Ovo cozido mole", qtd:"1 unidade", kcal:70, beneficio:"Proteína"},
{nome:"Frango desfiado, cebolinha e nori", qtd:"100g", kcal:120, beneficio:"Finalização"}
],
passos:[
{texto:"Ferva caldo, cozinhe macarrão 4 min dentro do caldo.", timer:4, label:"Ramen Cozinhando"},
{texto:"Sirva com frango, ovo cortado ao meio, cebolinha e nori.", timer:0}
]
},

// ===== RÁPIDA (3) =====
{
id:"omelete-rapido", titulo:"Omelete de Forno Rápido", categoria_principal:"Rápida", categorias:["Rápida","Café da Manhã","Fit"], tempo:"12 min", foto:"assets/omelete-rapido.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"3 ovos", qtd:"150g", kcal:210, beneficio:"Proteína"},
{nome:"Tomate picado e muçarela", qtd:"80g", kcal:100, beneficio:"Recheio"},
{nome:"Sal, pimenta e cheiro verde", qtd:"a gosto", kcal:2, beneficio:"Tempero"}
],
passos:[
{texto:"Bata ovos, misture recheio.", timer:0},
{texto:"Frigideira antiaderente ou Airfryer 180°C 8 min.", timer:8, label:"Omelete Firme"}
]
},
{
id:"macarrao-alho-15min", titulo:"Macarrão Alho e Óleo 15min", categoria_principal:"Rápida", categorias:["Rápida","Italiana"], tempo:"15 min", foto:"assets/macarrao-alho-15min.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Espaguete", qtd:"200g", kcal:700, beneficio:"Base"},
{nome:"Alho fatiado", qtd:"4 dentes", kcal:16, beneficio:"Aroma"},
{nome:"Azeite", qtd:"2 colheres sopa", kcal:180, beneficio:"Sabor"},
{nome:"Pimenta calabresa", qtd:"1 pitada", kcal:2, beneficio:"Picância"}
],
passos:[
{texto:"Cozinhe macarrão al dente.", timer:9, label:"Macarrão Cozinhando"},
{texto:"Doure alho no azeite 2 min sem queimar, junte macarrão com 1 concha da água do cozimento.", timer:2, label:"Alho Dourando"}
]
},
{
id:"tapioca-doce-rapida", titulo:"Tapioca Doce de Leite Ninho", categoria_principal:"Rápida", categorias:["Rápida","Doce"], tempo:"8 min", foto:"assets/tapioca-doce-rapida.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Goma de tapioca", qtd:"80g", kcal:110, beneficio:"Base"},
{nome:"Leite ninho", qtd:"2 colheres sopa (20g)", kcal:80, beneficio:"Doçura"},
{nome:"Leite condensado", qtd:"1 colher sopa (20g)", kcal:64, beneficio:"Creme"},
{nome:"Morango fatiado", qtd:"50g", kcal:16, beneficio:"Frescor"}
],
passos:[
{texto:"Faça disco de tapioca 2 min cada lado.", timer:4, label:"Tapioca"},
{texto:"Recheie com leite ninho, leite condensado e morango.", timer:0}
]
},

// ===== SAUDÁVEL (1 que falta pra fechar 3) =====
{
id:"bowl-quinoa-colorido", titulo:"Bowl de Quinoa Colorido", categoria_principal:"Saudável", categorias:["Saudável","Vegana","Fit"], tempo:"20 min", foto:"assets/bowl-quinoa-colorido.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Quinoa cozida", qtd:"1 xícara (150g)", kcal:180, beneficio:"Proteína vegetal"},
{nome:"Grão de bico cozido", qtd:"80g", kcal:100, beneficio:"Fibra"},
{nome:"Abacate em cubos", qtd:"50g", kcal:80, beneficio:"Gordura boa"},
{nome:"Tomate cereja e pepino", qtd:"100g", kcal:25, beneficio:"Frescor"}
],
passos:[
{texto:"Cozinhe quinoa 12 min.", timer:12, label:"Quinoa"},
{texto:"Monte bowl com quinoa, grão bico, abacate, tomate e pepino. Tempere com limão.", timer:0}
]
},
{
id:"sopa-detox-verde", titulo:"Sopa Detox Verde", categoria_principal:"Saudável", categorias:["Saudável","Vegana","Caldo"], tempo:"25 min", foto:"assets/sopa-detox-verde.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Abobrinha picada", qtd:"200g", kcal:30, beneficio:"Leve"},
{nome:"Couve picada", qtd:"100g", kcal:35, beneficio:"Detox"},
{nome:"Ervilha fresca", qtd:"80g", kcal:70, beneficio:"Proteína"},
{nome:"Gengibre e alho", qtd:"10g", kcal:8, beneficio:"Termogênico"}
],
passos:[
{texto:"Refogue alho e gengibre, junte legumes e 600ml água. Cozinhe 15 min.", timer:15, label:"Sopa Cozinhando"},
{texto:"Bata metade para ficar cremosa com pedaços.", timer:0}
]
},
{
id:"frango-grelhado-legumes", titulo:"Frango Grelhado com Legumes", categoria_principal:"Saudável", categorias:["Saudável","Fit","Rápida"], tempo:"18 min", foto:"assets/frango-grelhado-legumes.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Peito de frango", qtd:"300g", kcal:330, beneficio:"Proteína magra"},
{nome:"Abobrinha e cenoura em tiras", qtd:"200g", kcal:50, beneficio:"Vitaminas"},
{nome:"Azeite e limão", qtd:"1 colher + 1/2 limão", kcal:95, beneficio:"Tempero"}
],
passos:[
{texto:"Tempere frango com limão, sal e pimenta.", timer:0},
{texto:"Grelhe frango 6 min cada lado e legumes junto. Airfryer 200°C 12 min.", timer:12, label:"Frango Grelhando"}
]
},

// ===== VEGANA (3) =====
{
id:"curry-grao-bico", titulo:"Curry de Grão de Bico Cremoso", categoria_principal:"Vegana", categorias:["Vegana","Saudável"], tempo:"28 min", foto:"assets/curry-grao-bico.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Grão de bico cozido", qtd:"250g", kcal:280, beneficio:"Proteína vegetal"},
{nome:"Leite de coco", qtd:"200ml", kcal:300, beneficio:"Cremoso"},
{nome:"Curry em pó e cúrcuma", qtd:"1 colher chá cada", kcal:8, beneficio:"Anti-inflamatório"},
{nome:"Tomate pelado", qtd:"200g", kcal:40, beneficio:"Base"}
],
passos:[
{texto:"Refogue cebola, alho, curry e cúrcuma 2 min.", timer:2, label:"Curry Abrindo"},
{texto:"Junte grão bico, tomate e leite coco, ferva 15 min até engrossar.", timer:15, label:"Curry Apurando"}
]
},
{
id:"hamburguer-lentilha", titulo:"Hambúrguer de Lentilha", categoria_principal:"Vegana", categorias:["Vegana","Lanche","Saudável"], tempo:"30 min", foto:"assets/hamburguer-lentilha.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Lentilha cozida escorrida", qtd:"200g", kcal:230, beneficio:"Ferro"},
{nome:"Aveia em flocos", qtd:"40g", kcal:140, beneficio:"Liga"},
{nome:"Cebola roxa e alho", qtd:"50g", kcal:20, beneficio:"Sabor"},
{nome:"Cominho e páprica", qtd:"1 colher chá cada", kcal:6, beneficio:"Tempero"}
],
passos:[
{texto:"Processe lentilha, aveia, cebola, alho e temperos até massa moldável.", timer:0},
{texto:"Modele 4 hambúrgueres.", timer:0},
{texto:"Airfryer 200°C 12 min virando, ou frigideira 4 min cada lado.", timer:12, label:"Hambúrguer Vegano"}
]
},
{
id:"brownie-vegano", titulo:"Brownie Vegano de Chocolate", categoria_principal:"Vegana", categorias:["Vegana","Doce"], tempo:"28 min", foto:"assets/brownie-vegano.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Farinha de trigo", qtd:"120g", kcal:430, beneficio:"Base"},
{nome:"Cacau 100%", qtd:"30g", kcal:90, beneficio:"Chocolate intenso"},
{nome:"Açúcar mascavo", qtd:"100g", kcal:380, beneficio:"Doçura"},
{nome:"Óleo + água", qtd:"60ml + 120ml", kcal:500, beneficio:"Umidade"}
],
passos:[
{texto:"Misture secos, junte óleo e água até massa grossa brilhante.", timer:0},
{texto:"Forma 20cm forrada, Airfryer 160°C 18 min ou forno 180°C 22 min - centro úmido.", timer:18, label:"Brownie Assando"},
{texto:"Deixe esfriar 20 min para firmar.", timer:20, label:"Brownie Firmando"}
]
}
];
