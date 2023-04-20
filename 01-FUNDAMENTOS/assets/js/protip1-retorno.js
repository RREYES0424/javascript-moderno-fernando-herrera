// const crearPersona = (nombre,apellido) => {
//     return {
//         nombre : nombre,
//         apellido : apellido
//     }
// }

// const crearPersona = (nombre,apellido) => {
//     return {
//         nombre,   CUANDO RECIBIMOS UN VALOR Y LO RETORNAMOS CON EL MISMO NOMBRE
//         apellido PODEMOS HACER ESTO
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});
const persona = crearPersona('Ricardo', 'Reyes');
console.log(persona);

// const imprimeArgumentos = () => {
//     console.log(arguments);
// }


const imprimeArgumentos = (...args) => console.log(args);
//CON EL OPERADOR REST LE DECIMOS QUE HAGA UN ARREGLO CON TODOS LOS ARGUMENTOS QUE ENVIAMOS, DESPUES DEL PARAMETRO REST NO PUEDE VENIR NINGUN OTRO ARGUMENTO

imprimeArgumentos(10,true,false,'Ricardo');

let personaje2 = {
    nombre : 'Tony Stark',
    codeName : 'Iron Man',
    poder : 5000,
    danio : 300,
    vida : 1000,
    isActive : true,
    coords: {
        lng : 34.034,
        lat : -118.70,
    },
    trajes : ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion : {
        zip : '10880, 90265',
        ubicacion : 'Malibu, California'
    },
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.poder);
//     console.log(personaje.danio);
//     console.log(personaje.vida);
// }


//DESESTRUCTURACION DE ARGUMENTOS
const imprimePropiedades = ({nombre,codeName,danio = 100,vida = 500,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({danio});
    console.log({vida});
    console.log({trajes});
}

imprimePropiedades(personaje2);


