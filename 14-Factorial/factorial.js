/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
*/

function factorialOf(num) {
    if (num < 0) {
        return 'no tiene factorial';
    } else if (num <= 1) {
        return 1;
    } else {
        let factorial = num * factorialOf(num - 1);
        return factorial;
    }
}

let num = 3;
console.log(`\nEl factorial de ${num} es ${factorialOf(num)}\n`);

// ! Calificacion IA: 95/100
// ? Puntos a mejorar

function factorialOf(num) {
    if (num < 0) return null; // O lanzar un error
    if (num <= 1) return 1;
    return num * factorialOf(num - 1);
}

console.log(`\nEl factorial de ${num} es ${factorialOf(num)}\n`);