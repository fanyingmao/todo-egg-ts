import Controller from '../modules/controller';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = 'index';
  }

  public async show() {
    const { ctx } = this;
    ctx.body = 'show';
  }

  public async edit() {
    const { ctx } = this;
    ctx.body = 'edit';
  }

  public async update() {
    const { ctx } = this;
    ctx.body = 'update';
  }

  public async destroy() {
    const { ctx } = this;
    ctx.body = 'destroy';
  }
}
