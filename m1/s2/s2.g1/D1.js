/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono:stringa,numerico,booleano. stringa sono dei dati di tipo testualee,le parole all'interno devono essere inserite 
all'interno di"---"o'---' per numerico intendiamo tutti i numeri inseriti anche i decimali possono essere inseriti ma cosa molto importante è specificarli tramitipunto e non virgola.
Il datatype booleano serve per prendere delle decisioni ed ammette solo due risposte true o false

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let mio_nome="leonardo";
console.log(mio_nome);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

*/

let a=7
let b=8
console.log(a+b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/ 
const MIO_NOME='leonardo'
const PERSONA={
  nome:'leonardo',
  cognome:'savina'

}
PERSONA.nome='leonardo'
console.log(PERSONA)
/*non compare nulla sul terminale,per ovviare al problema usare la regola OBJECT FREEZE(PERSONA)/*


  



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let c=4
console.log(x-c)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1='john'
let name2='John'
 console.log(name1!=name2)

 let name3='john'
 let name4='john'
 console.log(name3==name4)
