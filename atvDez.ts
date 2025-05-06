/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Lívia Borges Matos
*/

let teclado = require(`prompt-sync`)();

let dados: number = 0;
let altura: number = 0;
let idade: number = 0;
let maiorIdade: number = 0;
let media: number = 0;
let somaAltura: number = 0;

for(dados = 1; dados<= 10; dados++ ){
    altura = parseInt(teclado(`Digite sua altura:`));
    idade = parseInt(teclado(`Digite sua idade:`));

    if(idade >= 18){
        idade = maiorIdade
        maiorIdade++
    
        somaAltura += altura
    
    }
     media = somaAltura/ maiorIdade
}


 console.log(`A média das alturas das pessoas de maior idade é de: ${media}`);