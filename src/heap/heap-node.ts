export class HeapNode<T> {
    public value: T;
    public left: HeapNode<T> | null;
    public right: HeapNode<T> | null;
    public parent: HeapNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}