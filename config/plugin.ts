import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
   // 挂载 egg-jwt
   jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 挂载 egg-sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;
