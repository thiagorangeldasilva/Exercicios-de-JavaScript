/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

// minha resposta
/* no momento que estava fazendo não me atendei nas taxas, se a criança não passa a outra, mas deixei a minha
resposta do jeito que fiz pois quando eu olhar irei saber o que eu errei.*/

function alturacrianca(alturacrianca1, txdecrescimento1, alturacrianca2, txdecrescimento2){
    let ano = 0
    if(alturacrianca1 == alturacrianca2){
        return `As duas crianças tem a mesma altura.`
    }else if(alturacrianca1 < alturacrianca2){
        while(alturacrianca1 < alturacrianca2){
            ano++
            alturacrianca1 += alturacrianca1 * (txdecrescimento1/100)
            alturacrianca2 += alturacrianca2 * (txdecrescimento2/100)
        }
        return `Levou ${ano} ano(s) para a criança 1 passar em altura a criança 2`
    }else if(alturacrianca2 < alturacrianca1){
        while(alturacrianca2 < alturacrianca1){
            ano++
            alturacrianca1 += alturacrianca1 * (txdecrescimento1/100)
            alturacrianca2 += alturacrianca2 * (txdecrescimento2/100)
        }
        return `Levou ${ano} ano(s) para a criança 2 passar em altura a criança 1`
    }
}

console.log(alturacrianca(120, 10, 100, 15))

// resposta do curso
function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));