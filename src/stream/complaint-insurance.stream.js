const { ComplaintInsurance, User } = require('../model')

const { notifyService } = require('../service')

const notifyOnCreate = async (doc) => {
  const user = await User.findOne({ _id: doc.createdById })
  return notifyService.create({
    senderId: doc.createdById,
    receiverId: user.createdById,
    documentType: 'complaint_insurance',
    documentId: doc._id,
    message: `Complaint has been filed by ${user.firstName} ${user.lastName}`
  })
}

module.exports = {
  ComplaintInsuranceStream: {
    watch: () => {
      const stream = ComplaintInsurance.watch([], { fullDocument: 'updateLookup' })

      stream.on('change', async (change) => {
        const doc = change.fullDocument

        if (change.operationType === 'insert') {
          await notifyOnCreate(doc)
        } else if (change.operationType === 'update') {
          console.log('nothing at the moment')
        }
      })
    }
  }
}
