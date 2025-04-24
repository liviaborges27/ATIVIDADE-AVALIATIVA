/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Lívia Borges Matos
*/

let teclado = require(`prompt-sync`)();

let notaUm: number = 0;
let notaDois: number = 0;
let notaTres: number = 0;
let notaQuatro: number = 0;
let notaCinco: number = 0;
let notaMaior: number = 0;
let notaMenor: number = 0;
let notaMedia: number = 0;

notaUm = parseInt(teclado("Digite a nota 1: "));
notaDois = parseInt(teclado("Digite a nota 2: "));
notaTres = parseInt(teclado("Digite a nota 3: "));
notaQuatro = parseInt(teclado("Digite a nota 4: "));
notaCinco = parseInt(teclado("Digite a nota 5: "));

let maior: number = 0;
let menor: number = 0;

if (notaUm >= notaDois && notaUm >= notaTres && notaUm >= notaQuatro && notaUm >= notaCinco) maior = notaUm
if (notaUm <= notaDois && notaUm <= notaTres && notaUm <= notaQuatro && notaUm <= notaCinco) menor = notaUm

if (notaDois >= notaUm && notaDois >= notaTres && notaDois >= notaQuatro && notaDois >= notaCinco) maior = notaDois
if (notaDois <= notaUm && notaDois <= notaTres && notaDois <= notaQuatro && notaDois <= notaCinco) menor = notaDois

if (notaTres >= notaDois && notaTres >= notaUm && notaTres >= notaQuatro && notaTres >= notaCinco) maior = notaTres
if (notaTres <= notaDois && notaTres <= notaUm && notaTres <= notaQuatro && notaTres <= notaCinco) menor = notaTres

if (notaQuatro >= notaDois && notaQuatro >= notaTres && notaQuatro >= notaUm && notaUm >= notaCinco) maior = notaQuatro
if (notaQuatro <= notaDois && notaQuatro <= notaTres && notaQuatro <= notaUm && notaQuatro <= notaCinco) menor = notaQuatro

if (notaCinco >= notaDois && notaCinco >= notaTres && notaCinco >= notaQuatro && notaCinco >= notaUm) maior = notaCinco
if (notaCinco <= notaDois && notaCinco <= notaTres && notaCinco <= notaQuatro && notaCinco <= notaUm) menor = notaCinco


media = notaUm + notaDois + notaTres + notaQuatro + notaCinco / 5

console.log(`A maior nota é: ${maior}, enquanto a menor nota é: ${menor}, e a média das notas é: ${media}`)


