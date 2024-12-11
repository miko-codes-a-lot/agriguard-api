const { OnionInsurance, User } = require('../model')

const { notifyService } = require('../service')

const notifyOnCreate = async (doc) => {
  const user = await User.findOne({ _id: doc.createdById })
  return notifyService.create({
    senderId: doc.createdById,
    receiverId: user.createdById,
    documentType: 'onion_insurance',
    documentId: doc._id,
    message: `Onion insurance application has been filed by ${user.firstName} ${user.lastName}`
  })
}

const notifyOnStatusUpdate = async (doc, status) => {
  return notifyService.create({
    senderId: doc.lastUpdatedById,
    receiverId: doc.userId,
    documentType: 'onion_insurance_feedback',
    documentId: doc._id,
    message: `Onion insurance application has been ${status}!`
  })
}

module.exports = {
  OnionInsuranceStream: {
    watch: () => {
      const stream = OnionInsurance.watch([], { fullDocument: 'updateLookup' })

      stream.on('change', async (change) => {
        const doc = change.fullDocument

        if (change.operationType === 'insert') {
          await notifyOnCreate(doc)
        } else if (change.operationType === 'update') {
          const status = change?.updateDescription?.updatedFields?.status

          if (status) {
            await notifyOnStatusUpdate(doc, status)
          }
        }
      })
    }
  }
}
