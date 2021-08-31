// const numeros = [1, 2, 3, 4, 5, 6, 7, 8,1002,112,22,11,34,123]

// // const filtrarNumeros = numeros.filter(valor => valor > 10)
// // console.log(filtrarNumeros)

// const filtrarNumeros = numeros.filter((valor,indice,array) => {
//     console.log(valor,indice,array)
//     return valor > 10
// })
// console.log(filtrarNumeros)


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

const filtrarIdade = pessoas.filter(objetos => objetos.idade > 30)
console.log(filtrarIdade)

const filtrarNomeLength = pessoas.filter(objetos => objetos.nome.length > 5)
console.log(filtrarNomeLength)

const nomeTerminaComA = pessoas.filter((objetos) => {
    return objetos.nome.endsWith('a')
})
console.log(nomeTerminaComA)