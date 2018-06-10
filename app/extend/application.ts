import * as bcryptjs from 'bcryptjs';

const extendApplication = {
  /**
   * bcryptjs 加密
   *
   * @param {string} value 需要加密的值
   * @param {number} salt 加密的强度 0 - 12
   * @returns string
   */
  async createBcrypt (value: string, salt: number = 10): Promise<string> {
    return bcryptjs.hashSync(value, bcryptjs.genSaltSync(salt));
  },
};

export default extendApplication;
