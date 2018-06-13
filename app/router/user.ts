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

  const userController = controller.user;

  // 注册
  router.post('/user/register', userController.register);
  // 登录
  router.post('/user/login', userController.login);
  // 重置密码
  router.post('/user/password/reset', userController.updatePassword);
  // 验证密码的正确性
  router.post('/user/password/verify', userController.resetPassword);
  // 发送密码重置邮件
  router.post('/user/password/email', userController.sendPasswordResetEmail);
};
