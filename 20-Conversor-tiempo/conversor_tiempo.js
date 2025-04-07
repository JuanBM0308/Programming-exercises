/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
*/

// 1000 milisegundos equivale a 1 segundo

function passToMs(days, hours, minutes) {
    let minutesToMs = minutes * 60000;
    let hoursToMs = (hours * 60) * 60000;
    let daysToMs = ((days * 24) * 60) * 60000;

    return minutesToMs + hoursToMs + daysToMs;
}

let days = 1, hours = 10, minutes = 30, seconds = 45;

console.log(`${days} Día(s) - ${hours} Hora(s) - ${minutes} Minuto(s)\nEquivales a ${passToMs(days, hours, minutes)} Milisegundos`);

// ! Calificación ejercicio: 90/100
// ? Codigo optimizado por IA:

function passToMs(days, hours, minutes, seconds) {
    return ((days * 86400) + (hours * 3600) + (minutes * 60) + seconds) * 1000;
}

console.log(`${days} Día(s) - ${hours} Hora(s) - ${minutes} Minuto(s) - ${seconds} Segundo(s)\nEquivalen a ${passToMs(days, hours, minutes, seconds)} Milisegundos`);
