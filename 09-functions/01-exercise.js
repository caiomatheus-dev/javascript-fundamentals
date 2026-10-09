/*const salarioAntigo = 6500;
const porcentagem = 10;

// O "(1 + 10 / 100)" vira 1.10!
const novoSalario = salarioAntigo * (1 + porcentagem / 100); // Resulta em 7150

console.log(novoSalario.toFixed(2));



const salarioAntigo2 = 5000;
const aumento = salarioAntigo2*1.10;

console.log(aumento);

const calcularNovoSalario = (salario, porcentagem) => salario * (1 + porcentagem / 100);

const resultado = calcularNovoSalario(500,50);
console.log(resultado);


const aplicarDesconto = (salario, porcentagem) => salario * (1 - porcentagem / 100);
const resultado2 = aplicarDesconto(4000, 10);
console.log(resultado2);


function cadastrarFuncionario(funcionarios, novoFuncionario) {
  return [...funcionarios, novoFuncionario];
}

const novoFuncionario = cadastrarFuncionario('Caio', 'Matheus');
console.log(novoFuncionario) 

const usuarioAntigo = { id: 10, nome: 'Caio', email: 'caio@oldmail.com' };

const atualizarEmail = (usuario, novoEmail) => ({

    ...usuario, 
    email: novoEmail,
})

const usuarioAtualizado = atualizarEmail(usuarioAntigo, 'matheuscaio@gmail.com');
console.log(usuarioAtualizado);



*/

const formatarResposta = (statuss, dados) => ({statuss, dados});


const resultado = formatarResposta(200, 'ok');
console.log(resultado);



