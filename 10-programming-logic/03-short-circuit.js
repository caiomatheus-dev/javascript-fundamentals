/*
=========================================================
AVALIAÇÃO DE CURTO-CIRCUITO (SHORT-CIRCUIT) EM JS
=========================================================

No JavaScript, && e || NÃO retornam apenas true ou false:
eles retornam O PRÓPRIO VALOR que decidiu a expressão.

VALORES FALSY (tudo que o JS avalia como false):
- false (literal)
- 0
- '' / "" / `` (string vazia)
- null
- undefined
- NaN

QUALQUER COISA FORA DESSA LISTA É TRUTHY (avaliada como true):
Ex: 'Caio', 10, -5, [], {}, true


// ---------------------------------------------------------
// 1. OPERADOR && (AND) -> Retorna o PRIMEIRO valor FALSY
// Se todos forem Truthy, retorna o ÚLTIMO valor avaliado.
// ---------------------------------------------------------
console.log('Luiz' && 0 && 'Maria');       // 0 (parou no primeiro falsy)
console.log('Luiz' && true && 'Maria');    // 'Maria' (todos truthy -> retorna o último)
console.log('Luiz' && '' && 'Maria');      // '' (string vazia é falsy)

// Uso prático: executar função apenas se uma condição for verdadeira
function falaOi() {
  return 'Oi!';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());       // false (não executa falaOi)

// ---------------------------------------------------------
// 2. OPERADOR || (OR) -> Retorna o PRIMEIRO valor TRUTHY
// Se todos forem Falsy, retorna o ÚLTIMO valor avaliado.
// ---------------------------------------------------------
console.log(0 || false || null || 'Caio' || true); // 'Caio' (primeiro truthy)
console.log(0 || false || null || undefined);      // undefined (todos falsy -> retorna o último)

// Uso prático no Backend: definir valor padrão (fallback)
const corUsuario = null;                   // usuário não escolheu cor (falsy)
const corPadrao = corUsuario || 'preto';   // pega 'preto' porque é truthy
console.log('Cor escolhida:', corPadrao);  // 'preto' */


// Dados vindos do ambiente (alguns vieram vazios)
const portaServidor = null;
const hostServidor = '';
const ambiente = undefined;



const portaFinal = portaServidor || 3000;

const hostFinal = hostServidor || 'localhost';

const ambienteFinal = ambiente || 'development';

console.log(portaFinal); // Assume a porta 3000 
console.log(hostFinal); // Assume localhost pq ele mandou uma string vazia 
console.log(ambienteFinal); // Assume development que defini com padrão 
