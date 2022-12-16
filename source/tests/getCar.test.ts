import assert from 'assert'
import { describe } from 'mocha'
import Joi from 'joi'
import { carSchema } from '../schemas/car.schema'
import { getCar } from '../api/getCar'

describe('should validate joi car schema', () => {
  it('tests for joi instance', () => {
    assert(Joi.isSchema(carSchema))
  })
})

describe('should validate different respones from car api', () => {
  it('tests if Mazda has a valid object', () => {
    const Mazda = getCar('Mazda')

    Joi.assert(Mazda, carSchema)
  })

  it('tests if BMW has an invalid object', () => {
    const BMW = getCar('BMW')

    try {
      Joi.assert(BMW, carSchema)
    } catch (error) {
      assert(
        error,
        `Error [ValidationError]: {
          "brand": "BMW",
          "type": "335",
          "extras": [
            "LCI",
            "KW Coilovers"
          ],
          "milage" [1]: "100000"
        }
        
        [1] "milage" must be a number`,
      )
    }
  })

  it('tests if RedBull has a valid object', () => {
    const RedBull = getCar('RedBull')

    Joi.assert(RedBull, carSchema)
  })

  it('tests if Volkswagen has an invalid object', () => {
    const Volkswagen = getCar('Volkswagen')

    try {
      Joi.assert(Volkswagen, carSchema)
    } catch (error) {
      assert(
        error,
        `Error [ValidationError]: {
          "brand": "Volkswagen",
          "type": "ID3",
          "milage": 315,
          "extras" [1]: "Roof Racks"
        }
        
        [1] "extras" must be an array`,
      )
    }
  })
})
