/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
*/

const date1 = new Date("2021/11/30");
const date2 = new Date("2024/01/30");

function calculateDays(date1, date2) {
    if (date1 === 'Invalid Date' || date2 === 'Invalid Date') {
        return '** No es posible realizar el calculo **';
    } else {
        let diff = date2.getTime() - date1.getTime();
        return Math.round(diff / (1000 * 60 * 60 * 24));
    }
}

console.log('Días transcurridos: ' + calculateDays(date1, date2));

// ! Calificacion por IA: 75/100
// ? Codigo optimizado por IA:

function calculateDays(dateStr1, dateStr2) {
    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split('/').map(Number);
        const date = new Date(year, month - 1, day); // Restamos 1 al mes porque en JS los meses van de 0 a 11
        if (isNaN(date.getTime())) {
            throw new Error(`Fecha inválida: ${dateStr}`);
        }
        return date;
    }

    const date1 = parseDate(dateStr1);
    const date2 = parseDate(dateStr2);

    const diff = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(diff / (1000 * 60 * 60 * 24));
}

// Ejemplo de uso:
console.log('Días transcurridos:', calculateDays("30/11/2021", "30/01/2024"));
