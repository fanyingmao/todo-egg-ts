import { Service } from 'egg';

export default class UserService extends Service {
  public async find(userName: string) {
    return this.ctx.model.User.find({ userName }).exec();
  }
  public async findAll() {
    return this.ctx.model.User.find({}).exec();
  }
  public async carete(userName: string, password: string) {
    return this.ctx.model.User.find({ userName, password }).exec();
  }
}
