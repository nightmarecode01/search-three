class Main {
    start() {
        console.log("application started");
    }
}

const makeApp = async (): Promise<Main> => {    
    return new Main();    
};

export default makeApp;