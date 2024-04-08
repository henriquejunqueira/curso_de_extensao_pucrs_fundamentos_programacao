// Função comum
function velocidadeMedia(distancia, tempo){
    let velocidadeMedia = distancia / tempo;
    console.log("A velocidade média foi de ", velocidadeMedia, " metros por minuto");
}

// Arrow Function
const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia / tempo;
    console.log('Arrow Function ------>');
    console.log('A velocidade média foi de ', velocidadeMedia, " metros por minuto");
};

let valorDistancia = parseFloat(prompt("Digite a distância (metros)"));
let valorTempo = parseFloat(prompt("Digite o tempo (minutos)"));

_velocidadeMedia(valorDistancia, valorTempo);
velocidadeMedia(valorDistancia, valorTempo);