class Smartphone {
     private carica:number;
    private numeroChiamate:number;
    private costoMinuto:number;

    constructor(){
        this.carica=0;
        this.numeroChiamate=0;
        this.costoMinuto= 0.20;
    }
    ricarica(euro:number):void{
        this.carica+=euro;
    }

    numero404():string{
        return `credito residuo: ${this.carica.toLocaleString('it-It')}`

        
        }
        getNumeroChiamate():number{
            return this.numeroChiamate
    }

    chiamata(minuti:number):void{
        const costoChiamata= minuti * this.costoMinuto;
        if(this.carica >= costoChiamata){
            this.carica -= costoChiamata;
            this.numeroChiamate ++;
            console.log(`chiamata di ${minuti} minuti. costo ${costoChiamata}euro`)

        } else{
            console.log('Credito insufficiente');
        }
        
        }
        azzeraChiamate():void{
            this.numeroChiamate=0
    }
    calcoloCostoAlMinuto():number{
        return this.numeroChiamate > 0? this.costoMinuto*this.numeroChiamate :0;

    }
    
}

const telefono1= new Smartphone();


telefono1.ricarica(50);
console.log(telefono1.numero404());

telefono1.chiamata(20);
console.log(telefono1.getNumeroChiamate());

telefono1.chiamata(10);
console.log(telefono1.getNumeroChiamate());
telefono1.chiamata(16);
console.log(telefono1.getNumeroChiamate());

telefono1.azzeraChiamate();
console.log(telefono1.getNumeroChiamate());