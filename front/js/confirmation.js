let container = document.querySelector("#limitedWidthBlock");
let id = document.querySelector("#orderId");


let test = JSON.parse( localStorage.panierStock );
id.textContent = test.products;
