const numeros= [1,2,33,4,54,5,353,23,3,4142,2122]
const total = numeros
.filter(valor => valor%2===0)
.map(valor => valor*2)
.reduce((ac,valor) => ac+valor)

console.log(total)