fetch("http://localhost:3000/api/products").then(response => {
    return response.json()
}).then(data => {
    console.log(data);
    if(data.ok){
        response.json().then(data => {
            imgURL.src =data[0].url
        })
    }
});
