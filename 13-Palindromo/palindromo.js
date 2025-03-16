/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
*/

let palindrome = 'Ana lleva al oso la avellana';

function isPalindrome(string) {
    let organize = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverse = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('');

    return organize === reverse;
}

console.log(`\nLa palabra ${palindrome} es palindromo: ${isPalindrome(palindrome)}\n`);

// ! Calificacion IA: 95/100
// ? Aspectos a mejorar:
/*
 ? Observaciones de mejora:
 ? - Se está aplicando `.replace()` y `.toLowerCase()` dos veces, lo que genera redundancia.
 ? - `reverse` podría calcularse desde `organize`, evitando procesar el string original dos veces.
 ? - La versión optimizada hace la limpieza del string solo una vez, mejorando la eficiencia.
*/

function isPalindrome(string) {
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('');
}

console.log(`\nLa palabra ${palindrome} es palindromo: ${isPalindrome(palindrome)}\n`);