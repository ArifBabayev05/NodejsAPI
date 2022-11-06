const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const mongoose = require('mongoose');
const router = express.Router();


// localhost:5000/users 'a yapılan post isteği
router.post("/signup", async (req, res) => {
    try {
        //console.log(req.body)
        const { fullname, password, phoneNumber, email, isAdmin } = req.body;

        const userExists = await User.findOne({ email })
        if (userExists)
            return res.status(400).json({ message: 'User already exists.' })

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            phoneNumber,
            isAdmin
        })

        return res.status(201).json(createdUser);
    } catch (error) {
        console.log(error)
        return res.json({ message: "create user failed" })
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: "user does not exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Wrong Password" })

        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router;