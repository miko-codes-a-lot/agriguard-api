const mongoose = require('mongoose')

const { Schema } = mongoose

const notifySchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  documentId: { type: Schema.Types.ObjectId, required: false },
  documentType: {
    type: String,
    enum: [
      'onion_insurance',
      'onion_insurance_feedback',
      'rice_insurance',
      'rice_insurance_feedback',
      'complaint',
      'complaint_feedback',
      'indemnity',
      'indemnity_feedback'
    ],
    required: false
  },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

const Notify = mongoose.model('Notify', notifySchema, 'Notify')

module.exports = {
  Notify
}
