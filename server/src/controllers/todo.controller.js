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
