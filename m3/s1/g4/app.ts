
const apiUrl:string='db.json'

fetch(apiUrl)
.then(response=>response.json())
.then((tipologia: any[]) => {
    console.log(tipologia)


})

class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: boolean;
    saldo: number;

      constructor(
        id: number=23,
    codprod: number=1234,
    collezione: string='armani',
    capo: string='giacca',
    modello: number=4345,
    quantita: number=6747,
    colore: string='black',
    prezzoivaesclusa: number=395,
    prezzoivainclusa: number=543,
    disponibile: boolean=true,
    saldo: number=5678,
    getsaldocapo():number
       
       ) {
      this.id=id;
      this.codprod=codprod;
      this.collezione=collezione;
      this.capo=capo;
      this.modello=modello;
      this.quantita=quantita;
      this.colore=colore;
      this.prezzoivaesclusa=prezzoivaesclusa;
      this.prezzoivainclusa=prezzoivainclusa;
      this.disponibile=disponibile;
      this.saldo=saldo

      }

     

    }

class Capo2 extends CapoAbbigliamento{

    constructor(
        id: number,
        codprod: number,
        collezione: string,
        capo: string,
        modello: number,
        quantita: number,
        colore: string,
        prezzoivaesclusa: number,
        prezzoivainclusa: number,
        disponibile:boolean,
        saldo: number,
        tipoChiusura: string,
        misura: number
      ) {
        
        super(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo);
    
      
}
}
