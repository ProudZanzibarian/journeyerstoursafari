import express from 'express';
import { urlencoded } from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const port = 5173;

// Middleware to parse form data
app.use(urlencoded({ extended: true }));

const transporter = createTransport({
  service: 'Gmail', 
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',// Nodemailer setup (replace with your email and SMTP details)

  },
});

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { fname, email, phone_booking, noDay, noPeople, pickup, msg } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: 'salumtwas25@gmail.com', 
    subject: 'New Booking Request',
    text: `
      Full Name: ${fname}
      Email: ${email}
      Phone Booking: ${phone_booking}
      Number of Day(s): ${noDay || 'Not specified'}
      Number of People: ${noPeople}
      Pick-up Date: ${pickup}
      Mesage: ${msg}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
