function avaliacao(nome,sobrenome,altura,peso){
    return {
        nome : nome,
        sobrenome : sobrenome,
        get nomeCompleto(){ //GETTER
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(novoNome){ //SETTER
            novoNome = novoNome.split(' ')
            this.nome = novoNome.shift()
            this.sobrenome = novoNome.join(' ')
        },
        altura : altura,
        peso : peso,
        imc(){
            const indiceMassa = this.peso / (this.altura**2)
            return `${this.nome} Seu indice de massa corporal é ${indiceMassa.toFixed(2)}`
        }
    }
}

const p1 = avaliacao('Joao','lima',1.76,78)
const p2 = avaliacao('felipe','castro',1.70,72)
const fortaleza = avaliacao('Gbariel', 'fortaleza',1.77,82)
console.log(p2.imc())
fortaleza.nomeCompleto = 'é uma bicha'
console.log(fortaleza.nome)
console.log(fortaleza.sobrenome)
console.log(fortaleza.nomeCompleto)