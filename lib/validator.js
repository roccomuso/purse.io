const debug = require('debug')('purse.io')
const Validator = require('jsonschema').Validator
Validator.prototype.customFormats.null = function (input) {
  return input === null // custom type null
}
const v = new Validator()
const v1 = require('./v1')

const orderSchema = {
  'id': '/order',
  'type': 'object',
  'properties': {
    limit: { type: ['number', 'null'], 'enum': v1.LIMITS },
    offset: { type: ['number', 'null'], 'enum': v1.OFFSETS, default: 0 },
    country: { type: ['string', 'null'], 'enum': v1.COUNTRIES },
    amount: { type: ['number', 'null'], 'enum': v1.AMOUNTS }
  }
}

v.addSchema(orderSchema, '/order')

module.exports = function (value) {
  debug('validating', value)
  return v.validate(value, orderSchema, {throwError: true})
}
