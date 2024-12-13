const getInfo = prompt('Введите свой язык: "ru", "en", "de"')

switch (getInfo.toLowerCase()) {
	case 'ru':
		console.log('Добрый день!')
		break
	case 'en':
		console.log('Good afternoon!')
		break
	case 'de':
		console.log('Gutten Tag!')
		break
	default:
		console.log('Некорректные данные')
}
