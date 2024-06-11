const nodemailer = require('nodemailer');
const multer = require('multer');
const { buffer } = require('micro');
const cors = require('micro-cors')();
require('dotenv').config();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 }
});

module.exports.handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            await new Promise((resolve, reject) => {
                upload(req, res, (err) => {
                    if (err) return reject(err);
                    resolve();
                });
            });

            const {
                first_name, last_name, email, phone,
                zip_code, quantity, colors, sizes,
                decoration_location, garment_type, order_date, comments
            } = req.body;

            const file = req.files?.file?.[0];

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false,
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
                    content: file.buffer
                }] : []
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });

        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

exports.handler = cors(module.exports.handler);
