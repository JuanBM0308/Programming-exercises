/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
*/

const prompt = require('prompt-sync')({sigint:true});

function polygonArea(polygon) {
    polygon = polygon.toLowerCase();
    let base = 0;
    let height = 0;
    let area = 0;

    switch (polygon) {
        case 'triangulo':
            base = parseFloat(prompt('Digite la base: '));
            height = parseFloat(prompt('Digite la altura: '));
            area = (base * height)/2;
            console.log(`El area del ${polygon} es: ${area}cm²`);
            break;

        case 'cuadrado':
            base = parseFloat(prompt('Digite la base: '));
            area = Math.pow(base, 2); // -> base * base
            console.log(`El area del ${polygon} es: ${area}cm²`);
            break;

        case 'rectangulo':
            base = parseFloat(prompt('Digite la base: '));
            height = parseFloat(prompt('Digite la altura: '));
            area = base * height;
            console.log(`El area del ${polygon} es: ${area}cm²`);
            break;

        default:
            console.log('Figura no reconocida');
            
    }
}

polygonArea('rectangulo');

// ! Calificacion por IA: 85/100
// ? Optimizacion code por IA
// const prompt = require('prompt-sync')({sigint: true});

//const prompt = require('prompt-sync')({ sigint: true });

function polygonArea(polygon) {
    polygon = polygon.toLowerCase(); // Convertimos a minúsculas para evitar errores

    switch (polygon) {
        case 'triangulo':
            calculateTriangleArea();
            break;

        case 'cuadrado':
            calculateSquareArea();
            break;

        case 'rectangulo':
            calculateRectangleArea();
            break;

        default:
            console.log('Figura no reconocida');
    }
}

function calculateTriangleArea() {
    let base = parseFloat(prompt('Digite la base: '));
    let height = parseFloat(prompt('Digite la altura: '));
    let area = (base * height) / 2;
    console.log(`El área del triángulo es: ${area} cm²`);
}

function calculateSquareArea() {
    let side = parseFloat(prompt('Digite el lado del cuadrado: '));
    let area = Math.pow(side, 2); // O simplemente side * side
    console.log(`El área del cuadrado es: ${area} cm²`);
}

function calculateRectangleArea() {
    let base = parseFloat(prompt('Digite la base: '));
    let height = parseFloat(prompt('Digite la altura: '));
    let area = base * height;
    console.log(`El área del rectángulo es: ${area} cm²`);
}

// Ejemplo de uso:
polygonArea('rectangulo');

