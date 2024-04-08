/*** Vetor ***/

// Vetor vazio
var vetor = [];

// Adiciona elementos ao final do vetor
vetor.push("Maçã");
vetor.push("Banana");
console.log(vetor);

// Adiciona um elemento no início do vetor
vetor.unshift("Morango");
console.log(vetor);

// Remove um elemento do final do vetor
var ultimoElemento = vetor.pop();
console.log(ultimoElemento);
console.log(vetor);

// Remove um elemento do início do vetor
var primeiroElemento = vetor.shift();
console.log(primeiroElemento);
console.log(vetor);

// Acessa um elemento do vetor pelo índice
console.log(vetor[1]);

// Modifica um elemento do vetor pelo índice
vetor[0] = "Pêssego";
vetor[1] = "Cacau";
vetor.push("Alface");

console.log(vetor);