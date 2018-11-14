// Imported modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');


// Express settings
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Express app running on port', app.get('port'))
});


// DB settings
const dbName = 'cinder';
const URI = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Conected to', URI);
    }).catch((err) => {
        console.log('Could not connect. ', err);
    });