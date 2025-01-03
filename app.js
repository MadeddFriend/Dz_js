const currencyConversion = (sum, currencyFrom, currencyTo) => {
	const USD_TO_RUB = 111.99
	const RUB_TO_USD = 0.0089
	const EUR_TO_RUB = 116.85
	const RUB_TO_EUR = 0.0086
	const USD_TO_EUR = 0.96
	const EUR_TO_USD = 1.04

	const curr1 = currencyFrom.toLowerCase()
	const curr2 = currencyTo.toLowerCase()

	if (curr1 !== curr2) {
		if (curr1 === 'usd' && curr2 === 'rub') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * USD_TO_RUB} ${currencyTo}`
			)
		}
		if (curr1 === 'usd' && curr2 === 'eur') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * USD_TO_EUR} ${currencyTo}`
			)
		}
		if (curr1 === 'eur' && curr2 === 'rub') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * EUR_TO_RUB} ${currencyTo}`
			)
		}
		if (curr1 === 'eur' && curr2 === 'usd') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * EUR_TO_USD} ${currencyTo}`
			)
		}
		if (curr1 === 'rub' && curr2 === 'usd') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * RUB_TO_USD} ${currencyTo}`
			)
		}
		if (curr1 === 'rub' && curr2 === 'eur') {
			return console.log(
				`${sum} ${currencyFrom} = ${sum * RUB_TO_EUR} ${currencyTo}`
			)
		}
	} else return console.log('Валюта должна различаться')

	return console.log('Некорректные данные')
}

currencyConversion(100, 'usd', 'rub')
