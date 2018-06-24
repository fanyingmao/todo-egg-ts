import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`;

  // 安全配置
  config.security = {
    csrf: {
      enable: false
    }
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528096312632_2882';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/todo',
    options: {
      server: { poolSize: 20 }
    }
  };

  // 自定义配置/未提供 .d.ts 文件的拓展配置
  const customizeConfig = {
    // redis 配置 [ 后面如果需要对某一业务进行缓存的时候，可以开启多实例来进行特定储存 ]
    redis: {
      client: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: '0'
      },
      // log 配置
      logrotator: {
        maxFileSize: 2 * 1024 * 1024, // 当文件超过 2G 时进行切割
        maxDays: 31 // 日志保留最大天数
      },
      // egg-sequelize 配置
      sequelize: {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'todo', // 数据库名称
        host: '127.0.0.1', // 数据库地址
        port: '3306', // 数据库端口
        username: 'root', // 用户名
        password: '', // 密码
        // 禁用日志; 默认值: console.log
        // logging: false,
        // 链接数据库时的可选参数
        dialectOptions: {
          charset: 'utf8mb4', // 字符集
          collate: 'utf8mb4_unicode_ci', // 校对集
          // 当在数据库中处理一个大数(BIGINT和DECIMAL)数据类型的时候，你需要启用这个选项(默认: false)
          supportBigNumbers: true,
          // tslint:disable-next-line:max-line-length
          // 这个选项需要bigNumberStrings与 supportBigNumbers同时启用，强制把数据库中大数(BIGINT和DECIMAL)数据类型的值转换为javascript字符对象串对象返回。(默认:false)
          bigNumberStrings: true
        },
        // 指定在调用 sequelize.define 时使用的选项
        define: {
          underscored: true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
          charset: 'utf8mb4' // 字符集
        },
        timezone: '+08:00' // 东八时区
      },
      agent: true
    }
  };

  return {
    ...config,
    ...customizeConfig
  };
};
