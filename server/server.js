const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/clp-message', (req, res) => {
    // Logic to get the message from the CLP
    const message = 'Test message';
    console.log(`Sending message: ${message}`)
    res.send(message);
});

app.post('/clp-message', (req, res) => {
    // Logic to send message to CLP
    const message = req.body.message
    console.log(`Message received: ${message}`);
});

// listen on the port
app.listen(port);