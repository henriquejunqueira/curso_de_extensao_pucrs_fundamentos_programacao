/* Crie um programa que solicite dois números ao usuário e exiba a soma, subtração, multiplicação e 
divisão desses números. */

let primeiroNumero = parseFloat(prompt('Digite o primeiro número: '));
let segundoNumero = parseFloat(prompt('Digite o segundo número: '));
let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

console.log(primeiroNumero + ' + ' + segundoNumero + ' = ' + soma);
console.log(primeiroNumero + ' - ' + segundoNumero + ' = ' + subtracao);
console.log(primeiroNumero + ' * ' + segundoNumero + ' = ' + multiplicacao);
console.log(primeiroNumero + ' / ' + segundoNumero + ' = ' + divisao);
