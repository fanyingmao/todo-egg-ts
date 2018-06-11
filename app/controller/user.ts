import { Controller } from 'egg';
import { find } from 'ym-mongodb-sql';
export default class UserController extends Controller {
  public async register() {
    const { ctx } = this;
    let a = find('tlf_user', { id: { $in: [] } }, { name: 1 });
    ctx.body = a.sql;
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
