var AppView = Backbone.View.extend({
  el: '#app',
  initialize: function() {

    var self = this;
    var Router = Backbone.Router.extend({
      routes: {

        'menu':   'menu',
        'game':   'game',
        'leaderboard': 'leaderboard',
        'settings':  'settings',
        '*loading': 'loading'
      },

      loading: function() {
        self.hideAllPages();
        self.loadingView.$el.show();
      },

      menu: function() {
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

    this.projects = new ProjectsCollection();
    this.appRouter = new Router();

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
    this.loadingView = new LoadingView({
      router: this.appRouter
    });

    Backbone.history.start();
  },

  hideAllPages: function() {
    $('.page-view').hide();
  }
});
