const { RiceInsurance, User } = require('../model')

const { notifyService } = require('../service')

const notifyOnCreate = async (doc) => {
  const user = await User.findOne({ _id: doc.createdById })
  return notifyService.create({
    senderId: doc.createdById,
    receiverId: user.createdById,
    documentType: 'rice_insurance',
    documentId: doc._id,
    message: `Rice insurance application has been filed by ${user.firstName} ${user.lastName}`
  })
}

const notifyOnStatusUpdate = async (doc, status) => {
  return notifyService.create({
    senderId: doc.lastUpdatedById,
    receiverId: doc.userId,
    documentType: 'rice_insurance_feedback',
    documentId: doc._id,
    message: `Rice insurance application has been ${status}!`
  })
}

module.exports = {
  RiceInsuranceStream: {
    watch: () => {
      const stream = RiceInsurance.watch([], { fullDocument: 'updateLookup' })

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
