const source = document.querySelector("#item");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const colors = document.querySelector("#colors");
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
    title.innerText = '${item.title}'
    
};

window.addEventListener("load", fetchProduits);
