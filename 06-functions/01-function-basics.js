
function saudacao(name) {
    console.log(`Bom dia ${name}`);
}
saudacao("Caio"); // Caio


function soma (x,y){

    const resultado = x + y;
    console.log('Veja o resultado abaixo !!!!!');
    return resultado; // ao encontrar o return na apos disso é executado! 
}
console.log(soma(2,2)); // 4 


// Passando direto no parametro os valores,consequentemente, não passa nos argumentos no momento de chamda da função
function somaSemArgumento( x= 2 , y= 2){
    const resultado = x + y;
    return resultado;
}
console.log(somaSemArgumento());



// Outra forma de criar funcão
const raiz = function (n){
    return n ** 0.5;
};
console.log(raiz(9));


// Outra forma de criar função
const raiz2 = n => n ** 0.5;
console.log(raiz2(16))



const multiplicar = (x,y) => x * y;
console.log(multiplicar(12,3));


const saudacao1 = (nome) => `Seja bem vindo ${nome}` ;
console.log(saudacao1('Caio'));
