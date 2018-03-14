const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


//This is to create a static path for production builds for the server to access
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});



app.listen(port, () => console.log(`Listening on port ${port}`));