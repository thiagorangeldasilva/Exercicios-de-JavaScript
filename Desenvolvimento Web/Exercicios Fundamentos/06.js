/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

// minha resposta
function jurosSimples(capitalInicial, txdeJuros, tempodeaplic){
    let montante = capitalInicial
    for(let ano = 0; ano<tempodeaplic; ano++){
        montante += (capitalInicial*(txdeJuros/100))
    }
    return montante
}

function jurosComposto(capitalInicial, txdeJuros, tempodeaplic){
    let montante = capitalInicial
    for(let ano = 0; ano<tempodeaplic; ano++){
        montante += (montante*(txdeJuros/100))
    }
    return montante
}
const capitalInicial = 100
const txdeJuros = 2
const tempodeaplic = 10

console.log(`O montante com juros simples: R$ ${jurosSimples(capitalInicial, txdeJuros, tempodeaplic)}`)
console.log(`O montante com juros composto: R$ ${jurosComposto(capitalInicial, txdeJuros, tempodeaplic)}`)

// reposta do curso
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
