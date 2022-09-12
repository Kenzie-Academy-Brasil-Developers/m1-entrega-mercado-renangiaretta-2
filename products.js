const products = [
    {
      title: "Uva Crimson",
      price: 8.99,
      category: "Frutas",
      image: undefined,
      imageDescription: "Imagem indisponível",
    },
    {
      title: "Banana",
      price: 5.69,
      category: "Frutas",
      image: "./img/products/product_2.svg",
      imageDescription: "Bananas maduras",
    },
    {
      title: "Mamão",
      price: 4.99,
      category: "Frutas",
      image: "./img/products/product_3.svg",
      imageDescription: "Mamão verde",
    },
    {
      title: "Maçã",
      price: 9.20,
      category: "Frutas",
      image: "./img/products/product_4.svg",
      imageDescription: "Maça verde",
    },
    {
      title: "Refrigerante",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "Refrigerante",
    },
    {
      title: "Vinho",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_6.svg",
      imageDescription: "Garrafa de vinho",
    },
    {
      title: "Água Tônica",
      price: 8.99,
      category: "Bebidas",
      image: undefined,
      imageDescription: "Água tônica",
    },
    {
      title: "Água de coco",
      price: 8.99,
      category: "Bebidas",
      image: "./img/products/product_8.svg",
      imageDescription: "Coco da Bahia",
    },
  
    {
      title: "Sabonete",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_9.svg",
      imageDescription: "Sabonete em barra",
    },
  
    {
      title: "Detergente",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_10.svg",
      imageDescription: "Detergente",
    },
  
    {
      title: "Limpa superfícies",
      price: 8.99,
      category: "Higiene",
      image: "./img/products/product_11.svg",
      imageDescription: "Limpa superfícies",
    },
  
    {
      title: "Lustra Móveis",
      price: 8.99,
      category: "Higiene",
      image: undefined,
      imageDescription: "Lustra móveis",
    },
  ];
  
function separaSecao(secao){

  for(let i = 0; i < secao.length; i++){
    let main = 0;
      if(secao[i].category == 'Frutas'){
        main = document.querySelector('.fruits ul')
      }
      if(secao[i].category == 'Bebidas'){
        main = document.querySelector('.drinks ul')
      }
      if(secao[i].category == 'Higiene'){
        main = document.querySelector('.hygiene ul')
      }
      const productCard = document.createElement('li')
      productCard.className = 'product';

      const imagem = document.createElement('img')
      imagem.className = 'product-img';
      if(secao[i].image == undefined){
        imagem.src = './img/products/no-img.svg'
      }
      else {
        imagem.src = secao[i].image
      }
      const produtoPadrao = document.createElement('main')
      produtoPadrao.className = 'product-main'
      const title = document.createElement('h1')
      title.className = 'product-title'
      title.textContent = secao[i].title
      const category = document.createElement('h5')
      category.className = 'product-category'
      category.textContent = secao[i].category
      const price = document.createElement('strong')
      price.className = 'product-price'
      price.textContent = secao[i].price
      imagem.alt = secao[i].imageDescription
      produtoPadrao.appendChild(title)
      produtoPadrao.appendChild(category)
      produtoPadrao.appendChild(price)
      productCard.appendChild(imagem)
      productCard.appendChild(produtoPadrao)
      main.appendChild(productCard)
    }
  }
  separaSecao(products)