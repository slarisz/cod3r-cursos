const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 0, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const getNome = item => item.nome
const qtMQueZero = item => item.qtde > 0
const qtMIZero = item => item.qtde >= 0
const qtGrande = item => item.qtde >= 1000

const items = carrinho
    .filter(qtMQueZero)
    .map(getNome)

console.log(items)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}   

const items2 = carrinho
    .meuFilter(qtMQueZero)
    .map(getNome)
