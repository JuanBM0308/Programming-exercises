/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/

const prompt = require('prompt-sync')({ sigint: true });

function getText() {
    let word = prompt('Ingrese su cadena de texto: ');
    return word;
}

function reverseText(word) {
    let splitText = word.split("");
    let reverseText = [];

    for (let i = splitText.length - 1; i >= 0; i--) {
        reverseText.push(splitText[i]);
    }   

    return reverseText.join("");
}

function printReverse() {
    let word = getText();
    console.log(`Texto original : ${word}\nTexto invertido: ${reverseText(word)}`);
}

printReverse();

// ! Calificacion IA: 85/100
// ? Optimizacion de code
// const prompt = require('prompt-sync')({ sigint: true });

function getText(input = null) {
    return input ?? prompt('Ingrese su cadena de texto: '); // Permite pruebas sin prompt
}

function reverseText(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]; // Construye el string al revés sin usar array extra
    }
    return reversed;
}

function printReverse() {
    let word = getText();
    console.log(`Texto original : ${word}\nTexto invertido: ${reverseText(word)}`);
}

printReverse();