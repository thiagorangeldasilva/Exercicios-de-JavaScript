/*Faça um algoritmo que calcule o fatorial de um número*/

// minha resposta
function fatorial(numero){
    let resultado = 1
    let contador = 1
    if (numero == 0){
        resultado = 0
    }else{
         while (contador <= numero){
            resultado *= contador
            contador++
        }
    }
    console.log(`O fatorial de ${numero} é ${resultado}`)
}

fatorial(4)

// resposta do curso
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(4))