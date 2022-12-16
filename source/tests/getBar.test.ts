import assert from 'assert'
import { describe } from 'mocha'
import Joi from 'joi'
import { barSchema } from '../schemas/bar.schema'
import { getBar } from '../api/getBar'

describe('should validate joi car schema', () => {
  it('tests for joi instance', () => {
    assert(Joi.isSchema(barSchema))
  })
})

describe('should validate different "Jimmys drinks" from car api', () => {
  it('tests if "Jimmys drinks" has a valid object', () => {
    const Jimmys = getBar('Jimmys drinks')

    Joi.assert(Jimmys, barSchema)
  })

  it('tests if Sjonnies has an invalid object', () => {
    const Sjonnies = getBar('Sjonnies')

    try {
      Joi.assert(Sjonnies, barSchema)
    } catch (error) {
      assert(
        error,
        `Error [ValidationError]: {
          "name": "Sjonnies",
          "address": "Centrum 001",
          "drinks" [1]: [
            "Heineken Pilsener"
          ]
        }
        
        [1] "drinks" must be of type object`,
      )
    }
  })

  it('tests if "Ollies coffee and more" has a valid object', () => {
    const Ollies = getBar('Ollies coffee and more')

    Joi.assert(Ollies, barSchema)
  })

  it('tests if Koekenbier has an invalid object', () => {
    const Koekenbier = getBar('Koekenbier')

    try {
      Joi.assert(Koekenbier, barSchema)
    } catch (error) {
      assert(
        error,
        `Error [ValidationError]: {
          "name": "Koekenbier",
          "address": "Pitlane 33",
          "beer": [
            "Troll-Brew German IPA",
            "Lagerbier Hell Duff",
            "Bear Beer Premium Lager"
          ],
          "drinks" [1]: -- missing --
        }
        
        [1] "drinks" is required`,
      )
    }
  })
})
