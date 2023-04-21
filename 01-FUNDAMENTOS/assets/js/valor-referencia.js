let a = 10, b = a;
a = 30;
console.log({a,b});

let juan = {nombre : 'Juan'};
// let ana = juan;
let ana = {...juan}
ana.nombre = 'Ana';
console.log({juan,ana});

// const cambiaNombre = (persona) => {
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}
 
let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});


//Arreglos
const frutas = ['Manzana','Pera','Piña'];
// const otrasFrutas = frutas;
//console.time('Spread');
//const otrasFrutas = [...frutas]; //Con esto le decimos que haga otro arreglo, y con el operador ... rompemos la relacion, este operador es mas rapido que con slice
//console.timeEnd('Spread);

const otrasFrutas = frutas.slice(); //Aqui le decimos que corte el arreglo y regrese los elementos que especificmos, pero si no mandamos argumentos, devuelve un nuevo arreglo rompiendo la relacion

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});
