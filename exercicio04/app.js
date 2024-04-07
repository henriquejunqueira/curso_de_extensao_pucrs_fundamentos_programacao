/* Crie uma função que receba o raio de um círculo e retorne sua área. */
let raio = parseFloat(prompt("Digite o raio de um círculo: "));
const pi = 3.14159;
let area = pi * Math.pow(raio, 2); // PI * raio²

console.log("Area do círculo: " + area + "m²");