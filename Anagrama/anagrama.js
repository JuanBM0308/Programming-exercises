/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const prompt = require('prompt-sync')({ sigint : true });

function wordUser() {
    let wordOne = prompt('Digite la primer palabra: ');
    let wordTwo = prompt('Digite la segunda palabra: ');
    return {wordOne, wordTwo};
}

function isAnagram() {
    let equals = false;

    let wordArray = wordUser();

    if (wordArray.wordOne.toLocaleLowerCase() == wordArray.wordTwo.toLocaleLowerCase()) {
        return equals;
    }
    
    let wordOneSplit = wordArray.wordOne.split("");
    let wordTwoSplit = wordArray.wordTwo.split("");

    wordOneSplit.sort();
    wordTwoSplit.sort();

    for (let i = 0; i < wordOneSplit.length; i++) {
        equals = wordOneSplit.includes(wordTwoSplit[i]);
    }

    return equals;
}

function prinResponse() {
    let resonseBool = isAnagram();
    console.log(`\nEs anagrama: ${resonseBool}`);
}

prinResponse();

// ! Calificación IA 65/100, correcion
//const prompt = require('prompt-sync')({ sigint: true });

function getWords() {
    let wordOne = prompt('Digite la primera palabra: ').toLowerCase();
    let wordTwo = prompt('Digite la segunda palabra: ').toLowerCase();
    return { wordOne, wordTwo };
}

function isAnagram(wordOne, wordTwo) {
    if (wordOne === wordTwo) return false;

    return wordOne.split("").sort().join("") === wordTwo.split("").sort().join("");
}

function printResponse() {
    let { wordOne, wordTwo } = getWords();
    console.log(`\nEs anagrama: ${isAnagram(wordOne, wordTwo)}`);
}

printResponse();
