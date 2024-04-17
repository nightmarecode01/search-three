export class Node {
    private value: number;
    private leftSon: Node | undefined;
    private rightSon: Node | undefined;
    private father: Node | undefined;

    constructor(value: number, father?: Node) {
        this.value = value;
        this.father = father;
    }

    setFather(father: Node | undefined) {
        this.father = father;
    }

    getFather() {
        return this.father;
    }

    createLeft(value: number) {
        this.leftSon = new Node(value, this);
    }

    setLeft(node: Node | undefined) {
        this.leftSon = node;
    }

    getLeft() {
        return this.leftSon;
    }

    createRight(value: number) {
        this.rightSon = new Node(value, this);
    } 

    setRight(node: Node | undefined) {
        this.rightSon = node;
    }

    getRight() {
        return this.rightSon;
    }

    setValue(value: number) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    sonValueIsLess(value: Node | number) {
        return value instanceof Node ? value.getValue() < this.value : value < this.value;
    }

    sonValueIsMajor(value: Node | number) {
        return value instanceof Node ? value.getValue() > this.value : value > this.value;
    }

    hasNoChildren() {
        return this.leftSon === undefined && this.rightSon === undefined
    }

    hasOneChild() {
        return (this.leftSon !== undefined && this.rightSon === undefined) 
        || (this.leftSon === undefined && this.rightSon !== undefined) 
    }
    
    getMyUniqueSon() {
        if(this.leftSon !== undefined && this.rightSon === undefined) {
            return this.leftSon;
        } else if (this.leftSon === undefined && this.rightSon !== undefined) {
            return this.rightSon;
        } else {
            return undefined;
        }
    }

    findMyMin() {
        let actual = this.rightSon;

        while (actual.getLeft() !== undefined) {
            actual = actual.getLeft();
        }

        return actual;
    }

    isLeft() {
        return this.father !== undefined && this.father.sonValueIsLess(this.value);
    }

    delete() {
        this.setFather(undefined);
        this.setLeft(undefined);
        this.setRight(undefined);
        this.setValue(undefined);
    }
}