/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
*/

const morseCode = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};
 
const text = 'Loro*#';

function clearText(incorrectText) {
    let cleanText = incorrectText.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase();
    return cleanText;
}

function textToMorse(text) {
    let correctText = clearText(text);
    let arrayText = [];
    let textMorse = [];

    for (const letter of correctText) {
        arrayText.push(letter);
    }

    for (let i = 0; i < arrayText.length; i++) {
        for (const index in morseCode) {
            if (arrayText[i] === index) {
                textMorse.push(morseCode[index]);
            }
        }
    }

    return textMorse.join(' ');
}

console.log(`\nTexto original: ${text}`);
console.log(`Texto en morse: ${textToMorse(text)}`);

// ! Calificacionm IA: 85/100
// ? Mejorar convertir morse a texto natural y evitar los bucles innecesarios
// * Optimizazcion por IA 

// Crear un objeto inverso para decodificación Morse a texto
const morseToText = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));

function clearText(incorrectText) {
    return incorrectText.replace(/[^a-zA-Z0-9 ]/g, '').toUpperCase();
}

function textToMorse(text) {
    let correctText = clearText(text);
    return correctText.split('').map(letter => morseCode[letter]).join(' ');
}

function morseToNormal(morse) {
    return morse.split(' ').map(symbol => morseToText[symbol] || '').join('');
}

function detectAndConvert(input) {
    return input.includes('.') || input.includes('-') ? morseToNormal(input) : textToMorse(input);
}

console.log(`\nTexto original: ${text}`);
console.log(`Texto en morse: ${textToMorse(text)}`);
