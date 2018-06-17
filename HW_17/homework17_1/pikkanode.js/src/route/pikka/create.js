const { create } = require('../../repository')
const uuidv4 = require('uuid/v4')
const fs = require('fs-extra')
const path = require('path')

const allowFileType = {
	'image/png': true,
	'image/jpeg': true
}

const pictureDir = path.join(__dirname, './../../public', 'images')

const getHandler = async (ctx) => {
	// ctx.body = 'create page'
	await ctx.render('create')
}

const postHandler = async (ctx) => {
	// ctx.body = 'create page'
	// console.dir(ctx.request)
	//console.log(ctx.request.body)
//	console.log(ctx.request.file)
	console.log(create)
	try {
		if (!allowFileType[ctx.request.files.photo.type]) {
			throw new Error('file type not allow')
		}
		// console.log(ctx.request.body.caption)
		// console.log(ctx.request.body.detail)
		// console.log(ctx.request.files.photo.name)
		// console.log(ctx.request.files.photo.path)
		// console.log(pictureDir)
		const fileName = uuidv4()
		await fs.rename(ctx.request.files.photo.path, path.join(pictureDir, fileName))
		const img = await create.uploadImage(fileName, ctx.request.body.caption, 1)
		console.log(img)
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

