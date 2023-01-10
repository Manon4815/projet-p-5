let form = document.querySelector('#loginForm');

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


/*
// validation password

const validPassword = function(inputPassword){
   let msg; 
   let valid = false; 
   if(inputPassword.value.length < 3){
    msg ='le mot de passe doit contenir au moins 3 caracteres';
   }
   else if(!/[A-Z]/.test(inputPassword.value)){
    msg ='le mot de passe doit contenir au moins 1 majuscule';
   }   
   else if(!/[a-z]/.test(inputPassword.value)){
    msg ='le mot de passe doit contenir au moins 1 minuscule';
   }
   else if(!/[0-9]/.test(inputPassword.value)){
    msg ='le mot de passe doit contenir au moins 1 chiffre';
   }
   //mdp valide
   else{
    msg =' mot de passe est Valide';
   }
};
*/