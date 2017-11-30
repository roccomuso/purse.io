let Purse = require('./index')

let purse = new Purse({limit: 25})

// get Offers

purse.limit(25)
  .offset(0)
  .country('IT')
  .amount(null)
  .hide(null)
  .fetch()
    .then(console.log)
    .catch(console.error)

// get Rates

purse.fetchRates()
  .then(console.log)
  .catch(console.error)
