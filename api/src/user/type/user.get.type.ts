export type GetUserResponse = {
  uuid: string;
  email: string;
  name: string;
  phone: string;
  lastLoginAt: Date;
};

export type GetUserEmailResponse = {
  email: string;
};

export type GetUserPasswordResponse = {
  temporaryPassword: string;
};
