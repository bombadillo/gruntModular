/* Require modules */
var $ = require('jquery'),
    Backbone = require('backbone'),
    models = require('../models/global'),
    template = require("../templates/home.html");

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Set the view as the module export
module.exports = Backbone.View.extend({

	// Is called at instantiation
    initialize: function () {
        console.log("home initialize");

        // Set the model for the view
        this.model = new models.BasicModel({ urlRoot: '/data/home.json' });


        // Call function to fetch data for view
        this.fetchData();
    },  

    // Fetches the data for the view
    fetchData: function () {

    	// Assign scope
    	var $this = this;

    	// Fetch the model
    	this.model.fetch({
    		success: function () {
    			// Call function to render view
    			$this.render();
    		}
    	});
    	// END fetch

    },

    // Populates the view's element with the new HTML
    render: function () {     	

    	// Populate template with data
        this.$el.html( template( this.model.toJSON() ) );

        // Enable chaining
        return this;
    },
  
    events: {
    },

});