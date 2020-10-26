const { Router } = require('express');
const router = Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({status: "Added"});
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.json({status: "Updated"});
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await Task.findByIdAndRemove(id);
    res.json({status: "Deleted"});
})

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});


module.exports = router;