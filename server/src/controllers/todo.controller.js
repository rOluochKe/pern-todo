const db = require('../models')
const Todo = db.rest.models.todo

exports.getTodo = async (req, res) => {
  const { id } = req.params

  const todo = await Todo.findOne({
    where: {
      id,
    },
  })

  if (!todo) {
    return res.status(400).send({
      message: `No todo found with the id ${id}`,
    })
  }

  return res.send(todo)
}

exports.createTodo = async (req, res) => {
  const { task } = req.body

  if (!task) {
    return res.status(400).send({
      message: 'Please provide a task to create a todo!',
    })
  }

  try {
    let newTodo = await Todo.create({
      task,
    })
    return res.send(newTodo)
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
}

exports.deleteTodo = async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).send({
      message: 'Please provide an ID for the todo you are trying to delete!',
    })
  }

  const todo = await Todo.findOne({
    where: {
      id,
    },
  })

  if (!todo) {
    return res.status(400).send({
      message: `No todo found with the id ${id}`,
    })
  }

  try {
    await todo.destroy()
    return res.send({
      message: `Todo ${id} has been deleted!`,
    })
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
}

exports.updateTodo = async (req, res) => {
  const { task } = req.body
  const { id } = req.params

  const todo = await Todo.findOne({
    where: {
      id,
    },
  })

  if (!todo) {
    return res.status(400).send({
      message: `No todo found with the id ${id}`,
    })
  }

  try {
    if (task) {
      todo.task = task
    }

    todo.save()
    return res.send({
      message: `Todo ${id} has been updated!`,
    })
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
}
