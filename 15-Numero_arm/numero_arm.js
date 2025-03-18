/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
*/

function isArmstrong(num) {
    let split = num.toString().split('');
    let arms = 0;

    for (let i = 0; i < split.length; i++) {
        arms += Math.pow(parseInt(split[i]), split.length);
    }

    return num === arms;
}

let num = 370;

console.log(`El numero ${num} es numero de Armstrong: ${isArmstrong(num)}`);

// ! Calificacion IA: 95/100
// ? Optimizacion de code

function isArmstrong(num) {
    let split = num.toString().split('');
    let arms = split.reduce((sum, digit) => sum + Math.pow(parseInt(digit), split.length), 0); // Usa reduce y el code se acorta
    return num === arms;
}