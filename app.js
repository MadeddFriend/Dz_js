const hasLicense = true
const age = 18
const isDrink = false

console.log(
	hasLicense && age >= 18 && isDrink !== true
		? 'пользователь МОЖЕТ сесть за руль'
		: 'пользователь НЕ МОЖЕТ сесть за руль'
)
