const express = require('express');
const router = express.Router();
const {getStatus, getGoals, createGoal, updateGoal, deleteGoal} = require('../controller/goalcontroller')
const { protect } = require('../middleware/authMiddleware')

// @desc: Checking status of API
router.get('/api/status', getStatus);

// @desc: List out all goals
router.get('/api/goals', protect, getGoals);

// @desc: Create goal
router.post('/api/goals', protect, createGoal);

// @desc: Update goal
router.put('/api/goals/:id', protect, updateGoal);

// @desc: Delete goal
router.delete('/api/goals/:id', protect, deleteGoal);

module.exports = router