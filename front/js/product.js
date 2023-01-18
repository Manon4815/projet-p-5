var url = new URL(window.location.href);
const id = url.searchParams.get("id");
const source = document.querySelector("#item");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const colors = document.querySelector("#colors");



let product ={};

async function fetchProduits(){ 
    await fetch(`http://localhost:3000/api/products/${id}`).then(response => {
        return response.json()
    }).then(data => product = data)
    productsDisplay();
}

function productsDisplay(){
    title.innerText = `${product.name}`
    price.innerText = `${product.price}`
    description.innerText = `${product.description}`
    colors.innerText = `${product.colors}`
    
};

window.addEventListener("load", fetchProduits);
