const { create } = require('../../../repository')
const uuidv4 = require('uuid/v4')
const fs = require('fs-extra')
const path = require('path')

const allowFileType = {
	'image/png': true,
	'image/jpeg': true
}

const pictureDir = path.join(__dirname, '../../public', 'images')

const getHandler = async (ctx) => {
	await ctx.render('create')
}

const postHandler = async (ctx) => {
	try {
		if (!allowFileType[ctx.request.files.photo.type]) {
			throw new Error('file type not allow')
		}

		const fileName = uuidv4()

		await fs.rename(ctx.request.files.photo.path, path.join(pictureDir, fileName))

		await create.uploadImage(fileName, ctx.request.body.caption, ctx.session.userId)
		ctx.status = 303
		ctx.redirect('/')
	} catch (e) {
		// handle error here
		ctx.status = 400
		ctx.body = e.message
		fs.remove(ctx.request.files.photo.path)
	}	
}

module.exports = {
	getHandler,
	postHandler
}

