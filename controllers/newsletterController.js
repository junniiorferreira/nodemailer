const express = require('express');
const Newsletter = require('../models/Newsletter');
const nodemailer = require('nodemailer')
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'mail.infochd.com.br',
    port: 587,
    secure: false,
    auth: {
      user: 'contato@infochd.com.br',
      pass: '4oYOrin~u6vR'
    }
});

const mailOptions = {
    from: 'contato@infochd.com.br',
    to: 'kyrvim@gmail.com',
    subject: 'teste dt3 sports',
    text: 'Esse é um teste dt3 sports'    
}

router.get('/', async (req, res) => {
    try {
        const newsletters = await Newsletter.find({});
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log(info)
        })
        return res.send({ newsletters });
    } catch (err) {
        return res.status(400).send({ error: 'O banco de dados recusou a requisição' })
    }
});

router.post('/', async (req, res) => {
    const {email} = req.body;
    try {
        if ( await Newsletter.findOne({ email }) )
            return res.status(400).send({ erro: 'Esse e-mail já foi registrado!' });
        
        const newsletter = await Newsletter.create(req.body);

        return res.send({ newsletter });
    } catch (err) {
        return res.status(400).send({ error: 'O banco de dados recusou a requisição' })
    }
});

module.exports = app => app.use('/newsletter', router);