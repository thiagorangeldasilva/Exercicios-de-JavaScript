/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras */ 
// eu fiz deste jeito, mas assim que olhei a resposta, percebi que não tinha entendido a questão, vou estudar sobre

// minha resposta
function validandoString(string1, string2){
    string1 = string1.toUpperCase()
    string2 = string2.toUpperCase()
    if(string1 == string2){
        return true
    }else{
        return false
    }
}

// resposta do curso
function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))