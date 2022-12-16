import Joi from 'joi'

export interface IPerson {
  name: string
  age: number
  siblings: any[]
  metaData: object
  active: boolean
}

export const personSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  siblings: Joi.array().required(),
  metaData: Joi.object().required(),
  active: Joi.boolean().required(),
})
