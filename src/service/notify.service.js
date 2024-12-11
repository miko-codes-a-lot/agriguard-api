const { Notify } = require('../model')

class NotifyService {
  create ({ senderId, receiverId, documentType, documentId, message }) {
    const notify = new Notify({
      sender: senderId,
      receiver: receiverId,
      documentType,
      documentId,
      message
    })

    return notify.save()
  }
}

module.exports = {
  NotifyService
}
