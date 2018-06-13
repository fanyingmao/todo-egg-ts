// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/controller/home';
import Todo from '../../../app/controller/todo';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: Home;
    todo: Todo;
    user: User;
  }
}
