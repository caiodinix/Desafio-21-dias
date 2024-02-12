/// CALCULADORA BASICA
    
let num1
let num2
let operacao

num1 = Number(prompt('Escolha um numero'))
num2 = Number(prompt('Escolha outro numero'))
operacao =  prompt('Escolha uma das 4 operações matematicas')

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