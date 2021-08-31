const numeros= [1,2,33,4,54,5,353,23,3,4142]

const dobrarNumeros = numeros.map(valor=>valor*2)
console.log(dobrarNumeros)

const pessoas = [
    {nome:'joao', idade: 20},
    {nome:'isa', idade: 21},
    {nome:'maria', idade: 23},
    {nome:'paula', idade: 30},
    {nome:'eduardo', idade: 59},
    {nome:'adriana', idade: 43},
    {nome:'jara', idade: 55},
    {nome:'ari', idade: 50}
];

// const nomePessoa = pessoas.map((objetos) => {
//     const nomes = objetos.nome 
//     return nomes
// })

// const nomePessoaEmString = nomePessoa.toString()
// console.log(nomePessoaEmString)

// const objetosSemNomes = pessoas.map((objetos) => {
//     delete objetos.nome
//     return objetos 
// })
// console.log(objetosSemNomes)

const addIds = pessoas.map((objetos, indice) => {
    function geraIndice(){
        const indiceAleatorio = parseFloat(indice * Math.random())
        const nString = indiceAleatorio.toFixed(2)
        return Number(nString)
    }
    
    objetos.id = geraIndice()
    return objetos
})
console.log(addIds)
