/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno: Lívia Borges Matos  
*/        

let teclado = require('prompt-sync')();
let idade: number = 0;
let sexo: string = '';
let contFem: number = 0;
let contMasc: number = 0;
let contPessoa: number = 0;
let somaIdadeF: number = 0;
let somaIdadeM: number = 0;

for(contPessoa = 1; contPessoa <=50; contPessoa++){
    idade = parseInt(teclado('Digite sua idade:'));
    sexo = teclado('Digite seu sexo, insira f/m, para feminino ou masculino:');
    

    if( sexo == 'f'){
        contFem++
        somaIdadeF += idade;
    }
    else{
        contMasc++;
        somaIdadeM += idade;
    }
}


let mediaFem = somaIdadeF/contFem
let mediaMasc = somaIdadeM/contMasc

console.log(`Há ${contFem} pessoas do sexo feminino, e há  ${contMasc} do sexo Masculino.
    Então, a média de pessoas do sexo feminino é de: ${mediaFem}, e a média de pessoas do 
    sexo Masculino é de : ${mediaMasc}`);
