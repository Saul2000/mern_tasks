const express = require('express');
const router = express.Router(); 

const Task = require('../models/task');

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    // console.log(tasks);
    res.json(tasks);
    
    // .THEN
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    
    // CALLBACK
    // Task.find(function (err, tasks) {
    //     console.log(tasks);
    // });
    // res.json({
    //     status: 'API Works!'
    // });
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const { title, description} = req.body;
    const task = new Task({title, description});
    // console.log(task);
    await task.save();
    res.json({status: 'Task Saved'});
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    // console.log(req.params.id);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task deleted'});
});

module.exports = router;