const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	userId:
	{
		type: String
	},
	fName:
	{
		type: String
	},
	lName:
	{
		type: String
	},
	email:
	{
		type: String

	},
	gender:
	{
		type: String

	}
})
module.exports = mongoose.model('User', userSchema);