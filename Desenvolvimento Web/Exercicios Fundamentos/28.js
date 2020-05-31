/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

// minha resposta
let vetodenumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function parouimpar(arraynumero){
    let qntpar = 0
    let qntimpar = 0
    for(let indice in arraynumero){
        if(arraynumero[indice] % 2 == 0){
            qntpar++
        }else{
            qntimpar++
        }
    }
    return `Tem ${qntpar} pares e ${qntimpar} ímpares.`
}

console.log(parouimpar(vetodenumeroe))

// resposta do curso
function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)