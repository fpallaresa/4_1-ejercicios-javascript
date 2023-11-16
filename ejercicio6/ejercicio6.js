/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    let nOvejas = 0;
    let nVacas = 0;
    
    for (let i = 0; i < list1.length; i++){
        if (list1[i] === "o") {
            nOvejas++;
        } else if (list1[i] === "v") {
            nVacas++;
        }
    }

    for (let i = 0; i < list2.length; i++){
        if (list2[i] === "o") {
            nOvejas++;
        } else if (list2[i] === "v") {
            nVacas++;
        }
    }

    return { nOvejas, nVacas };
}

console.log(counter(rebano1, rebano2));