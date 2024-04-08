// Constante (const é do tipo local e não pode ser trocado o valor)
const PI = 3.14159;
// PI = 90;
console.log(PI);

// Variável (let é do tipo local e pode ser trocado o valor)
let idade = 25;
console.log(idade);
idade = 30;
console.log(idade);

// Variável (var é do tipo global e pode ser trocado o valor)
var nome = 'João';
console.log(nome);
nome = 'Maria';
console.log(nome);

function exemplo(){
    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x, y, z);

    if(true){
        var x = 50;
        let y = 60;

        console.log(x, y, z);
    }

    console.log(x, y, z);
}

exemplo();
