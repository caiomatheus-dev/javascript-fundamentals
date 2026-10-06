// String, number, undefined , null, boolean

const name = 'Caio'; // String 
const name1 = "Caio"; // String 
const name2 = `Caio`; // String 
const num1 = 10; // number 
const num2 = 20; // number

let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobreNomeAluno = null; // Nulo -> não aponta para local nenhuma na memória
const aprovado = true; // boolean -> True or False (lógico)

let a = 2;
const b = a;


console.log(a, b); // 2 , 2

a = 3;
console.log(a, b); // 3 , 2 -> Isso acontece por tratar de um tipo primitivo, onde nele é feito a CÓPIA do valor

