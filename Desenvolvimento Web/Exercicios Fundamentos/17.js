/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

// minha resposta
function planoAumento(plano, salario){
    let salariofinal = 0
    plano = plano.toUpperCase()
    switch(plano){
        case 'A':
            salariofinal = salario * 1.1
            console.log(`Salário atual: R$ ${salario.toFixed(2).toString().replace('.', ',')}`)
            console.log(`Salário atual: R$ ${salariofinal.toFixed(2).toString().replace('.', ',')}`)
            break
        case 'B':
            salariofinal = salario * 1.15
            console.log(`Salário atual: R$ ${salario.toFixed(2).toString().replace('.', ',')}`)
            console.log(`Salário atual: R$ ${salariofinal.toFixed(2).toString().replace('.', ',')}`)
            break
        case 'C':
            salariofinal = salario * 1.2
            console.log(`Salário atual: R$ ${salario.toFixed(2).toString().replace('.', ',')}`)
            console.log(`Salário atual: R$ ${salariofinal.toFixed(2).toString().replace('.', ',')}`)
            break
        default:
            console.log("Plano inválido")
    }
}

planoAumento('A',1000)
planoAumento('b',1000)
planoAumento('c',1000)
planoAumento('d',1000)

// resposta do curso
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));