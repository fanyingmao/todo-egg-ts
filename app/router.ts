import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  require('./router/todo')(app);
  require('./router/user')(app);
};
