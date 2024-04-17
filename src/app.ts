import { Three } from "./binary-three/Three";

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
    }
}

const makeApp = async (): Promise<Main> => {    
    return new Main();    
};

export default makeApp;