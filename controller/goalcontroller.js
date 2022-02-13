const Goal = require('../models/goalModel');

// @desc: Checking status of API
// @route: GET /api/status
const getStatus = (req, res) =>{
    if(!res.status == 200){
        res.status(500).send({error: "Something went wrong"});
    }else{
        res.status(200).send({message: "OK"});
    }
}

// @desc: List out all goals
// @route: GET /api/goals
const getGoals = async (req, res) =>{
    const goals = await Goal.find()

    res.status(200).json(goals);
}

// @desc: create goals
// @route: POST /api/goals
const createGoal = async (req, res) =>{
    if(!req.body.text){
        res.status(400).send({error: "Please enter a text field"})
        //throw new Error('Please enter a Text field...')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);
}

// @desc: Update Goals
// @route: PUT /api/goals/:id
const updateGoal = async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400).send({error: `Goal with ID: ${req.params.id} not found`})
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(201).json(updateGoal);
}

// @desc: Delete Goals
// @route: Delete /api/goals/:id
const deleteGoal = async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400).send({error: `Goal with ID: ${req.params.id} doesn't exist`})
    }

    await goal.remove();

    res.status(201).json({ id: req.params.id});
}

module.exports = {
    getStatus, getGoals, createGoal, updateGoal, deleteGoal
}