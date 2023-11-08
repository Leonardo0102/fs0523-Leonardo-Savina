let cartStorage=localStorage.getItem('cart');
let cartArray=cartStorage?JSON.parse(cartStorage):[];
console.log(cartArray);

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((libri) => {
    let target = document.querySelector("#target");
    libri.forEach((libro) => {
       
       
        //creo un clone
      let clone = getCardClone();
       
      
      
      //identifico i pezzi con cui interagire
      let img = clone.querySelector(".card-img-top");
      let title = clone.querySelector(".card-title");

      let price = clone.querySelector(".card-price");
      let addTocart= clone.querySelector('.addToCart');
       
      
      
      //modifico i pezzi appe identificati
      img.src = libro.img;
      title.innerText = libro.title;

      price.innerText = libro.price;
      addTocart.addEventListener('click',()=>{
        cartArray.push(libro);
        localStorage.setItem('cart',JSON.stringify(cartArray));
      })


      //faccio si che questi cloni appaiano
      target.append(clone);
    });
  });

function getCardClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}
