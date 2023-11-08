fetch('https://striveschool-api.herokuapp.com/books')
.then((res)=> res.json())
.then((res)=>{
    res.forEach(immagine => {
        let img=document.createElement('img');
        img.src=immagine.img;
        document.querySelector('.card').appendChild(img);
        
       
        
    });

})

const newListItem=document.createElement('div');
newListItem.classList.add('card');

document.querySelector('.container').appendChild(newListItem);

const div=document.querySelector('.aggiungi')