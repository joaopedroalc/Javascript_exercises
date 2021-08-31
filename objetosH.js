// const objetos = {
//     nome: 'pepeto',
//     sobrenome: 'kill',
//     idade : 20,
//     anoNasc : function(){
//         const anoAtual = new Date();
//         return anoAtual.getFullYear() - this.idade;
//     }
// }
// for(let valor in objetos){
//     console.log(objetos[valor])
// }

// FACTORY FUNCTIONS
// function pessoa(nome,sobrenome,idade){
//     return{
//         nome,
//         sobrenome,
//         idade,
//         get nomecompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         },
//         get cpf(){
//             return (`${Math.random().toFixed(2) * 1000}.${Math.random().toFixed(2) * 1000}.${Math.random().toFixed(2) * 1000}-${Math.random().toFixed(1) * 100}`)
//         }
//     }
// }
// const p1 = pessoa('joao','culhao',20)
// const p2 = pessoa('isa','gostosa',21)
// const p3 = pessoa('bella','martins',28)
// console.log(p1.nomecompleto , p1.cpf)
// console.log(p2.nomecompleto ,p2.cpf)
// console.log(p3.nomecompleto ,p3.cpf)



//CONSTRUCTOR FUNCTION
// function Pessoa(nome,sobrenome,idade){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.cpf = function(){
//         return (`${Math.random().toFixed(2) * 1000}.${Math.random().toFixed(2) * 1000}.${Math.random().toFixed(2) * 1000}-${Math.random().toFixed(1) * 100}`)
//     } 
// }
// const p1 = new Pessoa('joao','lima',20)
// console.log(p1.nome, p1.cpf())

// function Produto(nome,preco,estoque){
//     this.nome = nome;
//     this.preco = preco;
//     let estoqueFinal = estoque;
//     Object.defineProperty(this,'estoque',{
//         enumerable: true,
//         configurable: true,
//         get: function(){
//             return estoqueFinal;
//         },
//         set: function(valor){
//             if(typeof valor !== 'number' ){
//                 throw new TypeError("digite seu cpf sem pontos")
//             }else{
//                 estoqueFinal = valor;
//             }
//         }
//     });
// }

// const p1 = new Produto("tenis nike", 200, 0);
// p1.estoque = 'kasjkafka';
// console.log(p1.estoque)

function produto(nome, preco, estoque) {
    return {
        nome,
        preco,
        get estoque() {
            return estoque;
        },
        set estoque(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError("digite seu cpf sem pontos")
            } else {
                estoque = valor;
            }
        }
    }
}

const p1 = produto("tenis nike", 200, 0);
p1.estoque = 324234232342;
console.log(p1.estoque)