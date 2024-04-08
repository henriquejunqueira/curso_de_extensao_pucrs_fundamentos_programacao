const numbers = [1, 2, 3, 4, 5, 6, -1, 7, 8, 9, 10, 0, 11];

for (let i = 0; i < numbers.length; i++) {
    // Se o número dentro do array for negativo ele é ignorado
    if (numbers[i] < 0) {
        continue;
    }

    for (let j = i + 1; j < numbers.length; j++) {
        // Se o número dentro do array for negativo ele é ignorado
        if (numbers[j] < 0) {
            continue;
        }

        if (numbers[i] + numbers[j] === 10) {
            console.log(`Pares que somam 10: ${numbers[i]}, ${numbers[j]}`);
            break; // O loop só termina quando encontrar um par
        }
    }
}
