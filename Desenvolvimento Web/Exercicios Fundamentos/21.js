/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

// minha reposta
function identificarplano(idade){
    let valordoplano = 100
    if (idade < 10){
       return `O valor do plano para a idade de ${idade} é R$ ${(valordoplano+80).toFixed(2).toString().replace(".",",")}` 
    }else if (idade <= 30){
        return `O valor do plano para a idade de ${idade} é R$ ${(valordoplano+50).toFixed(2).toString().replace(".",",")}` 
    }else if (idade <= 60){
        return `O valor do plano para a idade de ${idade} é R$ ${(valordoplano+95).toFixed(2).toString().replace(".",",")}` 
    }else{
        return `O valor do plano para a idade de ${idade} é R$ ${(valordoplano+130).toFixed(2).toString().replace(".",",")}` 
    }
}

console.log(identificarplano(25))
console.log(identificarplano(35))
console.log(identificarplano(45))
console.log(identificarplano(5))
console.log(identificarplano(65))

// resposta do curso
function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));