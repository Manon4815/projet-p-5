const productsContainer = document.querySelector("#items");
let products =[];

async function fetchProduits(){ 
    await fetch("http://localhost:3000/api/products").then(response => {
        return response.json()
    }).then(data => (products = data));
        console.log(products) 
        for(let i = 0; i < products.length; i++){
         console.log(products[i])
        }
    productsDisplay();
}

function productsDisplay(){
    productsContainer.innerHTML = products.map((sofa) => 
    `
    <a href="./product.html?id=${sofa._id}">
    <article>
      <img src="${sofa.imageUrl}" alt="sofa ${sofa.name}">
      <h3 class="productName">${sofa.name}</h3>
      <p class="productDescription">${sofa.description}</p>
    </article>
    </a>
    `)
    .join("");
   }

window.addEventListener("load", fetchProduits);


