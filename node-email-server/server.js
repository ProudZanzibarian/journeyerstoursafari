import express from 'express';
import { createTransport } from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Destructure process.env directly for better readability
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  EMAIL_ADDRESS,
  REFRESH_TOKEN,
} = process.env;

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const transporter = createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL_ADDRESS,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: oAuth2Client.credentials.access_token,
  },
});

// Use a function to handle sending emails
const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
};

// Define a route to handle booking POST requests
app.post('/booking', async (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: formData.email,
    to: EMAIL_ADDRESS,
    subject: 'Booking Message from your website',
    text: `
      Name: ${formData.fname}
      Email: ${formData.email}
      Tel/Whatsapp: ${formData.tel}
      Destination: ${formData.destination}
      People: ${formData.people}
      Date: ${formData.date}
      Message: ${formData.message}
    `,
  };

  const result = await sendEmail(mailOptions);
  res.json(result);
});

// Define a route to handle contact-us POST requests
app.post('/contact-us', async (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: formData.email,
    to: EMAIL_ADDRESS,
    subject: 'Message from your website',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  const result = await sendEmail(mailOptions);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
