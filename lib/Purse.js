const debug = require('debug')('purse.io')
const fetch = require('node-fetch')
const qs = require('qs')
const validator = require('./validator')
const v1 = require('./v1')

class Purse {
  constructor (opts) {
    this.ApiVersion = v1
    debug('Using Purse.io API version:', this.ApiVersion.VERSION)
    this.opts = {
      limit: null,
      offset: 0,
      country: null,
      amount: null,
      hide: null
    }
    Object.assign(this.opts, opts)
    return this
  }

  limit (x) {
    this.opts.limit = x
    validator(this.opts)
    return this
  }

  offset (x) {
    this.opts.offset = x
    validator(this.opts)
    return this
  }

  country (x) {
    this.opts.country = x
    validator(this.opts)
    return this
  }

  amount (x) {
    this.opts.amount = x
    validator(this.opts)
    return this
  }

  hide (x) {
    this.opts.hide = x
    validator(this.opts)
    return this
  }

  fetch () {
    validator(this.opts)
    let params = qs.stringify(this.opts)
    let endPoint = `${this.ApiVersion.OFFERS_ENTRYPOINT}?${params}`
    debug('Calling', endPoint)
    return fetch(endPoint, {headers: {'User-Agent': this.ApiVersion.VALID_USER_AGENT}})
      .then(res => res.json())
      .then(res => Promise.resolve(res.results))
  }

  getCountries () {
    return this.ApiVersion.COUNTRIES
  }

  getLimits () {
    return this.ApiVersion.LIMITS
  }

  version () {
    return this.ApiVersion.VERSION
  }
}

module.exports = Purse
