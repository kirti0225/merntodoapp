const express = require( 'express');
const router = express.Router();
const { Todo } =require( '../model/Todo.js');

const addTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

         res.status(200).send(newTodo);
    } catch (error) {
         res.status(500).send(error.message);
    }
}

 const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

         res.status(200).send(todos);
    } catch (error) {
         res.status(500).send(error.message);
    }
}

 const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await Todo.findById(req.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await todo.save();

         res.status(200).send(todo);
    } catch (error) {
         res.status(500).send(error.message);
    }
}

 const updateTodo = async (req, res) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todo = await Todo.findById(req.params.id);

         res.status(200).send(todo);
    } catch (error) {
         res.status(500).send(error.message);
    }
}
 const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)

         res.status(200).send(todo);
    } catch (error) {
         res.status(500).send(error.message);
    }
}

router.post('/todos', addTodo)
router.get('/todos', getAllTodos);
router.get('/todos/:id', toggleTodoDone);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;