/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

// minha resposta
function conceito(vetornotas){
    let resultado = []
    for(let i in vetornotas){
        if(vetornotas[i] >= 0 && vetornotas[i] <= 10){
            if(vetornotas[i] < 5){
                resultado.push('D')
            }else if(vetornotas[i] < 7){
                resultado.push('C')
            }else if(vetornotas[i] < 9){
                resultado.push('B')
            }else{
                resultado.push('A')
            }
        }else{
            resultado.push('Nota não válida')
        }
    }
    return resultado
}

let notas = [10, 9.5, 3.9, 7, 4.5, 45]

console.log(conceito(notas))

// resposta do curso
function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)