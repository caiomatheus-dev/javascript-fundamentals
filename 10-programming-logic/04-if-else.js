/*
=========================================================
ESTRUTURAS CONDICIONAIS: if, else if e else
=========================================================

REGRAS DE OURO:
1. 'if' pode ser usado sozinho.
2. Sempre que utilizar 'else' ou 'else if', precisa haver um 'if' antes.
3. Podemos ter vários 'else if' na checagem.
4. Só podemos ter UM 'else' na checagem (sempre por último).
5. O motor do JS executa APENAS o PRIMEIRO bloco verdadeiro que encontrar
   e sai da estrutura imediatamente.
*/

const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('Olá'); // Fallback executado porque 50 está fora de 0–23
}

// Exemplo extra: curto-circuito vs if/else tradicional
const tenhoGrana = true;

if (tenhoGrana) {
  console.log('Vou sair de casa');
} else {
  console.log('Não vou sair de casa');
}