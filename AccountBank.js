function ContaPoupanca(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaPoupanca.prototype.sacar = function(valor){
    if(valor>this.saldo){
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
ContaPoupanca.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

ContaPoupanca.prototype.verSaldo = function(){
    console.log(`Sua agência é ${this.agencia}, a conta é ${this.conta} e seu saldo é: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia,conta,saldo,limite){
    ContaPoupanca.call(this,agencia,conta,saldo)
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(ContaPoupanca.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor>(this.saldo+this.limite)){
        console.log("O valor de saque ultrapssou o limite")
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}


const zeca = new ContaCorrente(100,2238,300,500)
zeca.sacar(200.776)
