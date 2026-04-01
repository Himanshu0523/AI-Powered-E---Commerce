const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail" ,
    auth: {
        user1: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASS
    }
});

const sendEmail = async (to , subject , html) => {
    await transporter.sendMail({
        from : process.env.EMAIL_USER ,
        to ,
        subject,
        html
    });
};

module.exports = sendEmail;