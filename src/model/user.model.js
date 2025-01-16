const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  firstName: String,
  middleName: String,
  lastName: String,
  mobileNumber: String,
  address: String,
  email: String,
  dateOfBirth: Date,
  password: String,
  nameOfSpouse: String,
  isAdmin: Boolean,
  isTechnician: Boolean,
  isFarmers: Boolean,
  userProfile: String,
  validId: String,
  createdById: mongoose.Types.ObjectId,
  createdAt: Date,
  lastUpdatedById: mongoose.Types.ObjectId,
  lastUpdatedAt: Date,
  deletedById: mongoose.Types.ObjectId,
  deletedAt: Date,
  resetPasswordToken: String,
  resetTokenExpiration: Date,
  isVerified: Boolean
}, {
  versionKey: false,
  timestamps: false,
  toObject: { getters: true },
  toJSON: { getters: true }
})

const User = mongoose.model('User', userSchema, 'User')

module.exports = User
