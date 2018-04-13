const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller.js');
const PORT = 4000;



const app = express();

const massive = require('massive')
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.use(bodyParser.json());

app.post('/api/createuser', ctrl.createNewUser)

app.listen(PORT, () => console.log("You are running on port 4000"))