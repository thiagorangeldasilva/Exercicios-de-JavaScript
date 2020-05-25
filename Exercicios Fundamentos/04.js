/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
imprimir o resultado e o resto da divisão destes dois valores. */

// minha resposta
function calculoDivisao(dividendo, divisor){
    console.log(`Resultado da divisão ${Math.floor(dividendo / divisor)} e o resto ${dividendo % divisor}`)
}
calculoDivisao(40, 3)

// resposta do curso
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)