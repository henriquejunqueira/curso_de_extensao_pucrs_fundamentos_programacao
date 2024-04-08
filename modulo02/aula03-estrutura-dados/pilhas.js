// Define a função contrutora stack que será usada para criar novas pilhas
function Stack(){
    this.elements = [];
}

// Define o método push no protótipo de Stack que é usado para adicionad elementos à pilha
Stack.prototype.push = function(element){
    this.elements.push(element); // Adiciona o novo elemento ao final do array elements
}

// Define o método pop no protótipo de Stack que é usado para remover e retornar o último elemento adicionado à pilha
Stack.prototype.pop = function(){
    return this.elements.pop(); // Remove e retorna o último elemento do array 'elements'
}

// Define o método peek no protótipo de Stack que é usado para olhar o elemento no topo da pilha (último adicionado) sem removê-lo
Stack.prototype.peek = function(){
    // Verifica se a pilha está vazia, e se estiver retorna null. Se não estiver, retorna o último elemento do array elements (topo da pilha)
    if(this.isEmpty()){
        return null;
    }else{
        return this.elements[this.elements.length - 1];
    }
}

// Define o método isEmpty no protótipo de Stack que é usado para verificar se a pilha está vazia
Stack.prototype.isEmpty = function(){
    return this.elements.length === 0; // Retorna true se o array elements estiver vazio (a pilha está vazia) e false caso contrário
}

// Método para imprimir todos os elementos da pilha
Stack.prototype.print = function(){
    // Para cada índice no array elements, o elemento do índice é imprimido
    for(var i = 0; i < this.elements.length; i++){
        console.log("|",this.elements[i],"|");
        console.log("-----");
    }
}

const stack = new Stack();
stack.push("Z");
stack.push("Y");
stack.push("X");
stack.push("V");
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
stack.print();
console.log(stack.isEmpty());