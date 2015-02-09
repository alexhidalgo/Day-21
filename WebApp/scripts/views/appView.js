var appView = Backbone.View.extend({
	el: '#app',

	initialize: function() {
		var newPageRouter = new pageRouter();

	},

});


Backbone.history.start();

hideAllPages: function() {
  $('.page-view').hide();
}
