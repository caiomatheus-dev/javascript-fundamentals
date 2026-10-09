/*const pessoa1 = {
    nome: 'Caio',
    profissao: 'DEV',
    idade: 25,

    fala(){
    console.log(`A minha idade atual é ${this.idade}.`);

    },

    incrementaIdade(){
        this.idade++;
    }


};


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade(); */


// Objeto que representa uma Conta Bancária
const account = {
  owner: 'Caio Silva',
  balance: 1000,

  // 1. Método para depositar um valor
  deposit(amount) {

    this.amount + this.balance;
    // Escreva a lógica aqui: some o amount ao balance usando o this
  },

  // 2. Método para consultar o saldo no console
  checkBalance() {
    console.log(`Este é o owner ${this.owner}, e o ${this.balance}`);
    // Escreva a lógconsoleica aqui: exiba uma frase usando this.owner e this.balance
  }
};

// --- Testando o Objeto ---
account.checkBalance(); // Deve exibir: "Titular: Caio Silva | Saldo atual: R$ 1000"

account.deposit(500);   // Adiciona 500 ao saldo

account.checkBalance(); // Deve exibir: "Titular: Caio Silva | Saldo atual: R$ 1500"
