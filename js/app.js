/* Require modules */
var $ = require('jquery'),
    Backbone = require('backbone'),
    Router = require('./router');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;  

// Create instance of router
var router = new Router();

// Call function to start the Backbone history functionality
Backbone.history.start();
