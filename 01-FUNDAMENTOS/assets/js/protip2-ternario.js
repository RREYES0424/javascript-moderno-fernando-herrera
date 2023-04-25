const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) =>
  miembro ? "Si es miembro" : "No es miembro";

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

const amigo = false,
  amigosArr = [
    "Peter",
    "Tony",
    "Dr. Strange",
    amigo ? "Thor" : "Loki",
    (() => "Nick Fury")(), //Funcion anonima autoinvocada
    elMayor(15, 35),
  ];

console.log(amigosArr);

const nota = 100,
  grado =
    nota >= 95
      ? "A+"
      : nota >= 90
      ? "A"
      : nota >= 85
      ? "B+"
      : nota >= 80
      ? "B"
      : "C";

      console.log({nota,grado});
      