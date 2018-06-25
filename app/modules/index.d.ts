import { User } from './types/user'

declare module 'egg' {
  export interface Application {
    modules: {
      controller: {
        user: User.Controller;
      },
      middleware: {
        admin: Admin.Middleware;
        user: User.Middleware;
        wechat: WeChat.Middleware;
      }
    }
  }

  export interface Context {
    userService: User.Service;
    userRepository: User.Repository;
    userValidateRule: User.ValidateRule;
  }
}