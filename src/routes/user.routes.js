// const express = require('express')
// const User = require('../model/user.model')

// // const { sendEmailNotification } = require('../service/sms.service') formatPhoneNumber
// const { SmsService } = require('../service/sms.service')
// const router = express.Router()
// // const bcrypt = require('bcrypt')

// router.post('/request-token', async (req, res) => {
//   const { email } = req.body

//   console.log(`Received email: ${email}`)
//   try {
//     const user = await User.findOne({ email })
//     if (!user) {
//       console.error(`User with email ${email} not found`)
//       return res.status(404).json({ message: 'User not found' })
//     }

//     const token = Math.floor(100000 + Math.random() * 900000).toString()
//     const tokenExpiration = new Date(Date.now() + 10 * 60 * 1000)

//     user.resetPasswordToken = token
//     user.resetTokenExpiration = tokenExpiration
//     console.log('Generated Token:', token)
//     console.log('User before saving:', user)
//     await user.save()
//     console.log(`Generated OTP for ${email}: ${token}`)

//     return res.status(200).json({ message: 'OTP generated and saved to the database.' })

//     // if (user.mobileNumber) {
//     //   console.log(`User has a mobile number: ${user.mobileNumber}`)
//     //   const formattedReceiver = formatPhoneNumber(user.mobileNumber)
//     //   if (!formattedReceiver) {
//     //     console.error(`Invalid mobile number format: ${user.mobileNumber}`)
//     //     return res.status(400).json({ message: 'Invalid mobile number format' })
//     //   }

//     //   const message = `Your password reset token is: ${token}. It will expire in 10 minutes.`
//     //   const smsResult = await SmsService.sendMessage(message, user.mobileNumber)
//     //   if (smsResult.success) {
//     //     return res.status(200).json({
//     //       message: smsResult.message
//     //     })
//     //   } else {
//     //     return res.status(500).json({
//     //       message: smsResult.message
//     //     })
//     //   }
//     // } else {
//     //   return res.status(400).json({
//     //     message: 'No mobile number associated with this account. Cannot send SMS.'
//     //   })
//     // }
//   } catch (error) {
//     console.error('Error in request-token:', error)
//     return res.status(500).json({ message: 'Failed to send reset token. Please try again.' })
//   }
// })

// router.post('/verify-token', async (req, res) => {
//   const { email, token } = req.body
//   console.log(`Received email: ${email}, token: ${token}`)

//   if (!email || !token) {
//     return res.status(400).json({ message: 'Email and token are required' })
//   }

//   try {
//     const user = await User.findOne({
//       email,
//       resetPasswordToken: token,
//       resetTokenExpiration: { $gt: Date.now() }
//     })
//     console.log('Debug: User found for verification:', user)

//     if (!user) {
//       return res.status(404).json({ message: 'Token expired or user not found.' })
//     }

//     if (user.mobileNumber) {
//       const message = 'Your password reset token was successfully verified.'
//       const smsResult = await SmsService.sendMessage(message, user.mobileNumber)
//       if (smsResult.success) {
//         console.log(`Confirmation SMS sent to ${user.mobileNumber}: ${smsResult.sid}`)
//       } else {
//         console.error(`Failed to send confirmation SMS: ${smsResult.message}`)
//       }
//     }

//     return res.status(200).json({ message: 'Token verified successfully.' })
//   } catch (error) {
//     console.error('Failed to verify token:', error)
//     return res.status(500).json({ message: 'Failed to verify token. Please try again.' })
//   }
// })

// module.exports = router

// // router.post('/reset-password', async (req, res) => {
// //   const { email, token, newPassword } = req.body

// //   if (!email || !token || !newPassword) {
// //     return res.status(400).json({ message: 'Email, token, and new password are required.' })
// //   }

// //   try {
// //     const user = await User.findOne({
// //       email,
// //       resetPasswordToken: token,
// //       resetTokenExpiration: { $gt: Date.now() }
// //     })

// //     if (!user) {
// //       return res.status(404).json({ message: 'Invalid token or user not found.' })
// //     }

// //     const hashedPassword = await bcrypt.hash(newPassword, 10)
// //     user.password = hashedPassword
// //     user.resetPasswordToken = null
// //     user.resetTokenExpiration = null
// //     await user.save()

// //     return res.status(200).json({ message: 'Password reset successfully.' })
// //   } catch (error) {
// //     console.error('Error in reset-password:', error)
// //     return res.status(500).json({ message: 'Failed to reset password. Please try again.' })
// //   }
// // })

// // module.exports = router
