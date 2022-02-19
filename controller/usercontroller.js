const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


// @desc: Register User
// @route: POST /api/user/register
const registerUser = async (req, res)=>{
    /* const name = req.body.name
    const email = req.body.email
    const password = req.body.password */
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400).send({error: 'Please fill out the neccessary fields'})
    }

    // check if user email exist in db
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400).send({error: `User with this email: "${email}" exist`})
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = User.create({
        name,
        email,
        password: hashedPassword
    })

    // Condition if user is created
    if(user) {
        res.status(201).send({
            message: "User Created"
        })
    }else{
        res.status(400).send({
            error: "Invalid User Data"
        })
    }
    
}

// @desc: Login User
// @route: POST /api/user/login
const loginUser = async (req, res)=>{
    /* const email = req.body.email
    const password = req.body.password */

    const {email , password }=  req.body

    if(!email || !password){
        res.status(400).send({error: 'Input User Credentials'})
    }
    
    // check for user email in db
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            message: `${user.name} is now logged in`
        })
    }else{
        res.status(400).send({
            error: "Invalid user credentials"
        })
    }
}

// @desc: Get user data
// @route: GET /api/user/me
const getMe = (req, res) =>{
    res.status(200).json({message: 'Display this USER data'})
}

module.exports = {
    registerUser, loginUser, getMe
}