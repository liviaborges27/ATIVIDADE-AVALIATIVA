/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Lívia Borges Matos
*/

    let teclado = require(`prompt-sync`)();

    let escolha: string = ``;
    let numero: number = 0;
    let soma: number = 0;
    let quantNumero: number = 0;


    do{
        numero = parseInt(teclado("Digite um número:"));

        if(numero){

        quantNumero++
        soma += numero;
        quantNumero++;
    }
    escolha = teclado("Deseja insirir outro número? digite s/n:");

    }while(escolha == "s");
    

    let media = soma / numero

    console.log(`A média dos valores é de: ${media}`);





