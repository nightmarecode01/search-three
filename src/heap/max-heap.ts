import { HeapNode } from "./heap-node";

export class MaxHeap<T> {
    private root: HeapNode<T> | null;
    private size: number;

    constructor() {
        this.root = null;
        this.size = 0;
    }

    // Insertar un nuevo valor en el montículo
    insert(value: T): void {
        const newNode = new HeapNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const parent = this.findParentNode();
            if (parent.left === null) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
            newNode.parent = parent;
            this.heapifyUp(newNode);
        }
        this.size++;
    }

    // Encontrar el nodo donde insertar el nuevo valor
    private findParentNode(): HeapNode<T> {
        const queue: HeapNode<T>[] = [this.root as HeapNode<T>];
        while (queue.length > 0) {
            const current = queue.shift() as HeapNode<T>;
            if (current.left === null || current.right === null) {
                return current;
            }
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        return this.root as HeapNode<T>; // Esto nunca debería pasar
    }

    // Restaurar la propiedad del montículo (heapify-up)
    private heapifyUp(node: HeapNode<T>): void {
        let currentNode = node;
        while (currentNode.parent && currentNode.value > currentNode.parent.value) {
            // Intercambiar el valor del nodo con su padre
            const temp = currentNode.value;
            currentNode.value = currentNode.parent.value;
            currentNode.parent.value = temp;
            currentNode = currentNode.parent; // Mover hacia arriba en el árbol
        }
    }

    // Función para imprimir el montículo (para depuración)
    printHeap(): void {
        console.log("Printing heap...")
        if (!this.root) return;
        const queue: HeapNode<T>[] = [this.root];
        while (queue.length > 0) {
            const node = queue.shift() as HeapNode<T>;
            console.log(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}