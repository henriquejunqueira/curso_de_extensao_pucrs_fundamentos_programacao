/*** Trabalhando com arrays ***/

// Array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]);
console.log(numeros[2]);

// Modificando um elemento
numeros[1] = 10;
console.log(numeros);

// Adicionando elementos
numeros.push(6);
console.log(numeros);

// Removendo elementos
numeros.pop();
console.log(numeros);

// Verificando tamanho do array
console.log(numeros.length);

// Limpando os elementos
numeros = [];
console.log(numeros);

// Array vazio de Strings
var frutas = [];

// Adicionando elementos ao array
frutas.push("maçã");
frutas.push("banana");
frutas.push("laranja");

// Acessando elementos do array
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// Alterando um elemento do array
frutas[1] = "uva";
console.log(frutas);

// Obtendo o tamanho do array
console.log(frutas.length);

// Removendo elementos do array
frutas.pop();
console.log(frutas);

// Verificando se um elemento existe no array
console.log(frutas.includes("maçã"));
console.log(frutas.includes("banana"));

/*** Manipulando array ***/

let cores = ["azul", "preto", "branco"];
let notas = [8, 8.5, 10, 7];

// Percorrendo o array com um loop
for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}

let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += (notas[i]);
}

console.log("soma = ", soma);
console.log("média = ", soma / notas.length);

function media(){
    var soma = 0;
    notas.push(5);

    for(let i = 0; i < notas.length; i++){
        soma += (notas[i]);
    }

    soma / notas.length;
    console.log(notas);
}

media();