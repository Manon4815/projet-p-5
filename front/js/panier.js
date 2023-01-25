function saveCanap(canap){
    localStorage.setItem("canap",JSON.stringify(canap));
}

function getCanap(){
    let canap = (localStorage.getItem("canap"))
    if (canap == null){
        return [];
    }else{
        return JSON.parse(canap);
    }
}

function addCanap(product){
let canap = getCanap();
let foundProduct = canap.find (p => p.id == product.id);
if(foundProduct != undefined){
    foundProduct.quantity++;
}else{
    product.quantity = 1;
    canap.push(product);
}
saveCanap(canap);
}

function removeFromCanap(product){
    let canap = getCanap();
    canap = canap.filter(p => p.id =! product.id);
    saveCanap(canap);
}

function changeQuantity(product,quantity){
    let canap = getCanap();
    let foundProduct = canap.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromCanap(product);
        }else{
            saveCanap(canap);
        }
    }
}


