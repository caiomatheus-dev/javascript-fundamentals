let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A

let varTemporaria = 'A';

varA = varB;
varB = varC;
varC = varTemporaria;

console.log(varA, varB, varC);

