import Joi from 'joi'

export interface IBar {
  name: string
  address: string
  drinks: object
}

export const barSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  drinks: Joi.object().required(),
})
