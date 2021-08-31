const numero = Number(prompt("digite um numero : "))
const numeroTitle = document.querySelector("#numeroTitle")
numeroTitle.innerHTML = numero


const raiz = document.querySelector("#raiz")
const inteiro = document.querySelector("#inteiro")
const isNan = document.querySelector("#isNan")
const floorB = document.querySelector("#floorB")
const ceilC = document.querySelector("#ceilC")


raiz.innerHTML = `A raiz quadrada é ${numero ** 0.5}`
inteiro.innerHTML = `${numero} é inteiro : ${Number.isInteger(numero)}`
isNan.innerHTML = `${numero} não é numero ? ${Number.isNaN(numero)}`