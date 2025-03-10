/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
*/

let string = 'Gato gato# GaTo. gato gatto Perro';

function organizeString(incorrectString) {
    let replaceString = incorrectString.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    return replaceString;
}

function stringToArray(correctString) {
    let splitString = correctString.split(' ');
    return splitString;
}

function countString(string) {
    let correctString = organizeString(string);
    let arrayString = stringToArray(correctString);

    let objectString = {};

    for (let i = 0; i < arrayString.length; i++) {
        let word = arrayString[i]; 
        if (objectString[word]) {
            objectString[word]++;
        } else {
            objectString[word] = 1;
        }
    }

    return objectString;
}

function printCountString() {
    console.log(`Texto original: ${string}`);    
    console.log("Conteo de palabras:", countString(string));
}

printCountString();

// ! Calificacion por IA: 90/100
// ? Correciones por IA -> Poner las funciones de stringToArray a organizeString, pues hace evitar el reroceso de la palabra, y se genera
// ? directamente el array.
