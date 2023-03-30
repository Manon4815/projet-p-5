var url = new URL(window.location.href);
const id = url.searchParams.get("id");
const cart__item__img = document.querySelector(".cart__item__img");
const totalPrice = document.querySelector("#totalPrice");
const cart__item__content__description = document.querySelector(".cart__item__content__description");
const totalQuantity = document.querySelector("#totalQuantity");
const productsContainer = document.querySelector("#cart__items");
const deleteItem = document.querySelector(".deleteItem");

//on va stocker nos produits avec toutes les infos du panier et de l api
let products =[];
let cart = [];
if(localStorage.cart !== undefined){
  cart = JSON.parse(localStorage.cart);
}

async function fetchProduits(){ 
  cart.forEach((item) => {
    fetch(`http://localhost:3000/api/products/`+item.id).then((response) =>{
      return response.json()
    }).then((data) =>{
      products.push({
        color : item.color,
        description : data.description,
        image : data.imageUrl,
        price : data.price,
        quantity : item.quantity,
        id : item.id,
        name : data.name,
      })
      affichePanier();
    })
  })
}

function affichePanier(){
  productsContainer.innerHTML = products.map((product) =>
  `
  <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
                <div class="cart__item__img">
                  <img src="${product.image}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>${product.price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" onchange="changeQuantity(event,'${product.id}','${product.color}')" value=${product.quantity}>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" onclick="deleteProduct('${product.id}','${product.color}')">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
  `)
  .join("");
  totalProduct();
}



function totalProduct() {
  let totalArticle = 0;
  let totalPrice = 0;
  products.forEach((product) => {
    console.log(product);
    totalArticle += product.quantity;
    totalPrice += product.quantity * product.price;
  })
  document.getElementById("totalQuantity").textContent = totalArticle;
  document.getElementById("totalPrice").textContent = totalPrice;
}

function changeQuantity(event, id, color){
  console.log("changeQuantity", event.target.value, color, id);
  let quantity = parseInt(event.target.value);
  cart.forEach((element) =>{
    if(element.id === id && element.color === color){
      //console.log(element)
      element.quantity = quantity
    }
  })
  //console.log(cart)
  localStorage.cart = JSON.stringify(cart)
  //faire la meme boucle sur le tableau products
  //appeler ensuite la function total product

  products.forEach((e) => {
    if(e.id === id && e.color === color){
      //console.log(e)
      e.quantity = quantity
    }
  })
  //console.log(products);
  localStorage.products = JSON.stringify(products)
  totalProduct();
  if(quantity === 0){
    deleteProduct(id, color)
  }
}

function deleteProduct(id, color){
  let index = cart.findIndex(element => element.id == id && element.color == color)
  console.log(index);
  cart.splice(index, 1)
  console.log(cart);
  localStorage.cart = JSON.stringify(cart)
  products.splice(index, 1)
  affichePanier();
}
window.addEventListener("load", fetchProduits);


//----------FORMULAIRE----------

let form = document.querySelector('#loginForm');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let address = document.querySelector('#address');
let city = document.querySelector('#city');
let email = document.querySelector('#email');
let order = document.querySelector('#order');

form.email.addEventListener('change', function() {
   validEmail(this); 
});
// valid email

const validEmail = function(inputEmail){
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );

  let testEmail = emailRegExp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;
  //nextElementSibling sa attrape la balise juste apres

    if(testEmail){
      errorEmail = false;
    }
    if(testEmail){
    small.innerHTML = 'Adresse non Valide';
    small.classList.remove('text-danger');
    small.classList.add('text-danger');
    errorEmail = true;
    }
    else{
      small.innerHTML = '';
      errorEmail = false;
    }
};

form.lastName.addEventListener('change', function() {
  validlastName(this);
});

const validlastName = function(inputlastName){
  let lastNameRegExp = new RegExp(
    '^[a-z]{1,2}$','g'
  );
  let testlastName = lastNameRegExp.test(inputlastName.value);
  let smallLastName = inputlastName.nextElementSibling;

  if(testlastName){
    errorLastName = false;
  }
  if(testlastName){
    smallLastName.innerHTML = 'Veuillez remplir ce champ';
    smallLastName.style.color = "#fbbcbc;"
    errorLastName = true;
  }
  else{
    smallLastName.innerHTML = '';
    errorfirstName = false;
  }
};

form.firstName.addEventListener('change', function() {
  validfirstName(this);
});


const validfirstName = function(inputfirstName){
  let firstNameRegExp = new RegExp(
    '^[a-z]{1,2}$','g'
  );

  let testfirtName = firstNameRegExp.test(inputfirstName.value);
  let smallfirstName = inputfirstName.nextElementSibling;

  if(testfirtName){
    errorfirstName = false;
    }
  if(testfirtName){
    smallfirstName.innerHTML = 'Format de champ incorrect'
    smallfirstName.style.color = "#fbbcbc;"
    errorfirstName = true;
  }
  else{
    smallfirstName.innerHTML = ''
    errorfirstName = false;
  }
}


//recupere le formulaire

  
  //envoyer l id du produit dans un tableau
  function idProduct() {
    let panierStock = [];
    for(let i = 0; i < cart.length; i++){
      panierStock.push(cart[i].id);
    }
  }

  order.addEventListener('click', (event) => {
  event.preventDefault();

    if (errorEmail === false && errorLastName === false && errorfirstName === false){
      let form ={
        firstName : document.getElementById(firstName.value),
        lastName : document.getElementById(lastName.value),
        address : document.getElementById(address.value),
        city : document.getElementById(city.value),
        email : document.getElementById(email.value)      
      }
      localStorage.form = JSON.stringify(form)
      console.log(form);
    }
  })

  const sendform = {
    method: 'POST'

  }