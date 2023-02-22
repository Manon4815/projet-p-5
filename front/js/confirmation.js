const productsContainer = document.querySelector("#limitedWidthBlock");
let products =[];

async function fetchProduits(){ 
    await fetch("http://localhost:3000/api/products").then(response => {
        return response.json()
    }).then(data => (products = data));
        console.log(products) 
        for(let i = 0; i < products.length; i++){
         console.log(products[i])
        };
}

window.addEventListener("load", fetchProduits);