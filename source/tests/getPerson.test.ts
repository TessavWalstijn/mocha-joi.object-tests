import assert from 'assert'
import { describe } from 'mocha'
import Joi from 'joi'
import { personSchema } from '../schemas/person.schema'
import { getPerson } from '../api/getPerson'

describe('should validate joi person schema', () => {
  it('tests for joi instance', () => {
    assert(Joi.isSchema(personSchema))
  })
})

describe('should validate different respones from person api', () => {
  it('tests if James has a valid object', () => {
    const James = getPerson('James')

    Joi.assert(James, personSchema)
  })

  it('tests if Johnathan has an invalid object', () => {
    const Johnathan = getPerson('Johnathan')

    try {
      Joi.assert(Johnathan, personSchema)
    } catch (error) {
      assert(
        error,
        `Error [ValidationError]: {
          "name": "Johnathan",
          "age": 23,
          "siblings": [
            "James"
          ],
          "active": true,
          "metaData" [1]: -- missing --
        }
        
        [1] "metaData" is required`,
      )
    }
  })
})
