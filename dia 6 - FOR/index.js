// CONTAGEM ATÉ O NUMERO RECEBIDO
let numero = Number (prompt("Escolha um numero"));
let i;
for (i = 0; i <= numero; i ++) {
console.log ("O seu numero é " + i);
}

// CONTAGEM ATÉ 50 DE 5 EM 5
for (i = 0; i <= 50; i += 5) {
    console.log (`Aqui sua contagem crescente ${i}`);
}

// CONTAGEM ATÉ 0 DE 5 EM 5
for (i = 50; i >= 0; i -= 5) {
    console.log (`Aque sua contagem decrescente ${i}`)
}

// TABUADA A PARTIR DE UM NUMERO DE ENTRADA
let numeroinicial = Number (prompt("Escolha a tabuada inicial"));
for (i = numeroinicial; i <= numeroinicial + 2 ; i ++) {
    console.log (`Tabuada do numero ${i}`)
    for (j = 0; j <=10 ; j ++)
       console.log (`${i} x ${j} = ${i * j}`)
}

