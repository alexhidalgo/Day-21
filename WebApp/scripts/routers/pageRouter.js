var pageRouter = Backbone.Router.extend({

	routes: {
		'': 'home',
		'view': 'view'
	},

	home: function() {
		console.log('home page initialized');
		alert('you are viewing home page');
		$(document.body).append("Index route has been called..");
	},

	view: function() {
		alert('you are viewing view page');
	}
});

	console.log('router page initialzied');


