const mongoose = require('mongoose')
const { Schema } = mongoose

const riceInsuranceSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  userId: String,
  status: {
    type: String,
    enum: [
      'approved',
      'rejected',
      'pending'
    ],
    required: false,
    default: 'pending'
  },
  insuranceId: String,
  lender: String,
  fillUpDate: Date,
  new: Boolean,
  renewal: Boolean,
  selfFinanced: Boolean,
  borrowing: Boolean,
  ipTribe: String,
  street: String,
  barangay: String,
  municipality: String,
  province: String,
  bankName: String,
  bankAddress: String,
  male: Boolean,
  female: Boolean,
  single: Boolean,
  married: Boolean,
  widow: Boolean,
  nameOfBeneficiary: String,
  age: String,
  relationship: String,
  sitio: String,
  farmLocationBarangay: String,
  farmLocationMunicipality: String,
  farmLocationProvince: String,
  north: String,
  south: String,
  east: String,
  west: String,
  variety: String,
  platingMethod: String,
  dateOfSowing: Date,
  dateOfPlanting: Date,
  dateOfHarvest: Date,
  landOfCategory: String,
  soilTypes: String,
  topography: String,
  sourceOfIrrigations: String,
  tenurialStatus: String,
  rice: Boolean,
  multiRisk: Boolean,
  natural: Boolean,
  amountOfCover: String,
  premium: String,
  cltiAdss: String,
  sumInsured: String,
  wet: Boolean,
  dry: Boolean,
  cicNo: String,
  dateCicIssued: Date,
  cocNo: String,
  dateCocIssued: Date,
  periodOfCover: String,
  from: String,
  to: String,
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

const RiceInsurance = mongoose.model('RiceInsurance', riceInsuranceSchema, 'RiceInsurance')

module.exports = {
  RiceInsurance
}
