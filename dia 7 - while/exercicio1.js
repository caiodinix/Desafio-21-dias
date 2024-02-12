/// NOTA ESCOLAR
   
let sexo 
let nota 
let novanota
let condicao = true
let media = 0
let maiornotahomem = 0
let qtdhomem = 0
let qtdmulhermaisde7 = 0
let alunos = 0

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

