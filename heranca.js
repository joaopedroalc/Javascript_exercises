function Camisas(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Camisas.prototype.desconto = function(desc){
    this.preco -= desc
}
Camisas.prototype.aumento = function(aum){
    this.preco += aum
}

function Tenis(nome,preco,cor){
    Camisas.call(this,nome,preco)
    this.cor = cor
}

Tenis.prototype = Object.create(Camisas.prototype)
Tenis.prototype.constructor = Tenis;

Tenis.prototype.desconto = function(desc){
    this.preco = this.preco - (this.preco * desc/100)
}

function Cuecas(nome,preco,cor,material){
    Tenis.call(this,nome,preco,cor)
    this.material = material
}
Cuecas.prototype = Object.create(Tenis.prototype)
Cuecas.prototype.constructor = Cuecas;

Cuecas.prototype.aumento = function(aum){
    this.preco = this.preco + (this.preco * aum/100)
}

function Livros(nome,preco,cor,paginas){
    Tenis.call(this,nome,preco,cor)
    Object.defineProperty(this,'paginas',{
        enumerable: true,
        configurable: true,
        get: function(){
            return paginas;
        },
        set: function(qtde){
            if(typeof qtde !== 'number'){
                throw new Error('diga a quantidade de paginas do livro')
            }else{
                paginas = qtde
            }
        }
    })
}
Livros.prototype = Object.create(Tenis.prototype)
Livros.prototype.constructor = Livros;

const lupo = new Cuecas('cueca',10,'branca','algodão')
lupo.aumento(50)
console.log(lupo)
const lacoste = new Camisas('polo',2000)
console.log(lacoste)
const nike = new Tenis('jordan',1800,'preto')
nike.desconto(90)
console.log(nike)
const harryPotter = new Livros('harry potter',289,'cinza','fsdfsdfs')
console.log(harryPotter)