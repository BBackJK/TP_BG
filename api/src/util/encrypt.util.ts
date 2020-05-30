import * as Bcrypt from 'bcryptjs';

export const Encryption = {
  async encrypt(password: string): Promise<string> {
    const salt: string = await Bcrypt.genSalt(10);

    return await Bcrypt.hash(password, salt);
  },

  async check(inputPassword: string, realPassword: string): Promise<boolean> {
    return await Bcrypt.compare(inputPassword, realPassword);
  },
};
