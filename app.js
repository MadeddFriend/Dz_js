const myCard = '4561-1213-4367-2612'
const myCard2 = '4561121343672612'
const myCard3 = '4561 1213 4367 2612'
const myCard4 = '4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7'
const myCard5 = '4561-2612-1234-5464'

const convertAndReverse = str => {
	let res
	if (str.includes('-'))
		return (res = str
			.split('')
			.filter(char => char !== '-')
			.reverse())
	if (str.includes(' '))
		return (res = str
			.split('')
			.filter(char => char !== ' ')
			.reverse())
	return (res = str.split('').reverse())
}

const checkLuhn = card => {
	const result = convertAndReverse(card).reduce((acc, elem, index) => {
		if (index % 2 === 1) {
			elem *= 2
			if (elem > 9) elem -= 9
		}
		acc += Number(elem)
		return acc
	}, 0)
	console.log(result)
	return result % 10 == 0
}

console.log(checkLuhn(myCard5))
