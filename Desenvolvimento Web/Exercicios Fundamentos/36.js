/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

// minha resposta
function multiplicarElemento(vetornumeros, Multiplicar){
    let resultado = []
    for(let indice in vetornumeros){
        resultado.push(vetornumeros[indice]*Multiplicar)
    }
    return resultado
}

function multipplicarElementomenor5(vetornumeros, Multiplicar){
    let resultado = []
    for(let indice = 0; indice < vetornumeros.length; indice++){
        if(vetornumeros[indice] > 5){
            resultado.push(vetornumeros[indice]*Multiplicar)
        }
    }
    return resultado
}

let vet = [1, 5, 6, 4.5, 72, 70, 6, 1, 2, 3]
let multiplicar = 2

console.log(multiplicarElemento(vet, multiplicar), multipplicarElementomenor5(vet, multiplicar))

// resposta do curso
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))