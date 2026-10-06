// ==========================================
// CONVERSÃO DE TIPOS E NaN (Not a Number)
// ==========================================

// 1. O QUE É NaN:
// Acontece quando você tenta fazer conta com um texto que não é número.
let contaInvalida = "casa" * 2;
console.log('Exemplo de NaN:', contaInvalida); // NaN

// 2. A ARMADILHA DO SINAL DE MAIS (+):
// Se for texto, o JS junta (concatena) em vez de somar.
let valorTexto = "10";
console.log('Juntando texto:', valorTexto + 5); // "105" (Errado!)

// 3. O JEITO CERTO (Converter texto para número de verdade):
let numeroConvertido = Number("10"); // Transforma "10" (string) em 10 (number)
console.log('Soma correta:', numeroConvertido + 5); // 15 (Certo!)

// Outras formas de conversão:
let inteiro = parseInt("20.5");   // Transforma em 20 (descarta decimais)
let decimal = parseFloat("20.5"); // Transforma em 20.5 (mantém decimais)

console.log('Inteiro:', inteiro);
console.log('Decimal:', decimal);