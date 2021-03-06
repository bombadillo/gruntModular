/* Require modules */
var $         = require('jquery'),
    Backbone  = require('backbone'),
    Router    = require('./router'),    
    events    = require('./eventChannel'),
    utils     = require('./utilities');

// Set jQuery to window object to enable global access
window.jQuery = $;

// Require bootstrap.
bootstrap = require('./_vendor/bootstrap');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Create instance of router
var router = new Router();

// Call function to start the Backbone history functionality
Backbone.history.start();

// Testing the events trigger/listen functionality
events.on('homeData:retrieved', function () {
	utils.log('Home data has been successfully retrieved');
});
