//Declaracao de variaveis
let fome = ""
let dinheiro = ""
let restaurante = ""

//Solicitando dados do usuario
fome = prompt("Está com fome?")
dinheiro = prompt("Tem Dinheiro?")
restaurante = prompt("O restaurante está aberto?")

//Exibindo mensagem no console
if(fome === "nao" || dinheiro === "nao") {
    console.log('Hoje a janta será em casa')
} else if(fome === "sim" && dinheiro === "sim" && restaurante ==="nao") {
    console.log('Peça um delivery!')
} else if (fome === "sim" && dinheiro === "sim" && restaurante ==="sim") {
    console.log("Hoje o jantar será no seu restaurante preferido")
} else {
    console.log("Não respondeu correto")
}


