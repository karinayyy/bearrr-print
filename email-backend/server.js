require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB file size limit
}).fields([
    { name: 'file', maxCount: 1 }, // Field name 'file' with max 1 file
    // Add other fields here if you have additional file inputs
]);

// Endpoint to send email
app.post('/send-email', upload, (req, res) => {
    const {
        first_name, last_name, email, phone,
        zip_code, quantity, colors, sizes,
        decoration_location, garment_type, order_date, comments
    } = req.body;

    const file = req.files?.file?.[0]; // Access uploaded file if exists

    console.log('Received form data:', req.body);
    console.log('Received file:', file);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        logger: true,
        debug: true
    });

    const mailOptions = {
        from: email,
        to: 'bearrrprint@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
            Name: ${first_name} ${last_name}
            Email: ${email}
            Phone: ${phone}
            Zip Code: ${zip_code}
            Quantity: ${quantity}
            Colors: ${colors}
            Sizes: ${sizes}
            Decoration Location: ${decoration_location}
            Garment Type: ${garment_type}
            Order Date: ${order_date}
            Comments: ${comments}
        `,
        attachments: file ? [{ // If a file is uploaded, attach it
            filename: file.originalname,
            content: file.buffer
        }] : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
