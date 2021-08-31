// const Pessoa = function(nome,sobrenome){
//     this.nome = nome
//     this.sobrenome = sobrenome
// }

// Pessoa.prototype.nomecompleto = function(){
//     return`${this.nome} ${this.sobrenome}`
// }

// const p1= new Pessoa('joao','pedro')
// console.log(p1.nomecompleto())
// const p2= new Pessoa('lala','gorda')
// console.log(p2.nomecompleto())
// const p3= new Pessoa('jumento','magro')
// console.log(p3.nomecompleto())
// const p4= new Pessoa('cy','feio')
// console.log(p4.nomecompleto())

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual/100)
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual/100)
}
const p1 = new Produto('box', 200)
p1.desconto(10)
p1.aumento(80)
console.log(p1)
