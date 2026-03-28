const router = require("express").Router()
const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register", async(req,res) => {
    const hashed = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed
    })
    await user.save()

    res.json(user)
})

router.post("/login",async(req,res) => {
    const user = await  User.findOne({email: req.body.email})
    if(!user) return res.status(400).json("User not Found")

    const valid = bcrypt.compare(req.body.password, user.password)
    if(!valid) return res.status(400).json("Password Incorrect")
        
    const token = jwt.sign({id: user.id}, "secret")
    res.json({token})
})

module.exports = router;