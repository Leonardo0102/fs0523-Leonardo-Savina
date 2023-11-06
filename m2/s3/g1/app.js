
class User{
    constructor(n,s,a,l){
        this.name=n;
        this.surname=s;
        this.age=a;
        this.location=l;
        this.mostraDettagliEtà();

    }
    mostraDettagliEtà(){
       return `il mio nome è ${this.name}, la mia età è${this.age} `;
       
    }
    
}

let persona= new User('Leonardo', 'Bianchi',30,'Roma');
let persona2= new User ('Federico','Rossi',32,'Milano');

console.log(persona);


 
function User (persona,persona2){
    if(persona.age>persona2.age){
        return 'è più vecchio';
    }else{
        return 'è più giovane';
    }
}


