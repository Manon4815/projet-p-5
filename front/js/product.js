var url = new URL(window.location.href);
const id = url.searchParams.get("id");
const source = document.querySelector("#item");
const item__img = document.querySelector(".item__img");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const colors = document.querySelector("#colors");
const price = document.querySelector("#price")
const idForm = document.querySelector(".item");
const btn_Panier = document.querySelector("#addToCart");
const quantity = document.querySelector("#quantity");
console.log(btn_Panier);


let couleur =[];
let product ={};


btn_Panier.addEventListener("click", (e)=> {
    
    addPanier();
    
});


function addPanier(){
    //console.log(quantity);
    console.log("bien ajouté au panier");
    //console.log(quantity.value);
    //console.log(parseInt(quantity.value));
    let nmbArticle = parseInt(quantity.value);
    let colorsArticle = colors.value;
    let cart = [];
    if(localStorage.cart !== undefined){
        cart = JSON.parse(localStorage.cart);
    }
    cart.push({
        id : id,
        color: colorsArticle,
        quantity: nmbArticle,
    })
    localStorage.cart=JSON.stringify(cart);
    changeQuantity();
}

 function changeQuantity(){
    quantityProduct = JSON.parse(localStorage.getItem("stock"));
    if (cart._id == id && cart.color == cart.color){
        let additionQuantity = parseInt(quantity.value) + parseInt(cart.quantity);
        additionQuantity = JSON.stringify(additionQuantity);
        return (localStorage.stock = JSON.stringify(cart));
    }
 }







async function fetchProduits(){ 
    await fetch(`http://localhost:3000/api/products/${id}`).then(response => {
        return response.json()
    }).then(data => product = data)
    productsDisplay();
}

function productsDisplay(){
    item__img.innerHTML = `<img src="${product.imageUrl}">`;
    title.innerText = `${product.name}`
    price.innerText = `${product.price}`
    description.innerText = `${product.description}`
    colors.innerText = `${product.colors}`
    for (couleur of product.colors){
        colors.innerHTML += `<option value="${couleur}">${couleur}</option>`;
    }
};

window.addEventListener("load", fetchProduits);



