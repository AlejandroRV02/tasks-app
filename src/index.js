const express = require('express');
const app = express();

const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alex13:alexrv13@cluster0.48b4z.mongodb.net/mevn?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
       useUnifiedTopology: true })
    .then( db => console.log('DB connected'))
    .catch( err => console.error(err));

//Settings
app.set('port', process.env.port || 3000);


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
//Routes
app.use('/api/tasks', require('./routes/tasks'));

//Static files
app.use(express.static(__dirname + '/public'))

//Running the server
app.listen('3000', () => {
    console.log('Server on port ' + app.get('port'));
});