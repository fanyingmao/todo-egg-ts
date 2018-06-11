import { Application } from 'egg';
import BaseModel from './model';
export default function User (app: Application) {
  const { DATE, STRING, BOOLEAN } = app.Sequelize;

  // 创建模型
  const modelSchema = BaseModel(app, 'users', {
    name: {
      type: STRING(32),
      unique: true,
      allowNull: false,
      comment: '用户名',
    },
    avatar: {
      type: STRING(150),
      allowNull: true,
      comment: '头像',
    },
    signature: {
      type: STRING(255),
      allowNull: true,
      comment: '签名',
    },
    status: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: '用户状态: 1 正常； 0 禁用',
    },
    password: {
      type: STRING(255),
      allowNull: false,
    },
    last_actived_at: DATE, // 最后活跃时间
  }, {
    // 开启软删除
    paranoid: true,
    // 修改器
    setterMethods: {
      async password (value: any) {
        // 加密密码
        (this as any).setDataValue('password', await app.createBcrypt(value));
      },
    },
  });

  return modelSchema;
}
