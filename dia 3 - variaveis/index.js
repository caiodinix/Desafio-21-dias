let nomeUsuario = prompt("Digite Seu Nome")
let idade = prompt("Digite Sua Idade")
let altura = prompt("Digite Sua Altura em M")
let peso = prompt("Digite Seu Peso em Kg")
console.log("Olá " + nomeUsuario + ", você tem " + idade + " anos, nasceu em " + (2023-idade) +
", tem " + altura + "m de altura, pesa " + peso +"kg seu IMC é " + parseInt(peso/(altura*altura)) + "Kg/m².")