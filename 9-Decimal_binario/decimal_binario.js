/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
*/

let num = 50;

function parseToBinary(numToBinary) {
    let binary = '';
    let division = numToBinary;

    while (division > 0) {
        binary = (division % 2) + binary;
        division = Math.trunc(division / 2);
    }

    return binary;
}

function printNumBinary() {
    console.log(`\nEl numero ${num} en binario es: ${parseToBinary(num)}\n`);
}

printNumBinary();

// ! Calificación IA: 90/100
// ? Mejorar por IA

function parseToBinary(numToBinary) {
    if (numToBinary === 0) return "0"; // Caso especial

    let binary = '';

    while (numToBinary > 0) {
        binary = (numToBinary % 2) + binary;
        numToBinary = Math.trunc(numToBinary / 2);
    }

    return binary;
}

function printNumBinary() {
    console.log(`\nEl número ${num} en binario es: ${parseToBinary(num)}\n`);
}

printNumBinary();
