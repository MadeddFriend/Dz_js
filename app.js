const getEncryptionWord = word => {
	const start = word.slice(0, 2)
	const end = word.slice(-2)
	const body = [...word.slice(2, -2)].reverse().join('')
	return end + body + start
}

console.log(getEncryptionWord('password'))
