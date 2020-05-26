/*  Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

// minha resposta
function contarnegativo(vetor){
    let qntNegativo = 0
    for(let indice = 0; indice < vetor.length; indice++){
        if(vetor[indice] < 0){
            qntNegativo++
        }
    }
    return `Há ${qntNegativo} de número(s) negativos.`
}

let vetor = [-1, -56, 3, 67, 32, -54]

console.log(contarnegativo(vetor))

// resposta do curso
function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))