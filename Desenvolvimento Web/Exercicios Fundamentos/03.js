/*  Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente.*/

// minha resposta
function calculodepotencia(base, expoente){
    return base ** expoente
}
console.log(calculodepotencia(2,2))

// resposta do cuso
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))