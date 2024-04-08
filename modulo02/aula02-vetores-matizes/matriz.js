/*** Matriz ***/

// Matriz 3x3
var matriz1 = [
    [1, 2, 3], // primeira linha
    [4, 5, 6], // segunda linha
    [7, 8, 9], // terceira linha
];

var matriz2 = [
    [100, 200, 300], // primeira linha
    [400, 500, 600], // segunda linha]
    [700, 800, 900]
];

// Função para imprimir uma matriz com identificadores de colunas e linhas
function imprimeMatriz(matriz){
    var header = "   "; // Espaçamento inicial para o cabeçalho das colunas

    // Cria o cabeçalho das colunas
    for(var i = 0; i < matriz[0].length; i++){
        header += "C" + (i + 1) + " ";
    }

    console.log(header); // Imprime o cabeçalho das colunas

    // Imprime as linhas com seus identificadores
    for(var i = 0; i < matriz.length; i++){
        var linha = "L" + (i + 1) + ":" + matriz[i].join(" ");
        console.log(linha);
    }
}

// Testando a funçã com uma matriz 3x3
var matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimeMatriz(matriz1);

// Testando a funçã com uma matriz 3x3
var matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimeMatriz(matriz1);

// Imprimindo a matriz completa
console.log(matriz1);

// Percorrendo todos os elementos da matriz
for(var i = 0; i < matriz1.length; i++){
    for(var j = 0; j < matriz1[i].length; j++){
        console.log('(' + (i+1) + ',' + (j+1) + ') = ' + matriz1[i][j]);
    }
}

// Acesssando elementos individuais da matriz
console.log(matriz1[0][0]);
console.log(matriz1[1][1]);
console.log(matriz1[2][2]);

// Modificando um elemento da matriz
matriz1[1][1] = 10;
console.log(matriz1[1][1]);

// Imprimindo a matriz depois da modificação
console.log(matriz1);

function somaElementos(matriz1){
    var soma = 0;

    for(var i = 0; i < matriz1.length; i++){
        for(var j = 0; j < matriz1[i].length; j++){
            soma += matriz1[i][j];
        }
    }

    return soma;
}

console.log(somaElementos(matriz1));

// Função para somar duas matrizes
function somaMatrizes(matriz1, matriz2){
    // Verifica se as matrizes têm as mesmas dimensões
    if(matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length){
        return null; // Retorna null se as dimensões não forem as mesmas
    }

    var matrizSoma = [];
    
    // Percorre todas as linhas
    for(var i = 0; i < matriz1.length; i++){
        matrizSoma[i] = []; // Adiciona uma nova linha à matriz

        // Percorre todas as colunas
        for(var j = 0; j < matriz1[i].length; j++){
            matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j]; // Soma os elementos correspondentes das duas matrizes
        }
    }

    return matrizSoma;
}

imprimeMatriz(somaMatrizes(matriz1, matriz2));