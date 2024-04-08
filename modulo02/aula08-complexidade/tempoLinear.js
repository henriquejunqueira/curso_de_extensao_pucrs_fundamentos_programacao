function encontraElemento(array, alvo) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === alvo) {
            return i;
        }
    }
    return -1;
}

const lista = [1, 2, 3, 4, 5, 10, 11, 13, 20, 14, 22];
const alvo = 3;
const indice = encontraElemento(lista, alvo);

if (indice !== -1) {
    console.log(`Elemento ${alvo} encontrado no índice ${indice}.`);
} else {
    console.log(`Elemento ${alvo} não encontrado na lista.`);
}