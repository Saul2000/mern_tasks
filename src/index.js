const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares - Functions who executes before arrive to the routes
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
// console.log(__dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), ()  => {
    console.log(`Server on port ${app.get('port')}`);
});