function Carro(marca,cor){
    this.marca = marca;
    this.cor= cor;
    console.log(`${this.marca} ${this.cor}`);
}

const c1 = new Carro('tesla','branco')
const c2 = new Carro('fiat','vermelho')

// A função construtora tem que ser chamada precedida da palavra new , e deve ser criada com letra maiuscula, o que difere a construtora da factory function é que a construtora o objeto this aponta diretamente para quem o chamou, logo quando crio uma variavel c1 que recebe uma construtora da função Carro estou fazendo o this criado na função apontar para essa variavel