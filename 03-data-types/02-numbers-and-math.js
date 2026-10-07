let num1 = 10.8909888;
let num2 = 25.1;

console.log(num1.toString() + num2); // () torna o valor em string sem alterar o tipo
console.log(num1.toFixed(2)); // () -> defini a qtd casas decimais 

console.log(Number.isInteger(num2)); // Vericar se o n é um inteiro

 
let temp = num2 * 'olá';
console.log(Number.isNaN(temp)); // Verifica se é um Nan, retornando true ou false

// Exemplo:
let nume1 = 0.7;
let nume2 = 0.1;
nume1 += nume2; // 0.7999999999999999

// Solução com parseFloat + toFixed:
nume1 = parseFloat(nume1.toFixed(2)); // Resulta no número real 0.8

// Verificar se é um número inteiro (retorna true/false):
Number.isInteger(num1); // Ex: false para 1.5, true para 2[cite: 4]

// Verificar se deu erro de cálculo (NaN - Not a Number):
Number.isNaN(num1); // Ex: true se tentar multiplicar string inválida "texto" * 2

// Em vez de 1.50 (float), armazena 150 (centavos)
const valorCentavos = 150;





