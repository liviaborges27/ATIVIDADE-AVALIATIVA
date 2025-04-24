/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Lívia Borges Matos
*/
let teclado = require(`prompt-sync`)();

let valor: number = 0;

valor = parseInt(teclado("Digite um valor:"));

if (valor >= 0 && valor < 11) {
    console.log(`O valor está em um  intervalo de 0 até 10`)
} else if (valor >= 11 && valor < 21) {
    console.log(`O valor está em um  intervalo de 10 até 20`)
} else if (valor >= 20 && valor < 31) {
    console.log(`O valor está em um  intervalo de 20 até 30`)
} else if (valor >= 30 && valor < 41) {
    console.log(`O valor está em um  intervalo de 30 até 40`)
} else if (valor >= 40 && valor < 51) {
    console.log(`O valor está em um  intervalo de 40 até 50`)
} else if (valor >= 50 && valor < 61) {
    console.log(`O valor está em um  intervalo de 50 até 60`)
} else if (valor >= 60 && valor < 71) {
    console.log(`O valor está em um  intervalo de 60 até 70`)
} else if (valor >= 70 && valor < 81) {
    console.log(`O valor está em um  intervalo de 70 até 80`)
} else if (valor >= 80 && valor < 91) {
    console.log(`O valor está em um  intervalo de 80 até 90`)
} else if (valor >= 90 && valor < 101) {
    console.log(`O valor está em um  intervalo de 90 até 100`)
} else if (valor > 100) {
    console.log(`Digite um número menor que seja até 100`)
}


