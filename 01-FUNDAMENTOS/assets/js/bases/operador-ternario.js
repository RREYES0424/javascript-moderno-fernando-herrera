/**
 * Dias de semana abrimos a las 11,
 * fines de semana abrimos a las 9
 */

//Entra a una web para consultar el horario del dia

const dia = 0, horaActual = 9;
let horaApertura, mensaje; //Esta abierto / Hoy abrimos a las XX

// if(dia === 0 || dia === 6){
//     if([0,6].includes(dia)){
//     horaApertura = 9;
//     console.log(('Fin de semana'));
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11; 
// }

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura}`;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`;


console.log({horaApertura,mensaje});

