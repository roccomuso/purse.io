const OFFERS_ENTRYPOINT = 'https://api.purse.io/api/v1/orders/open'
const COUNTRIES = [null, 'US', 'UK', 'CA', 'MX', 'FR', 'IT', 'ES', 'JP', 'CN', 'BR', 'IN']
const LIMITS = [null, 25, 50]
const OFFSETS = [null, 0, 25, 50, 75]
const AMOUNTS = [null, '0-0.2', '0.5-1', '1-666']

const VALID_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36'

module.exports = {
  VERSION: 'v1',
  VALID_USER_AGENT,
  OFFERS_ENTRYPOINT,
  COUNTRIES,
  LIMITS,
  OFFSETS,
  AMOUNTS
}
