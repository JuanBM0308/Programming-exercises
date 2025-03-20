/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra
 *  No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente
*/

const letters = {
    'A': 'a',    'B': 'b',  'C': 'c',  'D': 'd',   'E': 'e',
    'F': 'f',  'G': 'g',   'H': 'h',  'I': 'i',    'J': 'j',
    'K': 'k',   'L': 'l',  'M': 'm',    'N': 'n',    'O': 'o',
    'P': 'p',  'Q': 'q',  'R': 'r',   'S': 's',   'T': 't',
    'U': 'u',   'V': 'v',  'W': 'w',   'X': 'x',  'Y': 'y',
    'Z': 'z'
};

function uppercase(string) {
    let splitString = string.split(' ');
    let upperString = [];

    for (word of splitString) {
        for (const char in letters) {
            if (word[0] === char) {
                upperString.push(word);
            } else if (word[0] === letters[char]) {
                let convert = word.replace(word[0], char);
                upperString.push(convert)
            }
        }
    }
    return upperString.join(' ');
}

let string = 'hay Una gallina dorada';

console.log(uppercase(string));

// ! Calificacion del code: 50/100
// ? Codigo optimizado por IA

function uppercase(string) {
    let result = '';  
    let capitalize = true;  

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (capitalize && char >= 'a' && char <= 'z') {
            char = String.fromCharCode(char.charCodeAt(0) - 32);  
        }

        result += char;
        capitalize = (char === ' ');  
    }

    return result;
}

console.log(uppercase(string));
