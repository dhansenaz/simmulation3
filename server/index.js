const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller.js');
const app = express();
const PORT = 4000;


const massive = require('massive')
require('dotenv').config()

app.post('/api/createUser', ctrl.createUser)

app.listen(PORT, () => console.log("You are running on port 4000"))