/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores */

//minha resposta
function funcoesMatematicas(n1 = 0, n2 = 0){
    console.log(`Os valores passados foram ${n1} e ${n2}`)
    console.log(`Soma: ${n1} + ${n2} = ${n1+n2}`)
    console.log(`Subtração: ${n1} - ${n2} = ${n1-n2}`)
    console.log(`Multiplicação:  ${n1} * ${n2} = ${n1*n2}`)
    console.log(`DIvisão: ${n1} / ${n2} = ${n1/n2}`)
}
funcoesMatematicas(10, 5)

// resposta da aula
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}
calcularOperacoes(1, 2)

