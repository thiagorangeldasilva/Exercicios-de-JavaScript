/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

// minha resposta
function analisatvetor(vetor){
    let maior = 0
    let menor = vetor.length ** vetor.length
    for(let indice in vetor){
        if(vetor[indice] > maior){
            maior = vetor[indice]
        }      
        if(vetor[indice] < menor){
            menor = vetor[indice]
        }
    }
    return `O maior número ${maior}, e menor número ${menor}`
}

let vetor = [45, 50, 12, 10, 46, 5, 78, 100, 1]

console.log(analisatvetor(vetor))

// resposta do curso
function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))