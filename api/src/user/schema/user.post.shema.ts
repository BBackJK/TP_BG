import * as Joi from '@hapi/joi';

export const PostUserSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
});
