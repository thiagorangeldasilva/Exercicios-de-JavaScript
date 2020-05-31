/*O cardápio de uma lanchonete é o seguinte:

Código   Descrição do Produto Preço
100      Cachorro Quente      R$ 3,00
200      Hambúrguer Simples   R$ 4,00
300      Cheeseburguer        R$ 5,50
400      Bauru                R$ 7,50
500      Refrigerante         R$ 3,50
600      Suco                 R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

// minha resposta
function imprimircardapio(){
    console.log(`Código     Descrição do Produto    Preço`)
    console.log(`100        Cachorro Quente         RS 3,00`)
    console.log(`200        Hambúrguer Simples      R$ 4,00`)
    console.log(`300        Cheeseburguer           R$ 5,50`)
    console.log(`400        Bauru                   R$ 7,50`)
    console.log(`500        Refrigerante            R$ 3,50`)
    console.log(`600        Suco                    R$ 2,80`)
    console.log()
}

function calculodepedido(codigo, quantidade){
    imprimircardapio()
    switch(codigo){
        case 100:
            return `Valor a pagar: R$ ${(quantidade*3).toFixed(2).toString().replace(".",",")}`
            break
        case 200:
            return `Valor a pagar: R$ ${(quantidade*4).toFixed(2).toString().replace(".",",")}`
            break
        case 300:
            return `Valor a pagar: R$ ${(quantidade*5.5).toFixed(2).toString().replace(".",",")}`
            break
        case 400:
            return `Valor a pagar: R$ ${(quantidade*7.5).toFixed(2).toString().replace(".",",")}`
            break
        case 500:
            return `Valor a pagar: R$ ${(quantidade*3.5).toFixed(2).toString().replace(".",",")}`
            break
        case 600:
            return `Valor a pagar: R$ ${(quantidade*2.8).toFixed(2).toString().replace(".",",")}`
            break
        default:
            return `Produto não existe`
    }
}

console.log(calculodepedido(100, 2))
console.log(calculodepedido(200, 3))
console.log(calculodepedido(300, 4))
console.log(calculodepedido(400, 5))
console.log(calculodepedido(500, 6))
console.log(calculodepedido(600, 7))
console.log(calculodepedido(700, 8))

// resposta do curso
function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))