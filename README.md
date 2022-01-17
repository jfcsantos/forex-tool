Simple Forex application to show exchange values for the specified amount, in the base and target currency of choice.
The list of currencies available is easily searchabl and, with a click of the "Switch" button, the "base" and "target" currencies swap places.

The results inclue the input amount converted from base to target currency (using the Alpha Vantage CURRENCY_EXCHANGE_RATE function), and a graph showing the historical rates for the past 30 days (using the Alpha Vantage FX_DAILY function).

This app is using a development API key, so it is limited to a certain amount of minute and daily requests. There is also limited error handling, so bare that in mind when testing.

The latest version of the app is availble at:
https://forex-tool.vercel.app/


# Run locally

`yarn`\
`yarn start`

# Build

`yarn build`
