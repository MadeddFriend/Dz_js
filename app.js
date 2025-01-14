const currencyConversion = (sum, currencyFrom, currencyTo) => {
	const USD_TO_RUB = 111.99
	const RUB_TO_USD = 0.0089
	const EUR_TO_RUB = 116.85
	const RUB_TO_EUR = 0.0086
	const USD_TO_EUR = 0.96
	const EUR_TO_USD = 1.04

	const curr1 = currencyFrom.toLowerCase()
	const curr2 = currencyTo.toLowerCase()

	if (curr1 === curr2) {
		console.log('Валюта должна различаться')
		return
	}

	let result

	switch (`${curr1}_${curr2}`) {
		case 'usd_rub':
			result = sum * USD_TO_RUB
			break
		case 'usd_eur':
			result = sum * USD_TO_EUR
			break
		case 'eur_rub':
			result = sum * EUR_TO_RUB
			break
		case 'eur_usd':
			result = sum * EUR_TO_USD
			break
		case 'rub_usd':
			result = sum * RUB_TO_USD
			break
		case 'rub_eur':
			result = sum * RUB_TO_EUR
			break
		default:
			console.log('Некорректные данные')
			return
	}

	console.log(`${sum} ${currencyFrom} = ${result} ${currencyTo}`)
}

currencyConversion(100, 'usd', 'rub')
