const cores = ['azul','amarelo','verde']
const addCor = cores.push('preto','marrom') //adiciona o eleento passado no argumento no fim do array
const removeCor = cores.pop() // remove o ultimo elemento
const addCorInicio = cores.unshift('branco') // adiciona no inicio do array 
const removeCorInicio = cores.shift() // remove do inicio
const pegaPosicoes = cores.slice(0,-2) // pega de uma posição ate outra do raay porém nao quebra o array original
console.log(pegaPosicoes)
console.log(cores)


const stringParaArray = 'OI, EU ME CHAMO JOTAPE'
const quebroString = stringParaArray.split(',') //quebro a string onde quero de acordo com o argumento
console.log(quebroString)
const arrayParaString = ['OI', 'EU', 'ME' ,'CHAMO', 'JOTAPE']
const unirArray = arrayParaString.join(' ')
console.log(unirArray)

// SPLICE != SPLIT != SLICE

const carros = ['tesla','ferrari','bmw','hyundai','chevrolet']
// const carrosComSplice = carros.splice(3,1)
//                             //que indice começa, quantos removo  
// console.log(carrosComSplice)

// const spliceComecandoDoNegativo = carros.splice(-3,2)
// console.log(spliceComecandoDoNegativo)

// const spliceAdiciona = carros.splice(1,0,'corsa','fusca')
// console.log(spliceAdiciona)

const spliceSubstituicao = carros.splice(1,1,'fusca')
console.log(spliceSubstituicao)

console.log(carros)

//CONCATENANDO ARRAYS
const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = [...array1,...array2,'concantenando arrays e strings', 7, ...[8,9,10]]
console.log(array3)