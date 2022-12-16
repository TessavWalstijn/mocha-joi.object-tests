import Joi from 'joi'

export interface ICar {
  brand: string
  type: string
  milage: number
  extras: any[]
}

export const carSchema = Joi.object({
  brand: Joi.string().required(),
  type: Joi.string().required(),
  milage: Joi.number().required().strict(),
  extras: Joi.array().required(),
})
