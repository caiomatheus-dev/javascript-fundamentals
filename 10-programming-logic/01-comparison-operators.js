/*
Operadores de Comparação em JS:
>   maior que
>=  maior que ou igual a
<   menor que
<=  menor que ou igual a
=== igualdade estrita (valor e tipo) -> USAR SEMPRE
!== diferente estrito (valor e tipo) -> USAR SEMPRE
*/

const num1 = 10;     // number
const num2 = '10';   // string

console.log(num1 === num2); // false (tipos diferentes)
console.log(num1 !== num2); // true  (são diferentes no tipo)
console.log(num1 > 5);      // true