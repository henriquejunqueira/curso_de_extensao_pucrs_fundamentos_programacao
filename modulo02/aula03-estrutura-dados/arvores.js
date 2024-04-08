// Criação da classe Node (Nó)
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// Criação da classe BinaryTree (Árvore Binária)
function BinaryTree() {
    this.root = null;
}

// Método para adicionar um novo nó à árvore
BinaryTree.prototype.add = function(data) {
    var node = new Node(data);

    // Se a árvore estiver vazia, adiciona o novo nó como raiz, senão chama a função auxiliar para inserir o novo nó na posição correta
    if(this.root === null) {  
        this.root = node;
    } else {
        insertNode(this.root, node); 
    }
}

// Função auxiliar para inserir um novo nó na posição correta
function insertNode(node, newNode) {

    /* Se o dado do novo nó for menor que o dado do nó atual e se o nó atual não tiver um filho à esquerda, 
    adiciona o novo nó como filho à esquerda do nó atual. Se o nó atual já tiver um filho à esquerda repete o processo para o filho à esquerda */
    if(newNode.data < node.data) {
        if(node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {  /* Se o dado do novo nó for maior que o dado do nó atual e se o nó atual não tiver um filho à 
    direita, adiciona o novo nó como filho à direita do nó atual. Se o nó atual já tiver um filho à direita 
    repete o processo para o filho à direita */
        if(node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}

// Função para imprimir a árvore binária
function printTree(node, prefix = '', isLeft = null) {
    if(node != null) {
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
        console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data);
        printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
}

// Usando a função para imprimir a árvore
var tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(1);
tree.add(2);
tree.add(0);
tree.add(4);
tree.add(4.5);
tree.add(3.5);
tree.add(6);
tree.add(5);
tree.add(6.5);
tree.add(10);
tree.add(12);
tree.add(9);


printTree(tree.root);
