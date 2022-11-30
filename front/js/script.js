fetch("http://localhost:3000/api/products").then(response => {
    return response.json()
}).then(data => {
    console.log(data);
    let affichage ='<ul>';
    for(let object of data){
        affichage +='${object.imgURL}'
    }
    affichage += '</ul>';
    document.querySelector("#object").innerHTML = affichage;
});
