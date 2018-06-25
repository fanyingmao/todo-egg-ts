import AuthService from "../user/services/auth";
import UserRepository from "../user/repositories/user";
import AuthValidate from "../user/validates/auth";
import UserController from "../user/controllers/user";
import UserPasswordResetRepository from "../user/repositories/user_password_reset";



// User 模块
declare namespace User {

  interface ValidateRule {
    auth: AuthValidate
  }
}