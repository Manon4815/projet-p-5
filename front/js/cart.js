var url = new URL(window.location.href);
const id = url.searchParams.get("id");
const cart__item__img = document.querySelector(".cart__item__img");
const totalPrice = document.querySelector("#totalPrice");
const cart__item__content__description = document.querySelector(".cart__item__content__description");
const totalQuantity = document.querySelector("#totalQuantity");
const productsContainer = document.querySelector("#limitedWidthBlock");
let products =[];


async function fetchProduits(){ 
  await fetch(`http://localhost:3000/api/products/`).then(response => {
      return response.json()
  }).then(data => product = data)
    affichePanier();
}

function affichePanier(){
  let img_item = parseInt(cart__item__img);
  let descriptionContent = parseInt(cart__item__content__description);
  let priceProduct= totalPrice.value;
  let cart = [];
    if(localStorage.cart !== undefined){
      cart = JSON.parse(localStorage.cart);
      console.log("test");
  }
  let founded = false;
    if (cart.length != 0) {
            for (let i = 0; i < cart.length; i++) {
              console.log(cart[i]);
              if (cart[i].id == id && cart[i].color == colorsArticle) {
                founded = true;
                cart.push({
                  price: priceProduct,
                  img: img_item,
                  description: descriptionContent,
                })     
              }
            }
          } if(founded == false) {
            document.querySelector("#totalQuantity").innerHTML = "0";
            document.querySelector("#totalPrice").innerHTML = "0";
            document.querySelector("h1").innerHTML =
            "Vous n'avez pas d'article dans votre panier";
          }
        localStorage.cart=JSON.stringify(cart);
      }


/*
function totalProduct() {
    let totalArticle = 0;
    let totalPrice = 0;
    const cart = document.querySelectorAll(".cart__item");
      totalArticle += JSON.parse(cart.quantité);
      totalPrice += cart.quantité * cart.price;
      document.getElementById("totalQuantity").textContent = totalArticle;
      document.getElementById("totalPrice").textContent = totalPrice;
    };
    */

window.addEventListener("load", fetchProduits);






/*let form = document.querySelector('#loginForm');

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

        if(testEmail){
            small.innerHTML = 'Adresse Valide';
            small.classList.remove('text-success');
            small.classList.add('text-success');
        }
        else{
            small.innerHTML = 'Adresse non Valide';
            small.classList.remove('text-danger');
            small.classList.add('text-danger');
        }
};
*/
