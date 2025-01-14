const getEncryptionWord = word => {
	const start = word.slice(0, 2)
	const end = word.slice(-2)
	const body = [...word.slice(2, -2)].reverse().join('')
	return end + body + start
}

const getDecryptionWord = encryptedWord => {
	const end = encryptedWord.slice(0, 2)
	const start = encryptedWord.slice(-2)
	const body = encryptedWord.slice(2, -2)
	const reversedBody = [...body].reverse().join('')
	return start + reversedBody + end
}

console.log(getEncryptionWord('developer'))
console.log(getDecryptionWord(getEncryptionWord('developer')))
