/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/
let teclado = require('prompt-sync')();

let numero: number = 0;
let somaNumeros: number = 0;

while(somaNumeros < 100){
    numero = parseInt(teclado('Digite um número:'));

    somaNumeros += numero;        // somaNumeros é igual a numero mais somaNumeros
}
console.log(`A soma dos números é igual a ${somaNumeros}`);




