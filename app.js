const array = [3, 6, 9, 2]

const deleteNum = num => {
	const res = num < 5
	return res
}

const filterNum = (arr, callback) => {
	let newArr = []
	for (const el of arr) {
		if (callback(el)) {
			newArr.push(el)
		}
	}
	return newArr
}

console.log(filterNum(array, deleteNum))
