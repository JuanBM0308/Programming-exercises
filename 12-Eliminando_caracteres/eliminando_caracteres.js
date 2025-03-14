/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.

 TODO: Mayusculas y minusculas se toman como un mismo valor, es decir
 -> A = a ; B = b ; etc...
*/


function findDifferences(str1, str2) {
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    let out1 = [...lowerStr1].filter(char => !lowerStr2.includes(char)).join('');
    let out2 = [...lowerStr2].filter(char => !lowerStr1.includes(char)).join('');

    return `\nSalida 1: ${out1}\nSalida 2: ${out2}`;
}

console.log(findDifferences('Loro','Gato'));

// ! Calificacion IA: 95/100
// ? Correciones: Pensar en el Big O, pues el algoritmo llega hasta un O2 ;-;