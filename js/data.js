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
{nome:"Coxa de frango", qtd:"500g", kcal:440, beneficio:"Suculência"},
{nome:"Shoyu", qtd:"3 colheres sopa", kcal:15, beneficio:"Umami"},
{nome:"Alho", qtd:"2 dentes", kcal:8, beneficio:"Aroma"},
{nome:"Gengibre", qtd:"1 colher chá", kcal:5, beneficio:"Perfume"},
{nome:"Farinha de trigo", qtd:"50g", kcal:90, beneficio:"Crocância"},
{nome:"Amido", qtd:"50g", kcal:90, beneficio:"Crocância"}
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
{nome:"Salmão", qtd:"2 filés 300g", kcal:280, beneficio:"Ômega-3"},
{nome:"Abobrinha", qtd:"1 unidade", kcal:25, beneficio:"Fibras"},
{nome:"Cenoura", qtd:"1 média", kcal:35, beneficio:"Vitamina A"},
{nome:"Azeite", qtd:"1 colher sopa", kcal:90, beneficio:"Gordura boa"},
{nome:"Limão", qtd:"1 unidade", kcal:5, beneficio:"Tempero"}
],
passos:[
{texto:"Tempere salmão com limão, sal e pimenta 5 min.", timer:5, label:"Temperando"},
{texto:"Airfryer 200°C 12 min com os legumes ao lado.", timer:12, label:"Salmão"}
]
},
{
id:"esfiha-aberta", titulo:"Esfiha Aberta de Carne", categoria_principal:"Árabe", categorias:["Árabe","Lanche"], tempo:"50 min", foto:"assets/esfiha-aberta.jpg", airfryer:true, personalizada:false,
ingredientes:[
{nome:"Farinha de trigo", qtd:"500g", kcal:1800, beneficio:"Massa fofa"},
{nome:"Fermento biológico", qtd:"10g", kcal:30, beneficio:"Crescimento"},
{nome:"Água", qtd:"300ml", kcal:0, beneficio:"Hidratação"},
{nome:"Carne moída", qtd:"300g", kcal:630, beneficio:"Proteína"},
{nome:"Cebola", qtd:"1 unidade", kcal:35, beneficio:"Sabor"},
{nome:"Tomate", qtd:"1 unidade", kcal:15, beneficio:"Suculência"},
{nome:"Hortelã", qtd:"10 folhas", kcal:2, beneficio:"Frescor"},
{nome:"Pimenta síria", qtd:"1 colher chá", kcal:8, beneficio:"Aroma árabe"}
],
passos:[
{texto:"Misture farinha, fermento, açúcar, sal, água e azeite até massa lisa. Descanse 30 min.", timer:30, label:"Massa Descansando"},
{texto:"Refogue carne com cebola, depois junte tomate, hortelã e pimenta síria. Deixe esfriar.", timer:0},
{texto:"Abra discos em formato de barquinho aberto, recheie no centro deixando borda.", timer:0},
{texto:"Forno ou Airfryer 200°C 12 min até dourar.", timer:12, label:"Esfiha Assando"}
]
},
{
id:"pao-chapa-cremoso", titulo:"Pão na Chapa Cremoso", categoria_principal:"Café da Manhã", categorias:["Café da Manhã","Lanche","Rápida"], tempo:"10 min", foto:"assets/pao-chapa-cremoso.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Pão francês", qtd:"2 unidades", kcal:140, beneficio:"Crocância"},
{nome:"Manteiga", qtd:"30g", kcal:220, beneficio:"Sabor"},
{nome:"Muçarela", qtd:"60g", kcal:180, beneficio:"Cremoso"},
{nome:"Orégano", qtd:"1 pitada", kcal:2, beneficio:"Aroma"}
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
{nome:"Goma de tapioca", qtd:"80g", kcal:110, beneficio:"Sem glúten"},
{nome:"Frango desfiado", qtd:"150g", kcal:165, beneficio:"Proteína"},
{nome:"Requeijão light", qtd:"40g", kcal:55, beneficio:"Cremosidade"},
{nome:"Tomate", qtd:"15g", kcal:4, beneficio:"Frescor"},
{nome:"Cheiro verde", qtd:"15g", kcal:4, beneficio:"Frescor"}
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
{nome:"Ovos", qtd:"3 un", kcal:210, beneficio:"Proteína completa"},
{nome:"Manteiga", qtd:"15g", kcal:110, beneficio:"Sabor"},
{nome:"Creme de leite", qtd:"30g", kcal:45, beneficio:"Cremosidade"},
{nome:"Cebolinha", qtd:"a gosto", kcal:3, beneficio:"Finalização"}
],
passos:[
{texto:"Bata ovos levemente com sal, pimenta e creme de leite.", timer:0},
{texto:"Manteiga derretida fogo baixo, mexa sem parar 3 min até ficar cremoso e brilhante.", timer:3, label:"Ovos Cremosos"},
{texto:"Desligue ainda mole, finalize com cebolinha.", timer:0}
]
},
{
id:"lasanha-bolonhesa-caseira", titulo:"Lasanha Bolonhesa Caseira", categoria_principal:"Italiana", categorias:["Italiana","Brasileira"], tempo:"60 min", foto:"assets/lasanha-bolonhesa.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Carne moída", qtd:"500g", kcal:650, beneficio:"Recheio"},
{nome:"Massa para lasanha", qtd:"200g", kcal:700, beneficio:"Massa"},
{nome:"Molho de tomate", qtd:"400g", kcal:200, beneficio:"Molho"},
{nome:"Muçarela", qtd:"300g", kcal:900, beneficio:"Queijo"},
{nome:"Cebola", qtd:"1 unidade", kcal:20, beneficio:"Aroma"},
{nome:"Alho", qtd:"2 dentes", kcal:8, beneficio:"Aroma"},
{nome:"Manjericão", qtd:"a gosto", kcal:5, beneficio:"Aroma"}
],
passos:[
{texto:"Refogue cebola, alho, carne, junte molho e manjericão. Cozinhe 15 min.", timer:15, label:"Bolonhesa Apurando"},
{texto:"Monte: molho, massa, molho, muçarela repetindo.", timer:0},
{texto:"Finalize com muçarela e forno 200°C 25 min até borbulhar.", timer:25, label:"Lasanha Gratinando"}
]
},
{
id:"omelete-rapido", titulo:"Omelete de Forno Rápido", categoria_principal:"Rápida", categorias:["Rápida","Café da Manhã","Fit"], tempo:"12 min", foto:"assets/omelete-rapido.jpg", airfryer:true, personalizada:true,
ingredientes:[
{nome:"Ovos", qtd:"3 un", kcal:210, beneficio:"Proteína"},
{nome:"Tomate", qtd:"40g", kcal:10, beneficio:"Recheio"},
{nome:"Muçarela", qtd:"40g", kcal:90, beneficio:"Recheio"},
{nome:"Cheiro verde", qtd:"a gosto", kcal:2, beneficio:"Tempero"}
],
passos:[
{texto:"Bata ovos, misture recheio.", timer:0},
{texto:"Frigideira antiaderente ou Airfryer 180°C 8 min.", timer:8, label:"Omelete Firme"}
]
},
{
id:"bowl-quinoa-colorido", titulo:"Bowl de Quinoa Colorido", categoria_principal:"Saudável", categorias:["Saudável","Vegana","Fit"], tempo:"20 min", foto:"assets/bowl-quinoa-colorido.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Quinoa", qtd:"150g", kcal:180, beneficio:"Proteína vegetal"},
{nome:"Grão de bico", qtd:"80g", kcal:100, beneficio:"Fibra"},
{nome:"Abacate", qtd:"50g", kcal:80, beneficio:"Gordura boa"},
{nome:"Tomate cereja", qtd:"50g", kcal:12, beneficio:"Frescor"},
{nome:"Pepino", qtd:"50g", kcal:8, beneficio:"Frescor"}
],
passos:[
{texto:"Cozinhe quinoa 12 min.", timer:12, label:"Quinoa"},
{texto:"Monte bowl com quinoa, grão bico, abacate, tomate e pepino. Tempere com limão.", timer:0}
]
},
{
id:"tacos-carne-mexicana", titulo:"Tacos de Carne Mexicana", categoria_principal:"Mexicana", categorias:["Mexicana","Rápida"], tempo:"20 min", foto:"assets/tacos-carne-mexicana.jpg", airfryer:false, personalizada:true,
ingredientes:[
{nome:"Carne moída", qtd:"300g", kcal:450, beneficio:"Proteína"},
{nome:"Tortilha de milho", qtd:"6 unidades", kcal:240, beneficio:"Base"},
{nome:"Alface", qtd:"50g", kcal:8, beneficio:"Frescor"},
{nome:"Tomate", qtd:"50g", kcal:8, beneficio:"Frescor"},
{nome:"Cebola roxa", qtd:"50g", kcal:15, beneficio:"Frescor"},
{nome:"Queijo cheddar", qtd:"50g", kcal:200, beneficio:"Cremoso"}
],
passos:[
{texto:"Refogue carne com páprica, cominho, sal e pimenta até dourar e secar.", timer:8, label:"Carne Tacos"},
{texto:"Aqueça tortilhas 1 min na frigideira.", timer:0},
{texto:"Monte com carne, salada e cheddar por cima.", timer:0}
]
}
];
// OBS: Adicione as outras receitas seguindo o mesmo padrão - 1 ingrediente por linha, sem + e sem número no nome
