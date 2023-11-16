/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){

    let element1 = list [0];
    let element2 = list [1];
    let element3 = list [2];
    let element4 = list [3];
    let element5 = list [4];
    let element6 = list [5];
    sum = element1 + element2 + element3 + element4 + element5 + element6 ;
    
    return sum;

}

console.log(sumList(numberList));