const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // STARTTLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },
    requireTLS: true
});

console.log('Testing connection with:');
console.log('Host:', process.env.EMAIL_HOST);
console.log('User:', process.env.EMAIL_USER);

transporter.verify(function (error, success) {
    if (error) {
        console.log('Connection error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});
