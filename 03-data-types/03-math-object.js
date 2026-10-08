
 // * Objeto Math e Operações Matemáticas em JavaScript


// 1. Arredondamentos
let num1 = 9.54578;

let numFloor = Math.floor(num1); // 9 -> Arredonda para BAIXO (chão)
let numCeil = Math.ceil(num1);   // 10 -> Arredonda para CIMA (teto)
let numRound = Math.round(num1); // 10 -> Arredonda para o mais próximo (>= .5 vai pra cima)

// 2. Maior e Menor valor
console.log(Math.max(1, 2, 3, 4, 5, -10, 1500, 9, 8, 7)); // 1500 -> Pega o maior
console.log(Math.min(1, 2, 3, 4, 5, -10, 1500, 9, 8, 7)); // -10 -> Pega o menor

// 3. Números Aleatórios (Random)
// Gera um número aleatório entre 0 e 1 (o 1 nunca é incluído)
const aleatorio = Math.random(); 

// Exemplo real: Número inteiro aleatório entre 10 e 5
const aleatorioEntre10e5 = Math.round(Math.random() * (10 - 5) + 5);

// 4. Potenciação
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10);          // 1024 (Operador moderno)

// 5. Raiz Quadrada (Com e Sem Objeto Math)
let numero = 9;
console.log(Math.sqrt(numero));  // 3 (Usando o Math)
console.log(numero ** 0.5);      // 3 (Sem Math: Elevação por 0.5/meio)
console.log(numero ** (1 / 2));  // 3 (Sem Math: Elevação por fração)

// 6. Pegadinha de Entrevista: Divisão por Zero em JS (Infinity)
// Em muitas linguagens isso gera um ERRO. No JS, retorna 'Infinity'.
console.log(100 / 0); // Infinity

// Avaliação booliana de Infinity:
// Em JS, qualquer número diferente de 0 (incluindo Infinity) é avaliado como TRUTHY (true).
console.log(Boolean(100 / 0)); // true