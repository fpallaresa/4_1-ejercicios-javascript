/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){    

    let deleteVowels = str.replaceAll (/[aeiouE]/g, "");
    return deleteVowels;

}

console.log(noVowels(sentence));