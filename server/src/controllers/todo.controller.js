const db = require('../models')
const Todo = db.rest.models.todo

exports.getTodos = async (req, res) => {
  let todos = []

  if (req.query && req.query.limit && req.query.offset) {
    // paginate
    const { limit, offset } = req.query
    const page = parseInt(offset)
    const perPage = parseInt(limit)
    const offsetIndex = (page - 1) * limit

    todos = await Todo.findAll({
      limit: perPage,
      offset: offsetIndex,
    })
  } else if (req.query && req.query.limit) {
    const { limit } = req.query
    // chunk
    todos = await Todo.findAll({
      limit: parseInt(limit),
    })
  } else {
    // all returned
    todos = await Todo.findAll()
  }

  if (!todos) {
    return res.status(400).send({
      message: 'No todos were found, create some',
    })
  }

  res.send({ todos })
}

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
