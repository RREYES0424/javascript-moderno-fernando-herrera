let personaje = {
    nombre : 'Tony Stark',
    codeName : 'Iron Man',
    poder : 5000,
    daño : 300,
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

console.log({personaje});
console.log('Nombre: ',personaje.nombre);
console.log('Num Trajes: ', personaje['trajes'].length);

console.log('Traje Actual: ',personaje['trajes'][1]);
console.log('Latitud: ', personaje['coords']['lng']);

const x = 'isActive';

console.log('Esta vivo: ',personaje[x]);



