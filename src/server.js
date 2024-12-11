require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

const helmet = require('helmet')
app.use(helmet)
app.disable('x-powered-by')

const main = async () => {
  app.get('/api/version', (_, res) => res.status(200).json({ version: '1.0.0' }))

  app.use((_, res) => res.status(404).json({ message: 'Not found' }))
  app.use((err, _, res) => {
    console.error(err.stack)
    res.status(500).send({ message: 'Something went wrong' })
  })

  const port = process.env.SERVER_PORT || 3000
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

main()
