import * as Joi from '@hapi/joi';

export const GetUserSchema = Joi.object({
  uuid: Joi.string().required(),
});

export const GetUserEmailSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
});

export const GetUserPasswordSchema = Joi.object({
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
