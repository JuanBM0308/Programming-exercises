/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
*/

function countSymbols(matrix) {
    let xCount = 0, oCount = 0;

    for (let row of matrix) {
        for (let cell of row) {
            if (cell === "X") xCount++;
            if (cell === "O") oCount++;
        }
    }

    return { xCount, oCount };
}

function checkWinner(matrix, symbol) {
    // filas y columnas
    for (let i = 0; i < 3; i++) {
        if (matrix[i].every(cell => cell === symbol)) return true;
        if (matrix.map(row => row[i]).every(cell => cell === symbol)) return true;
    }

    // diagonales
    if ([0, 1, 2].every(i => matrix[i][i] === symbol)) return true;
    if ([0, 1, 2].every(i => matrix[i][2 - i] === symbol)) return true;

    return false;
}

function winner(ticTacToe) {
    const { xCount, oCount } = countSymbols(ticTacToe);

    // Validar la proporción
    if (Math.abs(xCount - oCount) > 1 || oCount > xCount) return "Nulo";

    // Verificar ganadores
    let xWins = checkWinner(ticTacToe, "X");
    let oWins = checkWinner(ticTacToe, "O");

    // Si ambos ganaron, la matriz es inválida
    if (xWins && oWins) return "Nulo";

    // Si hay un solo ganador, devolverlo
    if (xWins) return "X";
    if (oWins) return "O";

    // Si la matriz está completa, es un empate
    if (xCount + oCount === 9) return "Empate";

    // Si no ha terminado, devolver "Nulo"
    return "Nulo";
}

let ticTacToe = [['X','O','X'],['X','O','O'],['X','X','O']];

for (row of ticTacToe) {
    console.log(row);
}

console.log(winner(ticTacToe));