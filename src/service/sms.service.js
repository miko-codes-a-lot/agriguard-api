const twilio = require('twilio')
const { parsePhoneNumberFromString } = require('libphonenumber-js')
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

const formatPhoneNumber = (phoneNumber, countryCode = 'PH') => {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode)
  if (parsedNumber && parsedNumber.isValid()) {
    return parsedNumber.format('E.164')
  } else {
    console.error(`Invalid phone number: ${phoneNumber}`)
    return null
  }
}

const sendMessage = async (message, receiver = '+639394251071') => {
  try {
    const formattedReceiver = formatPhoneNumber(receiver)
    if (!formattedReceiver) {
      throw new Error('Invalid phone number format')
    }
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_SENDER_NUMBER,
      to: formattedReceiver

    })
    console.log(`OTP sent successfully to ${formattedReceiver}: ${result.sid}`)
    return { success: true, message: `OTP sent successfully to ${formattedReceiver}.`, sid: result.sid }
  } catch (error) {
    console.error(`Failed to send OTP to ${receiver}:`, error.message)
    return { success: false, message: `Failed to send OTP to ${receiver}: ${error.message}` }
  }
}

module.exports = {
  SmsService: {
    sendMessage
  }
}
