const alunos = ['Caio','Souza','Matheus','Silva'];

console.log(alunos); // [ 'Caio', 'Matheus', 'Silva' ]

// FORMA DE ADICIONAR AO FINAL DO ARRAY, SEM METODO !!
alunos[alunos.length] = 'Luiza'; 
alunos[alunos.length] = 'Sergio';

console.log(alunos); // [ 'Caio', 'Matheus', 'Silva', 'Luiza', 'Sergio' ]

// FORMA DE ADICIONAR AO FINAL COM METODO

alunos.push('Olivia');
console.log(alunos); // [ 'Caio', 'Matheus', 'Silva', 'Luiza', 'Sergio', 'Olivia' ]


// FORMA DE ADICIONAR NO COMEÇO DO ARRAY
alunos.unshift('Gabriel');
console.log(alunos); // ['Gabriel', 'Caio', 'Matheus', 'Silva',  'Luiza',   'Sergio', 'Olivia']
 
  
// FORMA DE REMOVER DO FIM DO ARRAY
const removido = alunos.pop();
console.log(`aluno removido: ${removido} `);  // aluno removido: Olivia 
console.log(alunos);// [ 'Gabriel', 'Caio', 'Matheus', 'Silva', 'Luiza', 'Sergio' ] 

// FORMA DE REMOVER DO COMEÇO DO ARRAY
const removidoDoComeco = alunos.shift();
console.log(`aluno removido: ${removidoDoComeco} `);
console.log(alunos);


const alunos2 = ['Amaro', 'Douglas', 'Kelvin'];

// FORMA QUE DELETE O INDICE, PORÉM O INDICE NÃO É ALTERADO E VAI TER O ELEMENTO VAZIO, MAS O DADO FOI DELETADO
delete alunos2 [1];
console.log(alunos2);

console.log(alunos2 [1]); // TENTEI BUSCAR O INDICE QUE FOI DELETADO, E ME DA UM UNDEFINED



const alunos3 = ['Ana', 'Beatriz', 'Silvia', 'Paulo', 'Marcos', 'Tati'];

// FORMA DE FATIAR O VALORES NO ARRAY 
console.log(alunos3.slice(1 , 5));  // [ 'Beatriz', 'Silvia', 'Paulo', 'Marcos' ]

console.log(typeof alunos3); // object

//VERIFICA SE É UMA INSTANCIA DE ARRAY , TRAZENDO TRUE OU FALSE
console.log(alunos3 instanceof Array); // TRUE




