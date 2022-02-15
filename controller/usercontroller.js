// @desc: Register User
// @route: POST /api/user/register
const registerUser = (req, res)=>{
    res.status(200).json({message: 'Register Route'})
}

// @desc: Login User
// @route: POST /api/user/login
const loginUser = (req, res)=>{
    res.status(200).json({message: 'Login Route'})
}

const getMe = (req, res) =>{
    res.status(200).json({message: 'Display this USER data'})
}

module.exports = {
    registerUser, loginUser, getMe
}