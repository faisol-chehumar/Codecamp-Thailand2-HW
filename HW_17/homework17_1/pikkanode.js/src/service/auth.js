const { user } = require('../repository')
const { signin } = require('../repository')
const bcrypt = require('bcrypt')

/**
 * signUp
 * sign up new user then return user id
 * @param {string} email
 * @param {string} password
 * @returns {Promise<number>}
 */
async function signUp (email, password) {
	if (!email) {
		throw new Error('email required')
	}
	if (!password) {
		throw new Error('password required')
	}

	const hashedPassword = await bcrypt.hash(password, 10)
	return user.register(email, hashedPassword)
}

/**
 * signIn
 * verify user email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<boolean>}
 */
async function signIn (email, password) {
	if (!email) {
		throw new Error('email required')
	}
	if (!password) {
		throw new Error('password required')
	}

  const hashedPassword = await signin.getPasswordByEmail(email)
  // console.log(hashedPassword[0].password)

	if (!hashedPassword) {
		throw new Error('wrong email or password')
	}

	return bcrypt.compare(password.toString(), hashedPassword[0].password)
}

module.exports = {
	signUp,
	signIn
}