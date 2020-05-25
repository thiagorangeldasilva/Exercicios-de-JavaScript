/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

// minha resposta
function exebir(contar100, contar50, contar10, contar5, contar1){
    resultado = ''
    if (contar100 > 0){
        resultado += `${contar100} nota(S) de R$ 100,00 `
    }
    if (contar50 > 0){
        resultado += `${contar50} nota(S) de R$ 50,00 `
    }
    if (contar10 > 0){
        resultado += `${contar10} nota(S) de R$ 10,00 `
    }
    if (contar5 > 0){
        resultado += `${contar5} nota(S) de R$ 5,00 `
    }
    if (contar1 > 0){
        resultado += `${contar1} nota(S) de R$ 1,00 `
    }
    return resultado
}

function sacarnotas(valor){
    let contar100 = 0
    let contar50 = 0
    let contar10 = 0
    let contar5 = 0
    let contar1 = 0
    while (valor >= 100){
        contar100++
        valor -= 100
    }
    while (valor >= 50){
        contar50++
        valor -= 50
    }
    while (valor >= 10){
        contar10++
        valor -= 10
    }
    while (valor >= 5){
        contar5++
        valor -= 5
    }
    while (valor >= 1){
        contar1++
        valor -= 1
    }
    return exebir(contar100, contar50, contar10, contar5, contar1)
}

console.log(sacarnotas(456))

// resposta do curso
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));