require('dotenv').config()

const express = require('express')
const { mongoose } = require('./db')
const { Stream } = require('./stream')
const app = express()
app.use(express.json())

const helmet = require('helmet')
app.use(helmet())
app.disable('x-powered-by')

// const userRoutes = require('./routes/user.routes')

const main = async () => {
  await mongoose.connect()

  Stream.start()

  // app.use('/api', userRoutes)

  app.get('/api/version', (_, res) => res.status(200).json({ version: '1.0.2' }))

  app.use((_, res) => res.status(404).json({ message: 'Not found' }))
  app.use((err, _, res) => {
    console.error(err.stack)
    res.status(500).send({ message: 'Something went wrong' })
  })

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running at ${process.env.APP_URL || 'http://localhost:' + PORT}`)
  })
}

main()
