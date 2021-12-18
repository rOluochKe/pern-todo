import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

app.use('/todos', routes.todo)

app.use((req, res) => {
  res.status(404).send('404: Page not found')
})

app.listen(3001, () => {
  console.log(`app is listening on port 3001!`)
})
