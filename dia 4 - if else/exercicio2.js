/// MOTORISTA
    
let nome
let idade 
let habilitacao 
let carro

nome = prompt("Qual é o seu nome?")
idade = parseInt(prompt("Qual é a sua idade?"))
habilitacao = prompt("Você tem habilitação?")
carro = prompt("Você tem carro?")

if (idade >= 18 && habilitacao === "sim" && carro === "sim") {
    console.log(nome,", você será o motorista!");
} else if (idade < 18 || habilitacao === "nao") {
    console.log(nome," você não pode dirigir")
} else if (idade >= 18 && habilitacao === "sim" && carro === "nao") {
    console.log(nome,", você pode dirigir mas não tem carro")
} else {
    console.log("Insira corretamente as informações")
}
