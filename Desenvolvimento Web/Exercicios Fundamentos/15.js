/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

// minha resposta
function tipoautomovel(tipocarro){
    tipocarro = tipocarro.toUpperCase()
    switch(tipocarro){
        case 'HATCH':
            return 'Compra efetuada com sucesso.'
            break
        case 'SEDAN':
        case 'MOTOCICLETA':
        case 'CAMINHONETE':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
            break
    }
}

console.log(tipoautomovel('Hatch'))
console.log(tipoautomovel('sedan'))
console.log(tipoautomovel('motocicleta'))
console.log(tipoautomovel('caminhonete'))
console.log(tipoautomovel('ônibus'))

// resposta do curso
function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));