/// CALCULADORA BASICA
    //Definindo Variaveis
    let num1
    let num2
    let operacao

    //Coletando dados do usuario
    num1 = Number(prompt('Escolha um numero'))
    num2 = Number(prompt('Escolha outro numero'))
    operacao =  prompt('Escolha uma das 4 operações matematicas')

    // Utilizando switchCase
    switch(operacao) {
        case '*':
            console.log('num1*num2')
            break;
        case '/':
            console.log(num1/num2)
            break;
        case '+':
            console.log(num1+num2)
            break;
        case '-':
            console.log(num1-num2)
            break;
        default:
            console.log('Informações invalidas')
            break;
    }

/// ABASTECIMENTO
    //Definindo variaveis
    let combustivel
    let quantidade
    let pneu

    //Coletando dados do usuario
    combustivel = prompt('Quer abastecer com alcool ou gasolina?')
    quantidade = Number(prompt('Quantos litros?'))
    pneu = prompt('Gostaria de calibrar o pneu?')

    // Utilizando switchCase
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