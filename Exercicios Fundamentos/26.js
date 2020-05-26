/* Fazer um programa para encontrar todos os pares entre 1 e 100 */

// minha resposta
function procurarpares(){
    // usando for
    for (let cont = 1; cont <= 100; cont++){
        if ((cont % 2) == 0){
            console.log(cont)
        }
    }

    // usando while
    let cont = 1
    while (cont <= 100){
        if ((cont % 2) == 0){
            console.log(cont)
        }
        cont++
    }    
}

procurarpares()

// resposta do curso
function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()