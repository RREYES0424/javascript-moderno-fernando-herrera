class Persona{
    nombre = '';
    edad = 0;
    pais = '';
    constructor(nombre = 'Sin Nombre',edad = 'Sin edad',pais = 'Sin pais'){
        this.nombre = nombre,
        this.edad = edad,
        this.pais = pais
    }
    presentar(){
        console.log(`Hola! mi nombre es ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`);
    }
}

const ricardo = new Persona('Ricardo Reyes Flores',23,'Mexico');
console.log(ricardo);
ricardo.presentar();

const ironman = new Persona('Tony Stark',35,'California');
ironman.presentar();