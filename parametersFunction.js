// arguments pega todos os argumentos enviados na chamada da função
function semParametros(a,b,c){
    let total = 0;
    for (let valor of arguments){
        total += valor
    }
    console.log(total,a,b,c)
}
semParametros(1,2,3,3,4,45,5,120,1000000)

console.log('--------------------------')

function soma(a,b=3,c=12){
    console.log(a+b+c)
}
soma(1,undefined,3)
// se eu quiser para o valor que eu passar no parametro da função soma ser padrão sendo que ele está entre outros parametros , a única maneira é colocando undefined e assim o JS vai entender que o valor passado no argumento é indefinido e portanto deve usar seu valor padrão que está no parametro

console.log('--------------------------')
// usando atribuiçao via desestruturação com objetos
function imprimeNome({nome,sobrenome}){
    console.log(nome,sobrenome)
}

imprimeNome({nome:'João Pedro', sobrenome:'Lima'})
// usando atribuiçao via desestruturação com arrays
function imprimeIdade([idade1,idade2]){
    console.log(idade1,idade2)
}

imprimeIdade([10, 20])

function calcularConformeOperador(operador, acumulador, ...numeros) {
    for (let valor of numeros) {
        if (operador === '+'){
            acumulador += valor
        }
        else if (operador === '-'){
            acumulador += valor
        }
        
        else if (operador === '*'){
            acumulador *= valor
        }
        
        else if (operador === '/'){
            acumulador /= valor
        }
        else{
            console.log('operador vazio')
        }
    }
    console.log(acumulador)
}
console.log('A soma')
calcularConformeOperador('+', 0, 20,30,40,100)
console.log('A diferença')
calcularConformeOperador('-', 400, 20,30,40,100)
console.log('A multiplicação')
calcularConformeOperador('*', 1, 20,30,40,100)
console.log('A divisão')
calcularConformeOperador('/', 2000, 20,30,40,100)


const objComum = {
        nome: 'João',
        sobrenome: 'Pedro'
    }
    
    console.log(typeof objComum)
    
//AS DUAS COISAS SÃO IGUAIS , PORÉM A FUNÇÃO ABAIXO PERMITE AUTOMATIZAR A CRIAÇÃO DE OBJETOS MUDANDO APENAS OS ARGUMENTOS

    const functionObj = function(nome,sobrenome) {
        return {nome,sobrenome}
    }

    let imprime = functionObj('João', 'Pedro')
    console.log(typeof imprime)

    function multiplicador(multiplo){
        return function numero(n){
            return multiplo*n;
        }
    }

    let vmv = multiplicador(3)(11)
    console.log(vmv)
    
    // let vmv = numero(10)
    // console.log(vmv(3))