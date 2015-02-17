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
    this.settingsView = new SettingsView({
      projects: this.projects
    });
    this.leaderboardView = new LeaderboardView({
      projects: this.projects
    });

    var self = this;
    console.log(this.projects);

    var Router = Backbone.Router.extend({
      routes: {
        'menu':   'menu',
        'game':   'game',
        'leaderboard': 'leaderboard',
        'settings':  'settings'
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

      leaderboard: function() {
        self.hideAllPages();
        self.leaderboardView.$el.show();
      },

      settings: function() {
        self.hideAllPages();
        self.settingsView.$el.show();
      }
    });

    var appRouter = new Router();

    Backbone.history.start();
  },

  hideAllPages: function() {
    $('.page-view').hide();
  }
});
