const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');



const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
  .then(() => console.log('Connected to mongodb'))
  .catch(err => console.log(err));

app.use('/api/items', items)

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Connected to port ${port}`))