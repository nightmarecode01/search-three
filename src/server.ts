import appServer from './app';

appServer()
  .then((app) => {
    app.start();
  })
  .catch((err: Partial<Error> & unknown) => console.log(err));