/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: atzcl <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| User 模块路由
|
*/

import { Application } from 'egg';

module.exports = (app: Application) => {
  const { controller, router } = app;
  router.resources('todo', '/todo', controller.todo);
};
