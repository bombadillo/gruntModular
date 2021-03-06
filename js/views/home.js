/* Require modules */
var $        = require('jquery'),
    Backbone = require('backbone'),
    models   = require('../models/global'),
    template = require("../templates/home.html"),
    utils    = require("../utilities"),
    events   = require('../eventChannel');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Set the view as the module export
module.exports = Backbone.View.extend({

	// Is called at instantiation
    initialize: function () {
        // Log status
        utils.log("Home", "viewRender");

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
                // Trigger event for other modules to listen for
                events.trigger('homeData:retrieved');
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

});