var MenuView = Backbone.View.extend({
	el: '#menu-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);
	},

	render: function() {
		console.log('render');
		this.$currentPosition.hide();
		this.$recentProject.hide();

		var numProjects = this.projects.length;

		if(numProjects) {
			var lastProject = this.projects.at(numProjects-1);
			this.$recentProject.show();
			this.$recentProjectName.text(lastProject.get('name'));
			this.$recentProjectName.attr('href', lastProject.get('url'));
		}
	}
});
