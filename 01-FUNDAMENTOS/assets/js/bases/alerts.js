let nombre = prompt('¿Cual es tu nombre?', 'Sin Nombre');
alert('Hola ' + nombre + '!');
const seleccion = confirm('¿Estas seguro de borrar esto?');

if(seleccion) {
    alert('Se ha borrado correctamente');
}else{
    alert('El usuario cancelo la operacion');
}