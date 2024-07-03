const Task = require('../models/taskModel')

const getAllTasks = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {

        }
    })
}

const createTask = async(req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        task
    })
}

const getSingleTask = (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {

        }
    })
}

const deleteTask = (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {
            id : req.params.id
            
        }
    })
}


const updateTask = (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {

        }
    })
}
module.exports = {
    getAllTasks,
    createTask,
    getSingleTask, 
    updateTask,
    deleteTask
}