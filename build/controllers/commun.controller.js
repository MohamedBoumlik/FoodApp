"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendEmail = async (email, confirmation, ticket) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testcoding975@gmail.com',
            pass: 'testCoding1998'
        }
    });
    var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: email,
        subject: confirmation,
        html: ticket
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=commun.controller.js.map