const someData = [
	'10-02-2022',
	'test',
	'11/12/2023',
	'00/13/2022',
	'41/12/2023',
	'30.12.2024',
	'29.02.2024',
	'29/02/2021'
]

//проверка на високосный год
const getLeapYear = year =>
	year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)


//проверяет не равна ли дата "0" "00"
const validDateNumber = number => { 
	const num = Number(number)
	return number.length === 2 && !isNaN(num) && num > 0
}

//проверка валидности месяца, максимальное кол-во дней в месяце
const getMaxDays = (month, year) => {
	let maxDays = null
	if (validDateNumber(month)) {
		if (month == 2) return maxDays = getLeapYear(year) ? 29 : 28
		if ([4, 6, 9, 11].includes(Number(month)) && month < 12)
			return (maxDays = 30)
		if (month <= 12) return (maxDays = 31)
			else return null
	} else return maxDays
}

//выбирает преобразовывает строку в массив
const splitDate = date => {
	if (date.includes('/')) return date.split('/')
	if (date.includes('.')) return date.split('.')
	return null
}

//проверяет валидность даты
const checkDate = date => {
	if (date.length !== 3) return null
	const [day, month, year] = date
	const maxDays = getMaxDays(month, year)
	if (year.length !== 4 || year < 1900 || year > 2100) return null
	if (maxDays !== null && validDateNumber(day)) {
		if (maxDays >= day) return [day, month, year]
	}
	return null
}

//преобразует дату в конечный результат
const getDate = dates => {
	const result = dates.reduce((acc, date) => {
		if (splitDate(date) !== null) {
			if (checkDate(splitDate(date)) !== null) {
				const res = checkDate(splitDate(date))
				acc.push(`${res[0]}/${res[1]}/${res[2]}`)
			}
		}
		return acc
	}, [])
	return result
}

console.log(getDate(someData))
