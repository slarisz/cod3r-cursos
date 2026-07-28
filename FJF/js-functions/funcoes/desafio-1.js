// somar (3) (4) (5)
function somarMais(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const resultado = somarMais(3)(4)(5)
console.log(resultado)

//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3, 7, fn)

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function somar(a, b) {
    return a + b
}

const resultadoSubtrair = calcular(3)(7)(subtrair)
console.log(resultadoSubtrair)

const resultadoMultiplicar = calcular(3)(7)(multiplicar)
console.log(resultadoMultiplicar)

const resultadoSomar = calcular(3)(7)(somar)
console.log(resultadoSomar)