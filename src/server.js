// Imported modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRoutes = require('./routes/users');

// Express settings
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);


// DB settings
const dbName = 'cinder';
const URI = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Conected to', URI);
    }).catch((err) => {
        console.log('Could not connect. ', err);
    });

app.listen(app.get('port'), () => {
    console.log('Express app running on port', app.get('port'))
});