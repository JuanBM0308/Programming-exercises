/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
*/

function isPrime () {
    let arrayNums = [];
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        count = 0;
        
        for (let x = 1; x <= i; x++) {
            if (i % x == 0) {
                count += 1;
            }
        }

        if (count === 2) {
            arrayNums.push(i);
        }
    }

    return arrayNums;
}

function printPrimeNumbers() {
    console.log(`Los numeros primos son:\n${isPrime()}`);
}

printPrimeNumbers();

// ! Calificacion por IA: 70/100
// ? Mejora de la IA

function isNumberPrime(num) {
    if (num < 2) return false; // 0 y 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si tiene un divisor distinto de 1 y él mismo, no es primo
    }
    return true;
}

function getPrimeNumbers(limit) {
    let primeNumbers = [];
    for (let i = 2; i <= limit; i++) {
        if (isNumberPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

function printPrimeNumbers() {
    console.log(`Los números primos son:\n${getPrimeNumbers(100)}`);
}

printPrimeNumbers();
