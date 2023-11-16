import express from "express";
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { json, urlencoded } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

// Replace these values with your Gmail API OAuth2 credentials
const CLIENT_ID = '238369356040-vnnv89bp5lagopu87ko1u7vrqctdpti0.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const EMAIL_ADDRESS = 'salumtwas25@gmail.com';

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: '1//04HiTn2LvaYAfCgYIARAAGAQSNwF-L9IrGjIiBGHC-PdE9AAPi-w03FdZSLZbPfSQwsos_A8-CSPB9apLE6JdHD9UTrP2JrHwOAk', 
});

// Define a route to handle POST requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
