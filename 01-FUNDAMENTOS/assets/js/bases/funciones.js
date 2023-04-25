function saludar(nombre){
    console.log('Hola ' + nombre + '!');
}

//Esto se conoce como una funcion anonima, esto es como una medida de seguridad
const saludar2 = function (nombre){
    console.log('Hola ' + nombre + ' desde una funcion anonima');
}

saludar('Ricardo');
saludar2('Ricardo');

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre + ' desde una funcion de flecha');
}

saludarFlecha('Ricardo');

// const sumar = (a,b) => {
//     return a + b;
// }

const sumar = (a,b) => a + b;

console.log(sumar(1,2));

// const getAleatorio = () => {
//     return Math.random();
// }

const getAleatorio = () => Math.random();

console.log(getAleatorio());

