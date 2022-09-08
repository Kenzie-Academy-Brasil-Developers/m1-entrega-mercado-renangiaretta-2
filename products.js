const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "Uva boa",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Um monte de bananas",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Mamão papaia",
  },
  {
    title: "Maçã",
    price: 9.20,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Maça verde voadora",
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
    imageDescription: "Vinho e fogo",
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
    imageDescription: "Sabonete com laço gourmet",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Detergente vermelhão",
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


function separaSecaoFrutas (){
  let ul = document.createElement('ul')
  let secaoFrutas = document.querySelector('.products-content')
  for(let i=0; i<products.length; i++){
    if(products[i].category == 'Frutas'){
    let produto = document.createElement('li')
    let title = document.createElement('p')
    let price = document.createElement('p')
    let category = document.createElement('p')
    let image = document.createElement('img')
    let imageDescription = document.createElement('p')
    
    if(products[i].image == undefined){
      image.src = "./img/products/no-img.svg"
    }
    else{
      image.src = products[i].image
    }
  
    title.innerText = products[i].title
    price.innerText = products[i].price
    category.innerText = products[i].category
    imageDescription.innerText = products[i].imageDescription
    produto.classList.add('product')
    title.classList.add('product-title')
    price.classList.add('product-price')
    category.classList.add('product-category')
    image.classList.add('product-img')
    secaoFrutas.classList.add('product-main')
    produto.append(image, title, category, price, imageDescription)
    ul.append(produto)
    secaoFrutas.appendChild(ul)
  }
  }
}
separaSecaoFrutas()


function separaSecaoBebidas (){
  let ul = document.createElement('ul')
  let secaoBebidas = document.querySelectorAll('.products-content')[1]
  for(let i = 0; i<products.length; i++){
    if(products[i].category == 'Bebidas'){
    let produto = document.createElement('li')
    let title = document.createElement('p')
    let price = document.createElement('p')
    let category = document.createElement('p')
    let image = document.createElement('img')
    let imageDescription = document.createElement('p')

    if(products[i].image == undefined){
      image.src = "./img/products/no-img.svg"
    }
    else{
      image.src = products[i].image
    }
      title.innerText = products[i].title
      price.innerText = products[i].price
      category.innerText = products[i].category
      imageDescription.innerText = products[i].imageDescription
      produto.classList.add('product')
      title.classList.add('product-title')
      price.classList.add('product-price')
      category.classList.add('product-category')
      image.classList.add('product-img')
      secaoBebidas.classList.add('product-main')
      produto.append(image, title, category, price, imageDescription)
      ul.append(produto)
      secaoBebidas.appendChild(ul)
    }
  }
}
separaSecaoBebidas()

function separaSecaoHigiene (){
  let ul = document.createElement('ul')
  let secaoHigiene = document.querySelectorAll('.products-content')[2]
  for(let i = 0; i<products.length; i++){
    if(products[i].category == 'Higiene'){
    let produto = document.createElement('li')
    let title = document.createElement('p')
    let price = document.createElement('p')
    let category = document.createElement('p')
    let image = document.createElement('img')
    let imageDescription = document.createElement('p')

    if(products[i].image == undefined){
      image.src = "./img/products/no-img.svg"
    }
    else{
      image.src = products[i].image
    }
      title.innerText = products[i].title
      price.innerText = products[i].price
      category.innerText = products[i].category
      imageDescription.innerText = products[i].imageDescription
      produto.classList.add('product')
      title.classList.add('product-title')
      price.classList.add('product-price')
      category.classList.add('product-category')
      image.classList.add('product-img')
      secaoHigiene.classList.add('product-main')
      produto.append(image, title, category, price, imageDescription)
      ul.append(produto)
      secaoHigiene.appendChild(ul)
    }
  }
}
separaSecaoHigiene()