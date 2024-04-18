import { Node } from "./Node";

export class Three {
    private root: Node | undefined;

    getRoot() {
        return this.root;
    }

    private insert(newValue: number, father: Node) {
        if(father.sonValueIsLess(newValue)) {
            this.insertInLeft(newValue, father);
        } else if (father.sonValueIsMajor(newValue)) {
            this.insertInRight(newValue, father);
        } else {
            this.insertInRight(newValue, father);
        }
    }

    private insertInLeft(newValue: number, father: Node) {
        if (father.getLeft() !== undefined) {
            this.insert(newValue, father.getLeft());
        } else {
            father.createLeft(newValue);
        }
    }

    private insertInRight(newValue: number, father: Node) {
        if (father.getRight() !== undefined) {
            this.insert(newValue, father.getRight());
        } else {
            father.createRight(newValue);
        }
    }

    add(value: number) {
        if(this.root === undefined) {
            this.root = new Node(value);
        } else {
            this.insert(value, this.root);
        }
    }

    private search(value: number) {
        let actual = this.root;

        if(actual === undefined) throw new Error("Error: Three is empty");

        while(actual !== undefined) {
            const actualValue = actual.getValue();

            console.log('Actual value: ' + actualValue);

            if(actualValue === value) return actual;

            else if (actual.sonValueIsLess(value)) {
                actual = actual.getLeft();
                console.log('Less - To Left');
            } else if (actual.sonValueIsMajor(value)) {
                actual = actual.getRight();
                console.log('Major - To Right');
            }
        }

        throw new Error("Error: Value not found");
    }

    find(value: number) {

        console.log("Finding ............... "+value);

        const foundNode = this.search(value);

        if(foundNode!==undefined) return foundNode.getValue();

        throw new Error("Error: value not found.")
    }

    private validateAndReplace(foundNode: Node, node: Node) {      
        if(foundNode.getFather() !== undefined) {
            this.root = node;
        } else if(foundNode.isLeft()) {            
            foundNode.getFather().setLeft(node);
        } else {
            foundNode.getFather().setRight(node);
        }
    }

    delete(value: number) {
        const foundNode = this.search(value);          

        if(foundNode.hasOneChild() || foundNode.hasNoChildren()) {
            this.validateAndReplace(foundNode, foundNode.getMyUniqueSon())
        } else {
            const newNode = foundNode.findMyMin();
            this.delete(newNode.getValue());
            foundNode.setValue(newNode.getValue());
            newNode.delete();
        }
    }

    private preOrder(node?: Node) {
        if(node !== undefined) {
            console.log(node.getValue());
            this.preOrder(node.getLeft());
            this.preOrder(node.getRight());
        } 
    }

    private inOrder(node?: Node) {
        if(node !== undefined) {
            this.inOrder(node.getLeft());
            console.log(node.getValue());
            this.inOrder(node.getRight());
        } 
    }

    private postOrder(node?: Node) {
        if(node !== undefined) {
            this.postOrder(node.getLeft());
            this.postOrder(node.getRight());
            console.log(node.getValue());
        } 
    }    

    tour(mode: -1 | 0 | 1) {
        const initialNode = this.root;
        
        if(mode === -1) {
            console.log("Doing Pre-order........")
            this.preOrder(initialNode);
        } else if (mode === 0) {
            console.log("Doing In-order.........")
            this.inOrder(initialNode);
        } else {
            console.log("Doing Post-order.......")
            this.postOrder(initialNode);
        }
    }
}