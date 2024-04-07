/* Escreva um programa que receba um número do usuário e verifique se ele é par. Imprima “Par” se for 
par, e “Ímpar” se for ímpar. */

let numero = parseFloat(prompt("Digite um numero: "));

if(numero % 2 == 0){
    console.log("Par");
}else{
    console.log("Impar");
}