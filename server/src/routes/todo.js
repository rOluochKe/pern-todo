import { Router } from 'express'
const todo = require('../controllers/todo.controller')
const router = Router()

router.get('/', todo.getTodos)

router.get('/:id', todo.getTodo)

router.post('/', todo.createTodo)

router.delete('/:id', todo.deleteTodo)

router.put('/:id', todo.updateTodo)

export default router
