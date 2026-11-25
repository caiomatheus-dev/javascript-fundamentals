/*
Operadores Lógicos:
&& -> AND (E)   -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  (OU)  -> Pelo menos uma expressão precisa ser verdadeira para retornar true
!  -> NOT (NÃO) -> Inverte o valor booleano (!! converte qualquer valor para boolean)
*/

const usuario = 'Luiz';
const senha = '12345';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log('Login válido:', vaiLogar); // true

console.log('Dupla negação:', !!true);   // true