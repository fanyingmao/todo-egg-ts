import Controller from '../modules/controller';

export default class UserController extends Controller {

  /**
   * 登录
   *
   * @throws {Error}
   * @returns {object}
   */
  public async login () {
    const { ctx } = this;

    // 验证
    await ctx.validate(ctx.userValidateRule.auth.login());

    const result: any = await this.ctx.userService.auth.handleLogin();

    // 成功返回
    this.succeed({
      name: result.name,
      status: result.status,
      token: await this.foundation.jwt.create(result),
    });
  }

  /**
   * 注册
   *
   * @throws {Error}
   * @returns {object}
   */
  public async register () {
    const { ctx } = this;

    // 验证
    await ctx.validate(ctx.userValidateRule.auth.register());

    const result: any = await this.ctx.userService.auth.handleRegister();

    this.succeed(result.id);
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
