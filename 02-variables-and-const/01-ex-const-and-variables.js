/*
Caio Matheus Caetano tem 25 anos, pesa 107kg,
tem 1.84 de altura e seu imc é de 31.604442344045367
Caio Matheus nasceu em 2001

*/

const name = 'Caio Matheus';
const lastName = 'Caetano';
const age = 25;
const weight = 107;
const heightInCm = 1.84;
let imc;
let yearOfBirth;

imc = weight / (heightInCm * heightInCm);
yearOfBirth = 2026 - age;

// this way of doing
console.log(name, lastName, 'have' , age, 'years old', ',' ,'weighs', weight, 'kg');

// and this way - best way
console.log(`tem  ${heightInCm} of heigh and your imc is ${imc}`);
console.log(`${name} ${lastName} born in ${yearOfBirth}`);




