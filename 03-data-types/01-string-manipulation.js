let umaString = "Um texto";
console.log(umaString[5]); // x

let outraString = "Outro texto";
console.log(outraString.charAt(6)); // t 

let outraString2 = "Outro texto2";
console.log(outraString.concat(' ', 'em' , ' ', 'um')); // Outro texto em um

let outraString3 = "Outro texto3";
console.log(`${outraString3} em um lindo dia.`);


let texto = "texto";
console.log(texto.indexOf('x')); // 2

let texto1 = "texto11";
console.log(texto.indexOf('x' , 1 )); // 2

let texto2 = "Um lindo texto";
console.log(texto2.lastIndexOf('n' , 11)); 


let texto3 = "Lindo dia sol";
console.log(texto3);
console.log(texto3.replace('dia', 'noite')); // lindo noite sol

let texto4 = "O rato rueu a roupa do rei de Roma.";
console.log(texto4.replace(/o/g, '#')); // imprimiu somente no primeiro 'o' para fazer isso em todos coloque a flag 'g'.


let texto5 = "Uma string";
console.log(texto5.length); // tamanho da string

let texto6 = "A casa da dona Maria";
console.log(texto6.slice(-5)); // tira um pedaço da String

let texto7 = "A correia da bicicleta";
console.log();


const entrada = "caio@email.com, dev@email.com, qa@email.com";

console.log(entrada.split(',' , 2)); // separar por caractere passado no split e 2° a qtd de elemento no array


const emailComEspaco = " qa@email.com ";
console.log(emailComEspaco.trim()); // Resultado: "qa@email.com"


console.log(emailComEspaco.toUpperCase()); // Letra maisculas

let fraseMaiuscula = "FRASE MAISCUSCULA";
console.log(fraseMaiuscula.toLowerCase());














