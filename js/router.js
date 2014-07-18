/* Require modules */
var $ = require('jquery'),
    Backbone = require('backbone');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Require views.
var HomeView = require('./views/home');

// Create instances of views.
var homeView = new HomeView({ el: $('#el-home') });    

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "employees/:id": "employeeDetails",
        "employees/:id/reports": "reports"
    },

    home: function () {
        console.log("home");
    },

});