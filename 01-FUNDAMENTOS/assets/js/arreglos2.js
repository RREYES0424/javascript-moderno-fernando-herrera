let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ',juegos.length);
console.log('Largo: ',juegos[juegos.length - 1]);

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento,indice,arr});
});

juegos.push('Minecraft');

console.log({juegos});

juegos.unshift('Call Of Dutty');

console.log({juegos});

let juegoBorrado = juegos.pop();

console.log({juegoBorrado,juegos});

let pos = 1;

console.log(juegos);

let juegosBorrados = juegos.splice(pos, 2);

console.log({juegosBorrados,juegos});

let indexMetroid = juegos.indexOf('metroid');

console.log(indexMetroid);



