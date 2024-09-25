import { Three } from "./binary-three/Three";
import { MaxHeap } from "./heap/max-heap";
import { MinHeap } from "./heap/min-heap";

class Main {
    start() {
        const three = new Three();

        three.add(10);
        three.add(9);
        three.add(11);
        three.add(15);
        three.add(12);
        three.add(13);
        three.add(14);
        three.add(2);
        three.add(5);
        three.add(8);
        three.add(1);        

        three.find(1);

        three.find(8);

        three.tour(-1);

        three.delete(2);

        three.find(1);

        three.find(8);

        three.tour(-1);

        const maxHeap = new MaxHeap<number>();
        maxHeap.insert(10);
        maxHeap.insert(15);
        maxHeap.insert(20);
        maxHeap.insert(17);

        maxHeap.printHeap();

        const minHeap = new MinHeap<number>();
        minHeap.insert(10);
        minHeap.insert(15);
        minHeap.insert(5);
        minHeap.insert(3);

        minHeap.printHeap();
    }
}

const makeApp = async (): Promise<Main> => {    
    return new Main();    
};

export default makeApp;