// Criando com sintaxe literal (tipo JSON)
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};

console.log(pessoa);

// Criando com construtor de objeto (estrutura comum)
let carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.ano = 2020;

console.log(carro);

let humano = {
    nome: "Maria",
    idade: 25,
    profissao: "Advogada",
    saudacao: function(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};

humano.saudacao();