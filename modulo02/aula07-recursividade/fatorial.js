function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // A função fatorial está chamando ela mesma, por isso ela é recursiva
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5));