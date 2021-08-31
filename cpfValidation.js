let cpf = '042.954.463-43'
let cpfClear = cpf.replace(/\D+/g, '')
let cpfToArray = Array.from(cpfClear)
console.log(cpfToArray)
let regressivo = cpfToArray.length - 1
let digito = cpfToArray.reduce((ac,valor)=>{
    ac += (regressivo * Number(valor));
    regressivo--;
    return ac;
},0);

console.log(digito)