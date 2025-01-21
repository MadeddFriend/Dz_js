let obj = {
	search: 'Вася',
	take: 10,
}

const getQueryParam = obj => {
	let res = ''
	for (let key in obj) {
		res += `${key}=${obj[key]}&`
	}
	return res.slice(0, -1)
}

console.log(getQueryParam(obj))
