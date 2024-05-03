import {Router} from 'express';

import {Todo} from '../models/todo';
type requestBody= { text: string}
type requestparams = { todoId:string }
let todos: Todo[] =[];
const router = Router();

router.get('/', (req, res, next) =>{
 res.status(200).json({ todos: todos});
})
router.post('/todo', (req,res,next)=>{
    const body = req.body as requestBody;
    const todolist: Todo ={
        id: new Date().toISOString(),
        var:req.body.text
    }
    todos.push(todolist);
    res.status(201).json({message : 'AddedTodo' ,todo: todolist, todos: todos})
})
router.put('/todo/:todoId', (req, res, next) =>{
    const params = req.params as requestparams;
const tid = params.todoId;
const body= req.body as requestBody;
const todoIndex = todos.findIndex((todoitem => {todoitem.id = tid}))    
if (todoIndex>=0){
    todos[todoIndex] = { id: todos[todoIndex].id, var: body.text}
}
res.status(404).json({message: 'Not able to find todo for this id'})
})

router.delete('/todo/:todoId', (req,res,next)=>{
    const params = req.params as requestparams
    const tid= params.todoId;
    todos = todos.filter((todoitem) => todoitem.id !== tid);
    res.status(200).json({ message: 'Deleted', todos:todos});
});
export default router