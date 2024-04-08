// Fila ou FIFO (First-In, First-Out) significa o primeiro item que entra é o primeiro item que sai

// Criação da classe Queue (Fila)
function Queue() {
    this.elements = [];
}

// Método para adicionar um elemento ao fim da fila
Queue.prototype.enqueue = function(element) {
    this.elements.push(element); 
}

// Método para remover e retornar o elemento do início da fila
Queue.prototype.dequeue = function() {
    return this.elements.shift();
}

// Método para olhar o elemento no início da fila sem removê-lo
Queue.prototype.peek = function() {
    // Verifica se a fila está vazia, se estiver retorna null senão retorna o primeiro elemento do array
    if (this.isEmpty()) { 
        return null;
    } else {
        return this.elements[0];
    }
}

// Método para verificar se a fila está vazia
Queue.prototype.isEmpty = function() {
    // Retorna true se o array elements estiver vazio (a fila está vazia), e false caso contrário
    return this.elements.length === 0;
}

// Método para imprimir todos os elementos da fila
Queue.prototype.print = function() {
    // Para cada índice no array elements o elemento nesse índice é impresso
    for (var i = 0; i < this.elements.length; i++) {
        console.log("|",this.elements[i],"|");
        console.log("-----");
    }
}

let queue = new Queue();
queue.enqueue("X");
queue.enqueue("Y");
queue.enqueue("Z");
queue.enqueue("V");
queue.print();
console.log(queue.dequeue());
queue.print();