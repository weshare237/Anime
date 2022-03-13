require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const notFound = require('./middlewares/not-found')
const port = process.env.PORT || 5000
const cors = require('cors')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const userRouter = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', userRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  } catch (error) {
    console.log(err)
  }
}

start()
