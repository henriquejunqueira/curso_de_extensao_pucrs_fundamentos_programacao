/*** Ordena algoritmos em ordem crescente e decrescente. Com este algoritmo, iteramos e trocamos pares 
até mover o elemento maior (ou o menor, dependendo do que queremos alcançar) para o final da lista. Feito 
isso, passamos a mover o segundo maior (ou segundo menor) elemento para a penúltima posição da lista e 
assim iremos "borbulhar" até atingirmos o arranjo ordenado que procuramos ***/

function bubbleSort(arr) {
    const n = arr.length;
    let trocou;

    do {
        trocou = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                trocou = true;
            }
        }
    } while (trocou);

    return arr;
}

const listaDesordenada = [42, 8, 16, 15, 4, 23];
const listaOrdenada = bubbleSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);