var AppView = Backbone.View.extend({
  el: '#app',
  initialize: function() {
    console.log(ProjectsCollection);
    this.projects = new ProjectsCollection();

    this.menuView = new MenuView({
      projects: this.projects
    });
    this.gameView = new GameView({
      projects: this.projects
    });
    this.adminView = new AdminView({
      projects: this.projects
    });
    this.projectsView = new ProjectsView({
      projects: this.projects
    });

    var self = this;
    console.log(this.projects);

    var Router = Backbone.Router.extend({
      routes: {
        'menu':   'menu',
        'game':   'game',
        'projects': 'projects',
        'admin':  'admin'
      },

      menu: function() {
        console.log('menu');
        self.hideAllPages();
        self.menuView.$el.show();
      },

      game: function() {
        self.hideAllPages();
        self.gameView.$el.show();
      },

      projects: function() {
        self.hideAllPages();
        self.projectsView.$el.show();
      },

      admin: function() {
        self.hideAllPages();
        self.adminView.$el.show();
      }
    });

    var appRouter = new Router();

    Backbone.history.start();
  },

  hideAllPages: function() {
    $('.page-view').hide();
  }
});
