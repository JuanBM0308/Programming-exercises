/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
*/

let arrayFibonacci = [0, 1];

let num0 = arrayFibonacci[0];
let num1 = arrayFibonacci[1];

for (let i = 3; i <= 50; i++) {
    let fibo = num0 + num1;

    num0 = num1;
    num1 = fibo;

    arrayFibonacci.push(fibo);
}

console.log(arrayFibonacci);

// ! Calificacion por IA: 85/100
// ? Codigo optimizado

function generateFibonacci(n) {
    let arrayFibonacci = [0, 1];
    let num0 = arrayFibonacci[0];
    let num1 = arrayFibonacci[1];

    for (let i = 2; i < n; i++) {  // * Se corrige el inicio del loop
        let fibo = num0 + num1;
        num0 = num1;
        num1 = fibo;
        arrayFibonacci.push(fibo);
    }

    return arrayFibonacci;
}

console.log(generateFibonacci(50));
