/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){
    
    let countCharacters = str.length;
    let midCharacter = (countCharacters / 2);

    return (countCharacters % 2 === 0) ? str.slice(midCharacter - 1, midCharacter + 1) : str.charAt(midCharacter);

}

console.log(middleCharacter(word));