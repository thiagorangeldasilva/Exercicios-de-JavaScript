/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

// minha resposta
/* quando li a pergunta não tinha pensando em usar os argumentos que entra na função, 
esqueci que pode usar, imaginei outra coisa.*/
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Dia', 'Noite', 'Hora', 'Minuto']
let vetorDouble = [0.1, 0.12, 0.231, 0.4213]

function contatenar(vetorInteiro, vetorString, vetorDouble){
    let primeiramaneira = vetorString.concat(vetorInteiro, vetorDouble)
    let segundamaneira = vetorDouble.concat(vetorString.concat(vetorString))

    console.log(primeiramaneira, segundamaneira)
}

contatenar(vetorInteiro, vetorString, vetorDouble)

// resposta do curso
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))