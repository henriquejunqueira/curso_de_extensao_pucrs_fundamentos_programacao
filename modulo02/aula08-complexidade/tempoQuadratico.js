function ordenaSelecao(lista) {
    const n = lista.length;

    for (let i = 0; i < n - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (lista[j] < lista[menorIndex]) {
                menorIndex = j;
            }
        }

        if (menorIndex !== i) {
            const temp = lista[i];
            lista[i] = lista[menorIndex];
            lista[menorIndex] = temp;
        }
    }

    return lista;
}

const listaDesordenada = [64, 34, 25, 12, 22, 11, 90, 231, 4324, 122, 56, 876, 34, 657, 89, 70, 36, 64, 34, 25, 12, 22, 11, 90, 231, 4324, 122, 56, 876, 34, 657, 89, 70, 36];
const listaOrdenada = ordenaSelecao(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);