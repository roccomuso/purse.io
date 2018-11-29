# purse.io [![NPM Version](https://img.shields.io/npm/v/purse.io.svg)](https://www.npmjs.com/package/purse.io) ![node](https://img.shields.io/node/v/purse.io.svg) [![Dependency Status](https://david-dm.org/roccomuso/purse.io.png)](https://david-dm.org/roccomuso/purse.io) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [<img width="100" align="right" src="https://raw.githubusercontent.com/roccomuso/cryptopanic/master/comet.svg?sanitize=true" alt="bitcoin">](https://github.com/roccomuso/purse.io)

> Node.js unofficial client to `Purse.io` API

Right now `v1` API are supported.

## Install

    npm install --save purse.io

## Usage

```javascript
const Purse = require('purse.io')
let purse = new Purse()

purse.limit(25)
  .offset(0)
  .country('UK')
  .amount(null)
  .hide(null)
  .fetch()
    .then(console.log)
    .catch(console.error)

// OR

purse({
  limit: 25,
  offset: 0,
  country: 'UK', // if none specified, offers are mixed
  amount: '0.5-1',
  hide: null
}).fetch()
  .then(console.log)
  .catch(console.error)

```

### Methods

- `fetch()`: Get Purse.io offers and return a Promise with the result.
- `fetchRates()`: Get Purse.io currency rates. It returns a Promise.
- `getCountries()`: Get list of supported countries.
- `getLimits()`: Get supported limits.
- `version()`: Get API version.

## Debug

To enable debug set the env var `DEBUG=purse.io`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
