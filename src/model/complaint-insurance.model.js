const mongoose = require('mongoose')
const { Schema } = mongoose

const complaintInsuranceSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  userId: String,
  rice: Boolean,
  onion: Boolean,
  causeOfDamage: String,
  treatment: String,
  imageBase64: String,
  createdById: mongoose.Types.ObjectId,
  createdAt: Date,
  lastUpdatedById: mongoose.Types.ObjectId,
  lastUpdatedAt: Date,
  deletedById: mongoose.Types.ObjectId,
  deletedAt: Date
}, {
  versionKey: false,
  timestamps: false,
  toObject: { getters: true },
  toJSON: { getters: true }
})

const ComplaintInsurance = mongoose.model('ComplaintInsurance', complaintInsuranceSchema, 'ComplaintInsurance')

module.exports = {
  ComplaintInsurance
}
