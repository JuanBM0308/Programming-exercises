/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
*/

const testString = '(2 * 5) + (1 - 2)';

const arraySigns = ['(',')','[',']','{','}'];

function cleanString(testString) {
    let string = testString.replace(/[^[\](){}]/g, '');
    return string;
}

function checkString(testString) {
    let string = cleanString(testString).split('');
    let stack = [];

    for (index of string) {
        if (index.includes('{')) {
            stack.push(index);
        }

        if (index.includes('[')) {
            stack.push(index);
        }

        if (index.includes('(')) {
            stack.push(index);
        }

        if (index.includes(')')) {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        }

        if (index.includes(']')) {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        }

        if (index.includes('}')) {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(checkString(testString));

// ! Calificacion IA: 75/100
// ? Codigo optimizado por IAfunction checkString(expression) {


function checkString(expression) {
    const pairs = { '(': ')', '[': ']', '{': '}' };
    const stack = [];

    for (const char of expression) {
        if (char in pairs) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (!stack.length || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkString(testString));  // false