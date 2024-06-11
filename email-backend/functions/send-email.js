const nodemailer = require('nodemailer');
const multer = require('multer');
const { buffer } = require('micro');
const microCors = require('micro-cors');
const cors = microCors();
require('dotenv').config();

// Configure multer for file handling
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 } // 2 MB file size limit
}).single('file');

module.exports.handler = async (event) => {
    return new Promise((resolve) => {
        upload(event, {}, async (err) => {
            if (err) {
                console.error('Multer error:', err);
                resolve({
                    statusCode: 500,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ error: 'Error processing file upload' })
                });
            }

            const { first_name, last_name, email, phone, zip_code, quantity, colors, sizes, decoration_location, garment_type, order_date, comments } = JSON.parse(event.body);
            const file = event.file;

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                }
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
                attachments: file ? [{
                    filename: file.originalname,
                    content: Buffer.from(file.buffer, 'base64')
                }] : []
            };

            try {
                await transporter.sendMail(mailOptions);
                resolve({
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: 'Email sent successfully' })
                });
            } catch (error) {
                console.error('Error sending email:', error);
                resolve({
                    statusCode: 500,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ error: 'Error sending email' })
                });
            }
        });
    });
};

// Use micro-cors to handle CORS
exports.handler = cors(module.exports.handler);
