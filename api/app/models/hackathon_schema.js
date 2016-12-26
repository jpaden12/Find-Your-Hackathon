/**
 * Created by Jamal on 9/21/2016.
 */
var node_restful = require('node-restful');
var mongoose     = node_restful.mongoose;
var bcrypt       = require('bcrypt-nodejs');

var hackathon_schema = new mongoose.Schema({
    name: String,
    location: { type: String, required: true},
    website: { type: String, required: false},
    MLH: { type: Boolean, required: false}
});

//return the model
module.exports = node_restful.model('Hackathon', hackathon_schema);
