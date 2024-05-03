"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const todolist = {
        id: new Date().toISOString(),
        var: req.body.text
    };
    todos.push(todolist);
    res.status(201).json({ message: 'AddedTodo', todo: todolist, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex((todoitem => { todoitem.id = tid; }));
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, var: body.text };
    }
    res.status(404).json({ message: 'Not able to find todo for this id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter((todoitem) => todoitem.id !== tid);
    res.status(200).json({ message: 'Deleted', todos: todos });
});
exports.default = router;
