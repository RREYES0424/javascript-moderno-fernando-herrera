const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log('========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.warn('Or');
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

