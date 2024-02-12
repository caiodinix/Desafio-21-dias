/// CAIXA ELETRONICO

let nome
let cpf
let valor
let operacao
let saldo = 1000
let somavalores = 0
let novaoperacao
let maiorvalor = 0
let totaloperacoes = 0
let cond = true

nome = prompt("Qual é o seu nome?");
cpf = prompt("Qual é o seu cpf?");
console.log(`Senhor, ${nome} portadador do CPF ${cpf}, o seu saldo atual é R$ ${saldo}`);

while (cond) {
    valor = parseFloat(prompt("Insira o valor"));
    operacao = prompt("Voce deseja fazer qual operação" + "\n1 - Deposito \n2 - Saque");
    novaoperacao = prompt("Deseja fazer outra operação?" + "\n1 - Continuar \n2 - Parar");
    
    if(valor <= 0) {
        console.log("Operação não permitida");
    } else if (operacao == "1") {
        saldo += valor
        console.log(`Seu saldo atual é R$ ${saldo}`);
        totaloperacoes ++;
        somavalores += valor;
        if (valor > maiorvalor) {
            maiorvalor = valor;
        }
    } else if (operacao == "2" && valor > saldo){
        console.log("Saldo insuficiente");
    } else if (operacao == "2") {
        saldo -= valor;
        console.log(`Seu saldo atual é R$ ${saldo}`);
        totaloperacoes ++;
        somavalores += valor;
        if (valor > maiorvalor) {
            maiorvalor = valor;
        }
    }   
    if (novaoperacao == "2") {
    cond = false
    }

}
media = somavalores / totaloperacoes;

console.log(`O maior valor inserido é R$ ${maiorvalor}`);
console.log(`Média dos valores inseridos R$ ${media}`);
