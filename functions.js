// function comum - hoisting
function normal(){
    console.log("sou uma função comum que sofre hoisting, e as outras nãoo !!!")
}
normal()
// function expression
const substituiParametros = function(){
    console.log("executei uma função dentro de outra criando a função que quis executar armazenando-a numa variavel")
  }
  
  const outraFuncao = function(parametro){
    parametro();
  }
  outraFuncao(substituiParametros)

//arrow function 

const arrow = () => {
    console.log("eu sou uma arrow function")
}
arrow()

//function dentro do objeto

let objeto = {
    // funcaoDoObj : function(){
    //     console.log("eu sou uma função que está dentro de um objeto")
    // }
    //OUUU
    funcaoDoObj(){
        console.log("eu sou uma função que está dentro de um objeto")
    }
}

objeto.funcaoDoObj()

let segundos = 0;

const cronometro = function(){
    segundos++
    console.log(segundos)
}
setInterval(cronometro,1000)
