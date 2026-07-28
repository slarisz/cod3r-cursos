function bomDia() {
    console.log('Bom dia!');
}

const bomTarde = function() {
    console.log('Bom tarde!');
}

// 1) Passar umma função como parâmetro para outra função

function executarQualquerCoisa(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(bomTarde)

//2) Retornar uma função de outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPot = potencia(2)(4)
console.log(resultadoPot)