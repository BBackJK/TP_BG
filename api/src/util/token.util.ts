import { v4 as uuid } from 'uuid';

export const Token = {
  getUUID(): string {
    const token = uuid().split('-');

    return `${token[2]}${token[1]}${token[0]}${token[3]}${token[4]}`;
  },
};
