class Persona{
    nombre = '';
    edad = 0;
    pais = '';
    comida = '';

    constructor(nombre = 'Sin Nombre',edad = 'Sin edad',pais = 'Sin pais'){
        this.nombre = nombre,
        this.edad = edad,
        this.pais = pais
    }

    set setComidaFavorita( comida ){        
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    presentar(){
        console.log(`Hola! mi nombre es ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`);
    }
}

const ricardo = new Persona('Ricardo Reyes Flores',23,'Mexico');
ricardo.presentar();

const ironman = new Persona('Tony Stark',35,'California');
ironman.presentar();


ricardo.setComidaFavorita = 'Mole';
ricardo.sexo = 'Masculino';
console.log({ricardo});