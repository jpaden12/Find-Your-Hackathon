/**
 * Created by Jamal on 9/21/2016.
 */

// BASE SETUP
//===================================

//CALL THE PACKAGES -----------------
var express        = require('express'); // call express
var app            = express(); //define our app using express
var bodyParser     = require('body-parser'); //get body-parser
var morgan         = require('morgan'); //used to see requests
var mongoose       = require('mongoose'); //for working with the database
var port           = process.env.PORT || 8080; //set the port for our app
var restful        = require('node-restful'); //using node-restful methods

//APP CONFIGURATION -----------------
//use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
}); 

// log requests to the console
app.use(morgan('dev'));

//connect to MongoDB
//========================================================
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function(err) {
    console.log('mongodb connection error: %s', err);
    process.exit();
});

db.once('open', function() {
    console.log('Sucessfully connected to mongodb'); 
    app.emit('dbopen'); 
});
//=======================================================


//Routes
app.use('/api', require('./routes/routes'));


//===========================================================
//Starting the Server
app.listen(port); 
console.log('Magic happens on port ' + port); 
