const express = require('express');
const router = express.Router();
const {getStatus, getGoals, createGoal, updateGoal, deleteGoal} = require('../controller/goalcontroller')

// @desc: Checking status of API
router.get('/api/status', getStatus);

// @desc: List out all goals
router.get('/api/goals', getGoals);

// @desc: Create goal
router.post('/api/goals', createGoal);

// @desc: Update goal
router.put('/api/goals/:id', updateGoal);

// @desc: Delete goal
router.delete('/api/goals/:id', deleteGoal);

module.exports = router