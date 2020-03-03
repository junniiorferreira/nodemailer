const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/newsletterController')(app);

app.listen(3000, () => {
    console.log("Dt3 NodeMailler Online!")
});