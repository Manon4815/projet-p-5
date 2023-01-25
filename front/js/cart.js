const productsContainer = document.querySelector("#items");
let form = document.querySelector('#loginForm');

let products =[];

form.email.addEventListener('change', function() {
   validEmail(this); 
});


async function fetchProduits(){ 
    await fetch(`http://localhost:3000/api/products/${id}`).then(response => {
        return response.json()
    }).then(data => product = data)
    productsDisplay();
}

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


