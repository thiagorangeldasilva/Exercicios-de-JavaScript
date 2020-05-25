/*  Escrever um programa para exibir os números de 1 até 50 na tela. */

// minha resposta
function exibirnumeros(){
    // com for 
    for(let cont = 1; cont<=50; cont++){
        console.log(cont)
    }
    // com while
    let cont = 1
    while(cont<=50){
        console.log(cont)
        cont++
    }
}

exibirnumeros()

// resposta do curso
function contador () {
    for (let i = 1; i<=50; i++) {
        console.log(i);
    }
}
contador()