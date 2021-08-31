//somar todos os numeros
//filtrar os pares
//dobrar os valores
const numeros= [1,2,33,4,54,5,353,23,3,4142,2122]
const total = numeros.reduce(function(acumulador,valor,indice,array){
    // if(valor%2 === 0) {
    //     acumulador.push(valor);
    // }
    acumulador.push(valor*2);
    return acumulador;
},[]);
console.log(total)