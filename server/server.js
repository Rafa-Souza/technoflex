const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/clp-message', (req, res) => {
    res.send('test message');
});

app.post('/clp-message', (req, res) => {
    console.log(req.body.message);
});

// listen on the port
app.listen(port);