const { Notify } = require('../model')

class NotifyService {
  create ({ senderId, receiverId, documentType, documentId, message }) {
    try {
      const notify = new Notify({
        sender: senderId,
        receiver: receiverId,
        documentType,
        documentId,
        message
      })

      return notify.save()
    } catch (e) {
      console.log('Notify.create error')
      console.error(e.stack)
    }
  }
}

module.exports = {
  NotifyService
}
