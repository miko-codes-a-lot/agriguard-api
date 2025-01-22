const { parsePhoneNumberFromString } = require('libphonenumber-js')
const { SmsService } = require('../service/sms.service')
const User = require('../model/user.model')
const { format } = require('date-fns')

module.exports = {
  OtpStream: {
    watch: async () => {
      console.log('OtpStream.watch() is running...')
      const stream = User.watch([], { fullDocument: 'updateLookup' })

      stream.on('change', async (change) => {
        console.log('Change detected:', change)

        if (['insert', 'update', 'replace'].includes(change.operationType)) {
          const user = change.fullDocument
          console.log('User fullDocument:', user)

          if (!user.resetPasswordToken || !user.mobileNumber) {
            console.error('User does not have an OTP or a valid mobile number:', user._id)
            return
          }

          const mobileNumber = parsePhoneNumberFromString(user.mobileNumber, 'PH')
          if (!mobileNumber || !mobileNumber.isValid()) {
            console.error('Invalid mobile number:', user.mobileNumber)
            return
          }

          const expirationMessage = user.resetTokenExpiration
            ? ` This OTP will expire on: ${format(new Date(user.resetTokenExpiration), 'MMMM dd, yyyy hh:mm a')}.`
            : ''

          const message = `Hi, this is AgriGuard! Your OTP is ${user.resetPasswordToken}. ${expirationMessage}`
          console.log(message)
          // const response = await SmsService.sendMessage(message, mobileNumber.format('E.164'))
          // console.log(`OTP sent successfully to ${mobileNumber.format('E.164')}:`, response)
        }
      })

      stream.on('error', (error) => {
        console.error('Error in OtpStream.watch():', error.message)
      })
    }
  }
}
