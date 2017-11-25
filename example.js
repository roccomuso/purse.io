let Purse = require('./index')

let purse = new Purse({limit: 25})

purse.limit(25)
  .offset(0)
  .country('IT')
  .amount(null)
  .hide(null)
  .fetch()
    .then(console.log)
    .catch(console.error)
