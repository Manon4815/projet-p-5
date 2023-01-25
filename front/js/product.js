var url = new URL(window.location.href);
const id = url.searchParams.get("id");
const source = document.querySelector("#item");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const colors = document.querySelector("#colors");
const idForm = document.querySelector(".item");
const btn_Panier = document.querySelector("#addToCart");
console.log(btn_Panier);

btn_Panier.addEventListener("click", (e)=> {
    e.preventDefault();
});

let couleur =[];
let product ={};
let optionProduct = {
    name: product.name,
    price: product.price,
}

console.log(optionProduct);



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
    for (couleur of product.colors){
        colors.innerHTML += `<option value="${couleur}">${couleur}</option>`;
    }
};

window.addEventListener("load", fetchProduits);



