/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
*/

function race(arrayString, rink) {
    if (arrayString.length !== rink.length) {
        return '\nLa carrera y las acciones no son equivalentes\n';
    }

    let track = rink.split('');
    let passed = true;

    for (let i = 0; i < track.length; i++) {
        let status = track[i] + arrayString[i];

        switch (status) {
            case '_jump':
                console.log('Fallo en suelo');
                track[i] = 'x';
                passed = false;
                break;
            case '|run':
                console.log('Fallo en valla');
                track[i] = '/';
                passed = false;
                break;
        }
    }

    console.log(`Resultado de la carrera: ${track.join('')}`);
    return passed;
}

let rink = '__|';
let arrayString = ['run', 'run', 'jump'];

console.log(race(arrayString, rink));

// ! Calificacion IA: 90/100
// ? Aspectos a mejorar: 

function race(arrayString, rink) {
    if (arrayString.length !== rink.length) {
        return { error: 'La carrera y las acciones no son equivalentes' };
    }

    let track = rink.split('');
    let passed = true;

    // Definimos las reglas con un objeto
    const errors = {
        '_jump': 'x',
        '|run': '/',
    };

    for (let i = 0; i < track.length; i++) {
        let status = track[i] + arrayString[i];

        if (errors[status]) {
            track[i] = errors[status];
            passed = false;
        }
    }

    return { track: track.join(''), passed };
}

console.log(race(arrayString, rink));
