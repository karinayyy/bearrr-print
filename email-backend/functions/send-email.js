const nodemailer = require('nodemailer');
const multer = require('multer');
const { buffer } = require('micro');
const cors = require('micro-cors')();
require('dotenv').config();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 2 * 1024 * 1024 }
}).fields([{ name: 'file', maxCount: 1 }]);

module.exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const {
        first_name, last_name, email, phone,
        zip_code, quantity, colors, sizes,
        decoration_location, garment_type, order_date, comments
    } = body;

    const file = body.file ? {
        filename: body.file.originalname,
        content: Buffer.from(body.file.buffer, 'base64')
    } : null;

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
        attachments: file ? [file] : []
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};

exports.handler = cors(module.exports.handler);
