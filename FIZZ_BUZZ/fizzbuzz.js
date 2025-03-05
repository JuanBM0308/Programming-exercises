/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

function putFizz (num) {
    return num % 3 === 0;
}

function putBuzz (num) {
    return num % 5 === 0;
}

function putFizzBuzz(num) {
    return putFizz(num) && putBuzz(num);
}

function printNumbers () {
    for (let i = 0; i <= 100; i++) {
        if (i === 0) {
            console.log(`${i}) NO APLICA`);
        } else if (putFizzBuzz(i)) {
            console.log(`${i}) fizzbuzz`);
        } else if (putFizz(i)) {
            console.log(`${i}) fizz`);
        } else if (putBuzz(i)) {
            console.log(`${i}) buzz`);
        } else {
            console.log(`${i}) ${i}`);
        }
    }
}

printNumbers();

// ! Calificación por IA: 90/100