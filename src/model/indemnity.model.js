const mongoose = require('mongoose')
const { Schema } = mongoose

const indemnitySchema = new Schema({
  _id: mongoose.Types.ObjectId,
  userId: String,
  fillupdate: Date,
  regular: Boolean,
  punla: Boolean,
  cooperativeRice: Boolean,
  rsbsa: Boolean,
  sikat: Boolean,
  apcpc: Boolean,
  others: String,
  causeOfDamage: String,
  dateOfLoss: Date,
  ageCultivation: String,
  areaDamaged: String,
  degreeOfDamage: String,
  expectedDateOfHarvest: Date,
  north: String,
  south: String,
  east: String,
  west: String,
  upaSaGawaBilang: String,
  upaSaGawaHalaga: String,
  binhiBilang: String,
  binhiHalaga: String,
  abonoBilang: String,
  abonoHalaga: String,
  kemikalBilang: String,
  kemikalHalaga: String,
  patubigBilang: String,
  patubigHalaga: String,
  ibapaBilang: String,
  ibapaHalaga: String,
  kabuuanBilang: String,
  kabuuanHalaga: String,
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

const Indemnity = mongoose.model('Indemnity', indemnitySchema)

module.exports = {
  Indemnity
}
