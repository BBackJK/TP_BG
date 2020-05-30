import * as Joi from '@hapi/joi';

export const DeleteUserSchema = Joi.object({
  uuid: Joi.string().required(),
});
