const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../controller/usercontroller');
const { protect } = require('../middleware/authMiddleware')

// @desc: Register User
// @route: POST /api/user/register
router.post('/user/register', registerUser);

// @desc: Login User
// @route: POST /api/user/login
router.post('/user/login', loginUser);

// @desc: Get user data
// @route: GET /api/user/me
router.get('/user/me', protect, getMe);

module.exports = router;