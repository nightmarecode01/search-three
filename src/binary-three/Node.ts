export class Node {
    private value: any;
    private leftSon: Node | undefined;
    private rightSon: Node | undefined;

    constructor(value: any) {
        this.value = value;
    }

    setLeft(value: any) {
        this.leftSon = new Node(value);
    }

    getLeft() {
        return this.leftSon;
    }

    setRight(value: any) {
        this.rightSon = new Node(value);
    }

    getRight() {
        return this.rightSon;
    }

    getValue() {
        return this.value;
    }

    sonValueIsLess(value: Node | any) {
        return value instanceof Node ? value.getValue() < this.value : value < this.value;
    }

    sonValueIsMajor(value: Node | any) {
        return value instanceof Node ? value.getValue() > this.value : value > this.value;
    }
}