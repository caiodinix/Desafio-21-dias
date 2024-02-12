/// DRIVE THRU

let combustivel
let quantidade
let pneu

combustivel = prompt('Quer abastecer com alcool ou gasolina?')
quantidade = Number(prompt('Quantos litros?'))
pneu = prompt('Gostaria de calibrar o pneu?')

switch(combustivel) {
    case 'gasolina':
        console.log('Carro abastecido com ' + quantidade + ' litros de gasolina' + ' valor a pagar ' + 'R$' +
            5*quantidade)
        break;
    case 'alcool':
        console.log('Carro abastecido com ' + quantidade + ' litros de álcool'+ ' valor a pagar ' + 'R$' +
            3*quantidade)
        break;
    default:
        console.log('Escolha o combustivel corretamente')
        break;
}
if(pneu == 'sim') {
    console.log('pneus calibrados com sucesso')
}