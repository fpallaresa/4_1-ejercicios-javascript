/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    
    let finalSentence = str.slice (1,29)
    return (finalSentence);

}

console.log(deleteFirsLast(sentence));