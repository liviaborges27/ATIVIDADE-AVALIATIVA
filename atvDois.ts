/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Lívia Borges Matos
*/

let teclado = require(`prompt-sync`)();

let numeroUm : number = 0;
let numeroDois : number = 0;
let numeroTres : number = 0;

numeroUm = parseInt(teclado("Digite um número: "));
numeroDois = parseInt(teclado("Digite outro número: "));
numeroTres = parseInt(teclado("Digite um número novamente: "));

let numeroMaior:number = 0;
let numeroMenor:number = 0;
let numeroMeio:number = 0;



if(numeroUm > numeroDois && numeroUm > numeroTres) {
    numeroMaior = numeroUm ;
    if(numeroDois > numeroTres){
        numeroMeio = numeroDois
        numeroMenor = numeroTres

    } else {
        numeroMenor = numeroDois
        numeroMeio = numeroTres
    } 
} else if(numeroDois > numeroUm && numeroDois > numeroTres) {
    numeroMaior = numeroDois ;
    if(numeroUm > numeroTres){
        numeroMeio = numeroUm
        numeroMenor = numeroTres

    } else {
        numeroMenor = numeroUm
        numeroMeio = numeroTres
    } 
}else if(numeroTres > numeroUm && numeroTres > numeroDois) {
    numeroMaior = numeroTres ;
    if(numeroUm > numeroDois){
        numeroMeio = numeroUm
        numeroMenor = numeroDois

    } else {
        numeroMenor = numeroUm
        numeroMeio = numeroDois
    } 
}

console.log(`Os valores inseridos representado em forma decrescente é: ${numeroMaior}, ${numeroMeio}, ${numeroMenor}`)


    

