const multer = require('multer');
const uniqid = require('uniqid');
const path = require('path');

function createFilename(req,file,callback){
	const fname = file.originalname
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') 		// Replace spaces with -
		.replace(/[^.\w-]+/g, '') 	// Remove all non-word characters (Except Dot) such as spaces or tabs
        .replace(/--+/g,'-') 		// Replace multiple — with single -
        .replace(/^-+/,''); 		// Trim — from start of text

	const filename = `${uniqid()}-${fname}`
	callback(null,filename)
}
const paths = {
	user: path.join(__dirname,'..','express-static','user-images')
}
const storage = {
	user: multer.diskStorage({destination: paths.user,filename: createFilename})
}
const uploader = {
	user: multer({storage: storage.user})
}
module.exports = uploader