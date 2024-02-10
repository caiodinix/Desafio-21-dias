/// MEDIA DE NOTAS 
    // DEFININDO VARIAVEIS
    let sexo 
    let nota 
    let novanota
    let condicao = true
    let media = 0
    let maiornotahomem = 0
    let qtdhomem = 0
    let qtdmulhermaisde7 = 0
    let alunos = 0

    // USANDO WHILE
    while (condicao) {
        sexo = prompt("Escolha o sexo do aluno" + "\nh - Homem; \nm - Mulher");
        nota = parseFloat(prompt("Informe a nota do aluno"));
        novanota = prompt("Deseja cadastrar outra nota?")
               
        if (sexo == "h") {
            if (nota > maiornotahomem) {
                maiornotahomem = nota
            }
            qtdhomem ++  
        }
        if (sexo == "m" && nota > 7 ) {
             qtdmulhermaisde7 ++
        }
        media += nota  
        alunos ++
        if (novanota == "nao") {
            condicao = false
       }

    }
media = media / alunos

console.log (`Média geral dos alunos: ${media}`)
console.log (`Números de homens cadastrados: ${qtdhomem}`)
console.log (`Números de mulheres com nota maior que 7: ${qtdmulhermaisde7}`)
console.log (`Maior nota entre os homens: ${maiornotahomem}`)

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
    

