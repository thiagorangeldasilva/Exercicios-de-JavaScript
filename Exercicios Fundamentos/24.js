/* Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

// minha reposta
function imprimirHelloWorld(){
    // com for
    for (let cont = 0; cont < 11; cont++){
        console.log(`${cont+1}: Hello World`)
    }
    // com while
    let cont = 0
    while (cont < 11){
        console.log(`${cont+1}: Hello World`)
        cont++
    }
}
imprimirHelloWorld()

// resposta do curso
function helloWorld () {
    let i = 0
     while (i < 11) {
         console.log("Hello World");
         i++
     }   
 }
 
 helloWorld()