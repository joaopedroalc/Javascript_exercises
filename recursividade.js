function recursiva(valor){
    if(valor > 20) return;
    console.log(valor)
    valor++
    recursiva(valor)
}

recursiva(10)