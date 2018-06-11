import { Controller } from "egg";

export default class UserController extends Controller {
  public async register() {
    const { ctx } = this;
    ctx.body = 'register';
  }
  public async login() {
    const { ctx } = this;
    ctx.body = 'login';
  }
  public async updatePassword() {
    const { ctx } = this;
    ctx.body = 'updatePassword';
  }
  public async resetPassword() {
    const { ctx } = this;
    ctx.body = 'resetPassword';
  }
  public async sendPasswordResetEmail() {
    const { ctx } = this;
    ctx.body = 'sendPasswordResetEmail';
  }
}
