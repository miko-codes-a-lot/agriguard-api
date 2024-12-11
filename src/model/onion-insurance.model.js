const mongoose = require('mongoose')
const { Schema } = mongoose

const onionInsuranceSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  userId: String,
  fillUpDate: Date,
  ipTribe: String,
  male: Boolean,
  female: Boolean,
  single: Boolean,
  married: Boolean,
  widow: Boolean,
  nameOfBeneficiary: String,
  ageOfBeneficiary: String,
  relationshipOfBeneficiary: String,
  farmLocation: String,
  area: String,
  soilType: String,
  soilPh: String,
  topography: String,
  variety: String,
  dateOfPlanting: Date,
  estdDateOfHarvest: Date,
  ageGroup: String,
  noOfHills: String,
  typeOfIrrigation: String,
  averageYield: String,
  landPreparation: String,
  materialsItem: String,
  materialsQuantity: String,
  materialsCost: String,
  laborWorkForce: String,
  laborQuantity: String,
  laborCost: String,
  totalCoast: String,
  farmLocationSitio: String,
  farmLocatioBarangay: String,
  farmLocationMunicipality: String,
  farmLocationProvince: String,
  north: String,
  south: String,
  east: String,
  west: String,
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

const OnionInsurance = mongoose.model('OnionInsurance', onionInsuranceSchema, 'OnionInsurance')

module.exports = {
  OnionInsurance
}
