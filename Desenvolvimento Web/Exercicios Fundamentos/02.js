/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

// minha resposta
function classificacaoTriangulo(ladoA = 0, ladoB = 0, ladoC = 0 ){
    if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
        return `Equilátero`
    }else if((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoA != ladoB) || ladoB == ladoC){
        return `Isósceles`
    }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        return `Escaleno`
    }
}
console.log(classificacaoTriangulo(45,50,5))

 // resposta do curso
function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));
