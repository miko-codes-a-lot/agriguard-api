const { OnionInsurance, User } = require('../model')

const { notifyService } = require('../service')

module.exports = {
  OnionInsuranceStream: {
    watch: () => {
      const stream = OnionInsurance.watch([], { fullDocument: 'updateLookup' })

      stream.on('change', async (change) => {
        const doc = change.fullDocument

        if (change.operationType === 'insert') {
          const user = await User.findOne({ _id: doc.createdById })
          await notifyService.create({
            senderId: doc.createdById,
            receiverId: user.createdById,
            documentType: 'onion_insurance',
            documentId: doc._id,
            message: `Onion insurance have been filed by ${user.firstName} ${user.lastName}`
          })
        } else if (change.operationType === 'update') {
          console.log('nothing at the moment')
        }
      })
    }
  }
}
