const mongoose = require('../database');

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    }
});

const Newsletter = mongoose.model('Newsletter', NewsletterSchema);

module.exports = Newsletter;