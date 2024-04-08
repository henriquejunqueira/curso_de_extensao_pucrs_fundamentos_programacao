/*** Busca Linear ou sequencial - a lista é varrida em sequencia até o item buscado ser encontrado ***/

function buscaLinear(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return true;
        }
    }
    return false;
}

const listaNumeros = [7, 1, 3, 5, 9, 11, 13, 7];
const numeroProcurado = 7;

if (buscaLinear(listaNumeros, numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}
