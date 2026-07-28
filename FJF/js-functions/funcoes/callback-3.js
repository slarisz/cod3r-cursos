const nums = [1, 2, 3, 4, 5];
const dobro = (n, i, a) => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = (n) => n[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 0, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
console.log(carrinho.map(getTotal))

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

const getNome1 = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal1 = item => item.qtde * item.preco
console.log(carrinho.meuMap(getTotal))
