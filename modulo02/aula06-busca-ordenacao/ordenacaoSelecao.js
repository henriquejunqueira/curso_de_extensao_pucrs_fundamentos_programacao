/*** Passa sempre o menor valor do vetor para a primeira posição (ou o maior dependendo da ordem 
requerida), depois o de segundo menor valor para a segunda posição e sucessivamente ***/

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[menorIndex]) {
                menorIndex = j;
            }
        }

        // Troca os elementos se o menor elemento não estiver na posição atual
        if (menorIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[menorIndex];
            arr[menorIndex] = temp;
        }
    }

    return arr;
}

const listaDesordenada = [42, 8, 16, 15, 4, 23];
const listaOrdenada = selectionSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);