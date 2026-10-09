/**
 * ============================================================================
 * MÓDULO 08: VALORES PRIMITIVOS VS. VALORES POR REFERÊNCIA
 * ============================================================================
 * 
 * 1. PRIMITIVOS (string, number, boolean, undefined, null, symbol, bigint)
 *    - Imutáveis (o valor em si não muda).
 *    - Copiados POR VALOR (Cópia independente na memória RAM).
 *    - Alterar a cópia NÃO afeta a variável original.
 * 
 * 2. REFERÊNCIA (array, object, function)
 *    - Mutáveis (podem ter seu conteúdo interno alterado).
 *    - Passados POR REFERÊNCIA (Apontam para o mesmo endereço de memória).
 *    - Usar `=` em objetos/arrays cria um LINK: alterar um afeta o outro.
 * 
 * 3. BOAS PRÁTICAS NO BACKEND (Imutabilidade com Spread Operator)
 *    - Para clonar um objeto/array sem manter o link de memória, usamos `...`
 *    - Evita efeitos colaterais e sobrescrita indevida de dados no sistema/banco.
 */

// --- TESTE PRÁTICO 1: Primitivos (Cópia de Valor) ---
let originalName = 'Caio';
let copyName = originalName; // Cria uma cópia isolada 'Caio'
originalName = 'Silva';

console.log('--- PRIMITIVOS ---');
console.log('Original:', originalName); // 'Silva'
console.log('Cópia:', copyName);         // 'Caio' (Preservado)


// --- TESTE PRÁTICO 2: Referência SEM Spread (Mesma Memória) ---
const baseConfig = { theme: 'dark', notifications: true, creditLimit: 1000 };
const vipConfigUnsafe = baseConfig; // ⚠️ Aponta para a MESMA gaveta de memória!

vipConfigUnsafe.creditLimit = 5000; // Alterou o limite...

console.log('\n--- REFERÊNCIA (PERIGOSO: Sem Spread) ---');
console.log('Base Config:', baseConfig.creditLimit);       // 5000 (Corrompido!)
console.log('VIP Config:', vipConfigUnsafe.creditLimit);   // 5000


// --- TESTE PRÁTICO 3: Referência COM Spread (Imutabilidade Segura) ---
const defaultConfig = { theme: 'dark', notifications: true, creditLimit: 1000 };

// Copia as propriedades para um NOVO objeto e sobrescreve apenas o limite
const vipConfigSafe = { 
  ...defaultConfig, 
  creditLimit: 5000 
};

console.log('\n--- REFERÊNCIA (SEGURO: Com Spread) ---');
console.log('Default Config:', defaultConfig.creditLimit); // 1000 (Protegido!)
console.log('VIP Config Safe:', vipConfigSafe.creditLimit);  // 5000