let idade = 18;

// Estrutura de controle if-else
if(idade >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

// Operador ternário
let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem);

// Estrutura de controle if-else encadeado
let possuiCateira = true;

if(idade >= 18){
    console.log("Você é maior de idade.");

    if(possuiCateira){
        console.log("Você pode dirigir.");
    }else{
        console.log("Você não pode dirigir.");
    }
}else{
    console.log("Você é menor de idade.");
}

// Estruturas de repetição (loops)
for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log("Finalizado for");

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}

console.log("Finalizado while");

let k = 0;
do{
    console.log(k);
    k++;
}while(k < 5);

console.log("Finalizado do-while");