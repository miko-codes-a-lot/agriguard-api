// require('dotenv').config()
// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: true,
//   auth: {
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD
//   },
//   debug: true,
//   logger: true
// })

// transporter.verify((error, success) => {
//   if (error) {
//     console.log('Error in email configuration:', error)
//   } else {
//     console.log('Email configuration is valid.')
//   }
// })

// const sendEmailNotification = async (to, subject, name, token) => {
//   const message = 'Use this OTP to securely reset your password.'
//   const tokenText = `<p style="font-weight: bold; font-size: 20px;">${token}</p>`
//   try {
//     await transporter.sendMail({
//       from: process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USERNAME,
//       to,
//       subject,
//       html: emailTemplate(name, message, tokenText)
//     })
//     console.log('Email sent successfully to:', to)
//   } catch (error) {
//     console.error('Error sending email:', error)
//     throw error
//   }
// }

// const emailTemplate = (name, message, tokenText) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Email Notification</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             padding: 20px;
//             border-radius: 8px;
//             max-width: 600px;
//             margin: auto;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .content {
//             background-color: #ffffff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             border: 1px solid #ddd;
//         }
//         h1 {
//             color: #333;
//         }
//         p {
//             font-size: 18px;
//             font-weight: bold;
//             line-height: 1.5;
//             color: #333;
//         }
//         .token-container {
//             text-align: center;
//             margin-top: 30px;
//             margin-bottom: 25px;
//             font-weight: bold;
//             font-size: 25px;
//             color: #333;
//         }
//         .footer {
//             text-align: center;
//             margin-top: 45px;
//             font-size: 14px;
//             color: #999;
//         }
//     </style>
// </head>
// <body>
//     <div class="content">
//         <h1>Hello ${name},</h1>
//         <p>${message}</p>

//         <div class="token-container">
//             ${tokenText}
//         </div>

//         <div class="footer">
//             <p>${process.env.APP_NAME}</p>
//         </div>
//     </div>
// </body>
// </html>
// `

// module.exports = { sendEmailNotification }