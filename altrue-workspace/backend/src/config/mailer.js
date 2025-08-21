const nodemailer = require('nodemailer');

const mailerConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
};

const transporter = nodemailer.createTransport(mailerConfig);

const sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendEmail,
};