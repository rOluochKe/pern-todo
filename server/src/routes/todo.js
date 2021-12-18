import { Router } from 'express'
const todo = require('../controllers/todo.controller')
const router = Router()

router.get('/:id', todo.getTodo)

export default router
