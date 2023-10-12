function creaTabellaTombola(){
    let tombolaTable= document.getElementById('tombolaTable');
    let numero=1;
    for(let row=0; row<10; row++) {
        if(numero>76){
            break;
        }
        let newRow= tombolaTable.insertRow(row);
        for (let col=0; col<8;col++){
            if(numero>76){
                break;
            }
            let newCell=newRow.insertCell(col);
            newCell.textContent=numero;
            numero++; 
        }
    }
}
creaTabellaTombola()

let table= document.createElement('table');
let thead= document.createElement('thead');
let tbody= document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table)