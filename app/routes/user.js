const express = require('express');
const common = require('../common');
const { transporter } = require('../mailer');

const router = express.Router()

router.post('/login', async (req, res) => {

    const reqData = req.body;
   
    try {
        await transporter.sendMail({
            from: 'nb85294@mail.ru',
            to: "codex.ru@mail.ru",
            subject: 'Новая заявка',
            text: 'Name: ' + reqData.name + '\n' +
            'Email: ' + reqData.email + '\n' +
            'Phone: ' + reqData.phone + '\n' +
            'Message: ' + reqData.message + '\n' 
        })

            common.response200(res)
        } catch (err) {
            common.response404(res, err);
        }
    });

    module.exports = router;