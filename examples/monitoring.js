const Purse = require('../index')
let purse = new Purse()

/*
 - Retrieve UK orders and get only those whose lossRate < 13%
*/

const MAX_LOSS_RATE = 13

purse.limit(25)
  .offset(0)
  .country('UK')
  .amount(null)
  .hide(null)
  .fetch()
  .then(filterResults)
  .then(filterByLossRate)
  .then(console.log)
  .catch(console.error)


function filterResults (res) {
   return Promise.resolve(res.map(extractOrderInfo))
}

function filterByLossRate (res) {
  return Promise.resolve(res.filter(function(order){
    return order.lossRate <= MAX_LOSS_RATE
  }))
}

function extractOrderInfo (order) {
   let trimmedOrder = {
     id: order.id,
     createdAt: order.created_at,
     state: order.state,
     country: order.pricing.country,
     spender: order.spender.username,
     currency: order.pricing.currency,
     exchangeRate: order.pricing.market_exchange_rate.rate,
     price: order.pricing.buyer_pays_fiat,
     btc: order.pricing.buyer_gets_btc,
     lossRate: computeRate(order.pricing)
   }
   return trimmedOrder
}


function computeRate ({buyer_pays_fiat, market_exchange_rate, buyer_gets_btc}) {
  let x = buyer_pays_fiat - (market_exchange_rate.rate * buyer_gets_btc)
  return ((100 * x) / buyer_pays_fiat).toFixed(2)
}
