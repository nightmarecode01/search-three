import { Node } from "./Node";

export class Three {
    private root: Node | undefined;

    getRoot() {
        return this.root;
    }

    private insert(newValue: any, father: Node) {
        if (father.sonValueIsLess(newValue)) {
            this.insertInLeft(newValue, father);
        } else if (father.sonValueIsMajor(newValue)) {
            this.insertInRight(newValue, father);
        } else {
            this.insertInRight(newValue, father);
        }
    }    

    private insertInLeft(newValue: any, father: Node) {
        if(father.getLeft()) {
            this.insert(newValue, father.getLeft());
        } else {
            father.setLeft(newValue);
        }
    }

    private insertInRight(newValue: any, father: Node) {
        if(father.getRight()) {
            this.insert(newValue, father.getRight());
        } else {
            father.setRight(newValue);
        }
    }

    add(value: any) {
        if(this.root === undefined) this.root = new Node(value);
        else this.insert(value, this.root);
    }

    find(value: any) {
        let actual = this.root;

        if(actual === undefined) throw new Error("Error: Three is empty.");

        while(actual) {
            const actualValue = actual.getValue();            

            console.log(`Actual Value: ${actualValue}`);

            if(actualValue === value) return actualValue;

            else if(value < actualValue) {
                actual = actual.getLeft();
                console.log(`Less - To left`);
            } else if (value > actualValue) {
                actual = actual.getRight();
                console.log(`Major - To right`);
            }
        }

        throw new Error("Error: Value not found.");
    }
}