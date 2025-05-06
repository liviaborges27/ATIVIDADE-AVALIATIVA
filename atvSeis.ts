/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Lívia Borges Matos
*/
let teclado = require(`prompt-sync`)();


let cont: number = 0;
let quantPares: number = 0;
let quantImpares: number = 0;
let par: number[] = []; //variável array
let impar: number[] = []; // variável array


for(cont = 1; cont <= 10; cont++){         // repetição que com auxilio da cont pede 10 números
    let n: number = parseInt(teclado('Digite um número:'));

    if( n % 2 == 0){
        quantPares++
        par.push(n);                    //armazena o número em par
    }
    else{
        quantImpares++
        impar.push(n);               // armazena o número em impar
    }

}



   
console.log(` Tem ${quantPares} números pares, sendo eles: ${par} , e tem ${quantImpares} números ímpares, sendo eles: ${impar}`);