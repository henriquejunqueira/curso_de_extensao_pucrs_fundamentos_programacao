/*** Busca Binária - Ao invés de pesquisar a lista em sequência, uma busca binária começará examinando o 
 * item do meio. Se esse item for aquele que estamos procurando, a busca termina. Se não for o item 
 * correto, podemos usar a natureza ordenada da lista para eliminar a metade dos itens restantes. ***/

function buscaBinaria(arr, elemento) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (arr[meio] === elemento) {
            return true;
        } else if (arr[meio] < elemento) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return false;
}

const listaOrdenada = [1, 3, 5, 7, 9, 11, 13];
const numeroProcurado = 19;

if (buscaBinaria(listaOrdenada, numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}