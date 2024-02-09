/// RESTAURANTE
    // Definindo variaveis
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

/// MOTORISTA
    // Definindo variaveis
    let nome
    let idade 
    let habilitacao 
    let carro

    // Solicitando dados do usuario
    nome = prompt("Qual é o seu nome?")
    idade = parseInt(prompt("Qual é a sua idade?"))
    habilitacao = prompt("Você tem habilitação?")
    carro = prompt("Você tem carro?")

    //Exibindo mensagem no console
    if (idade >= 18 && habilitacao === "sim" && carro === "sim") {
        console.log(nome,", você será o motorista!");
    } else if (idade < 18 || habilitacao === "nao") {
        console.log(nome," você não pode dirigir")
    } else if (idade >= 18 && habilitacao === "sim" && carro === "nao") {
        console.log(nome,", você pode dirigir mas não tem carro")
    } else {
        console.log("Insira corretamente as informações")
    }

