/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Lívia Borges Matos
*/

let teclado = require(`prompt-sync`)();
let escolha: number = 0;
let pagamento: number = 0;
let valorF: number = 0;

console.log(`Modelo de carros: \n1- Civc: R$ 265.900, 2- Monza: R$ 14.883. \n3-Saveiro: R$ 103.990, 4-Hilux: R$ 245.990`);

 escolha = parseInt(teclado(`Escolha uma opção: (1/2/3 ou 4):`));
 console.log((`Insira uma forma de pagamento: \n Digite "A" para : À vista \n Digite "P" para: Parcelado `));
 
 pagamento = teclado();

 if(escolha == 1 && pagamento == `A`){
          valorF =  (265900 / 100) * 15
          console.log(`O valor final é de: ${valorF}`);
 }
 else if(escolha == 1 && pagamento == `P`){
         valorF = ((265900 / 100) * 13)+265900
         console.log(`O valor final é de : ${valorF}`);
 }
 else if(escolha == 2 && pagamento == `A`){
    valorF = (14.883 / 100 )* 15
    console.log(`O valor final é de : ${valorF}`);
}
else if(escolha == 2 && pagamento == `P`){
    valorF = ((14.883 / 100) * 13)+ 14.883
    console.log(`O valor final é de : ${valorF}`);
}
else if(escolha == 3 && pagamento == `A`){
    valorF = (103.990 / 100 )* 15
    console.log(`O valor final é de : ${valorF}`);
}
else if(escolha == 3 && pagamento == `P`){
    valorF = ((103.990 / 100) * 13)+ 103.990
    console.log(`O valor final é de : ${valorF}`);
}
else if(escolha == 4 && pagamento == `A`){
    valorF = (245.990 / 100 )* 15
    console.log(`O valor final é de : ${valorF}`);
}
else if(escolha == 4 && pagamento == `P`){
    valorF = ((245.990 / 100) * 13)+ 245.990
    console.log(`O valor final é de : ${valorF}`);
}