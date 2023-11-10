


fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmI3ZTk1ZDRmNjAwMTg1NjI1MjciLCJpYXQiOjE2OTk2MDk0NzAsImV4cCI6MTcwMDgxOTA3MH0.8CLjsE9e1nPP70GWGL5hjkvdP7tX4w9Iocvcbm3GB7Q"
}


})
.then(res=> res.json())
.then(telefoni=>{

    pizze.forEach((telefoni,i)=>{
        let clone = getClone();
        let id=clone.querySelector('.id');
        let modello=clone.querySelector('.modello');
        let prezzo=clone.querySelector('.prezzo');
        let disponibile=clone.querySelector('.disponibile');

        id.innerText=(i+1);
        id.innertext=telefoni.id
        modello.innertext=telefoni.modello
        prezzo.innertext=telefoni.prezzo
        disponibile.innertext=telefoni.disponibile

        document.querySelector('#lista').prepend(clone)
    })
})

function getClone(){
    let temp=document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}

