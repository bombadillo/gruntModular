/* Require modules */
var $ = require('jquery'),
    Backbone = require('backbone');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Set the router as the module exports
module.exports = Backbone.Router.extend({

	// The app routes ("routeUrl": "routeName")
    routes: {
        "": "home",
        "employees/:id": "employeeDetails",
        "employees/:id/reports": "reports"
    },

    // Home route listener
    home: function () {
		// Require views.
		var HomeView = require('./views/home');

		// Create instances of views.
		var homeView = new HomeView({ el: $('#el-home') });    
    },

});