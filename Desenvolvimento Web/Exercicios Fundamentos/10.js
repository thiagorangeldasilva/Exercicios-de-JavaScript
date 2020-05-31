/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

// minha resposta
function divisivelpor3 (numero){
    if (Number.isInteger(numero) == true){
        if ((numero % 3) == 0){
            return true
        }
    }
    return false
}

console.log(divisivelpor3(60))

// resposta do curso
function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))