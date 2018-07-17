const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 465,
 secure: true, // true for 465, false for other ports
 auth: {
   user: 'codecamp.emailer@gmail.com',
   pass: 'codecamp1234'
 }
})

async function sendMail () {
  // setup email data
  let mailOptions = {
    from: '"codecamp 👻" <codecamp.emailer@gmail.com>', // sender address
    to: 'faisol.chehumar@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  }
  try {
    const result = await transporter.sendMail(mailOptions)
    console.log('Message sent: %s', result.messageId)
  } catch (err) {
    console.log(err)
  }
 }

 sendMail()
 
