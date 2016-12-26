/**
 * Created by Jamal on 9/21/2016.
 */
// Dependencies
var express = require('express'); 
var router  = express.Router(); 

//Models
var Hackathon = require('../api/models/hackathon_schema'); 

//Routes
Hackathon.methods(['get', 'put', 'post', 'delete']); 
Hackathon.register(router, 'hackathons'); 

//return router
module.exports = router; 
