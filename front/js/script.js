const productsContainer = document.querySelector(".titles");
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
    <div class="card>
    <img src=${sofa.imageUrl.jpeg} alt="sofa ${sofa.name} >
    <h2>${sofa.name}</h2>
    <h4>${sofa.price}</h4>
    </div>
 `)
 .join("");
}

window.addEventListener("load", fetchProduits);