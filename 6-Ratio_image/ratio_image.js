/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
*/

// * Usamos jimp para leer el tamaño de las imagenes 
// npm install jimp axios -> jimp = tamaño ; axios = descargar imagen desde url

const axios = require('axios');
const fs = require('fs'); // Guardar la imagen en disco
const { Jimp } = require('jimp'); // Escanear imagen

async function downloadImage(url, filePath) {
    try {
        const response = await axios({
            url,
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(filePath, response.data);
        console.log('\n-> Imagen descargada con éxito');
        return filePath; // Retornamos la ruta de la imagen para usarla después
    } catch (error) {
        console.error('\n** Error descargando la imagen:', error.message);
        throw error; // Lanzamos el error para manejarlo arriba
    }
}

async function getImageSize(imagePath) {
    try {
        const image = await Jimp.read(imagePath);
        console.log(`\n-> Ancho: ${image.bitmap.width}px, Alto: ${image.bitmap.height}px`);
        return { width: image.bitmap.width, height: image.bitmap.height };
    } catch (error) {
        console.error('\n** Error procesando la imagen:', error.message);
        throw error;
    }
}

function leastCommonDivisor(width, height) {
    return height === 0 ? width : leastCommonDivisor(height, width % height);
}

function calculateAspectRatio(width, height) {
    const mcd = leastCommonDivisor(width, height);
    return `${width / mcd}:${height / mcd}`;
}

async function printAspectRatio(imageUrl, filePath) {
    try {
        // Descargar imagen
        await downloadImage(imageUrl, filePath);

        // Obtener dimensiones
        const { width, height } = await getImageSize(filePath);

        // Calcular y mostrar el aspecto
        console.log(`\nEl aspect ratio de la imagen es ${calculateAspectRatio(width, height)}`);
    } catch (error) {
        console.error("\n** Error al calcular el aspect ratio:", error.message);
    }
}

// Ejecutar todo con una imagen de prueba
const imageUrl = 'https://images.steamusercontent.com/ugc/933804182307046065/1D3E2A6A6C93E2F1D08885AB737F48CA87F8D5CE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
const filePath = 'zero_two.jpg';

printAspectRatio(imageUrl, filePath);

// ! Calificacion por IA:  95/100
// ? No tiene aspectos a mejorar