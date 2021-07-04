const express = require('express');
const user = require('../models/user');
//const mongoose= require('mongoose');
const router = express.Router();
const User = require('../models/user')


router.get('/', async (req, res) => {
	try {
		const users = await User.find()
		res.json(users);
	}
	catch (err) {
		res.send('Error occured' + err);
	}
})

//get user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		res.json(user);
	}
	catch (err) {
		res.send('Error occured' + err);
	}
})

//insert user
router.post('/', async (req, res) => {
	const user = new User({
		userId: req.body.userId,
		fName: req.body.fName,
		lName: req.body.lName,
		email: req.body.email,
		gender: req.body.gender
	})
	try {
		const u1 = await user.save()
		res.json(u1);
	} catch (err) {
		res.send('error' + err)
	}
})

//update user
router.patch('/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const user = await User.findByIdAndUpdate(_id, req.body)
		const u1 = await user.save()
		res.json(u1)

	} catch (err) {
		res.send('error occured while updating' + err)
	}
})

//delete user
router.delete('/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const user = await User.findByIdAndDelete(_id, req.body)
		const u1 = await user.delete();
		res.json(u1)

	} catch (err) {
		res.send('error occured while delete' + err)
	}
})
module.exports = router;