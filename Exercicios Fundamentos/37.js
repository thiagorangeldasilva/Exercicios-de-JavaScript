/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

// minha resposta
function pA(n, a1, r){
    let soma = 0
    for(let i = 0; i < n; i++){
        soma = a1 + i * r
        console.log(soma)
    }
    console.log(`Soma: ${soma} `)
}

function pG(n, a1, r){
    let soma = 0
    for(let i = 0; i < n; i++){
        soma = a1 * (r**i)
        console.log(soma)
    }
    console.log(`Soma: ${soma}`)
}

pA(10, 30, 35)
console.log('------------------')
pG(10, 3, 2)


// resposta do curso
function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 30, 35)
console.log('----------------');
pG(10, 3, 2)