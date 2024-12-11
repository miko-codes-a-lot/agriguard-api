const mongoose = require('mongoose')

const { Schema } = mongoose

const notifySchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String,
    enum: [
      'onion_insurance_application',
      'rice_insurance_application',
      'application_status_update',
      'complaint_filed',
      'complaint_reviewed',
      'indemnity_filed',
      'indemnity_status_update'
    ],
    required: true
  },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  documentId: { type: Schema.Types.ObjectId, required: false },
  createdAt: { type: Date, default: Date.now }
})

const Notify = mongoose.model('Notify', notifySchema, 'Notify')

module.exports = {
  Notify
}
