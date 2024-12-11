const mongoose = require('mongoose')

module.exports = {
  mongoose: {
    connect: async () => {
      try {
        return await mongoose.connect(process.env.DB_MONGO_URL)
      } catch (e) {
        console.log('MongoDB Connection Error')
        console.error(e.stack)
      }
    }
  }
}
