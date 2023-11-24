"use strict";
const apiUrl = 'db.json';
fetch(apiUrl)
    .then(response => response.json())
    .then((tipologia) => {
    console.log(tipologia);
});
class CapoAbbigliamento {
}
() => ;
{
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
}
class Capo2 extends CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo, tipoChiusura, misura) {
        super(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo);
    }
}
