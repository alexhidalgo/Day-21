var LoadingView = Backbone.View.extend({
	el: '#loading-view',
	initialize: function(options) {

		setTimeout (function() {
      options.router.navigate('menu', {trigger: true});
    }, 1000);
	}
});
