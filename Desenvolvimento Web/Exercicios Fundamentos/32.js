/*  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

// minha resposta
function calcularmedia(vetornumero){
    let soma = 0
    for(let indice in vetornumero){
        soma += vetornumero[indice]
    }
    return `A média dos números é ${(soma/vetornumero.length).toFixed(2).toString().replace('.', ',')}` 
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(calcularmedia(vetor))

// resposta do curso
function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))