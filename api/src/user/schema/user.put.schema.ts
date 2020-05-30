import * as Joi from '@hapi/joi';

export const PutUserPhoneSchema = Joi.object({
  uuid: Joi.string().required(),
  phone: Joi.string().required(),
});

export const PutUserPasswordSchema = Joi.object({
  uuid: Joi.string().required(),
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});
