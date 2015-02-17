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
    this.loadingView = new LoadingView({
      projects: this.projects
    });

    var self = this;
    console.log(this.projects);

    var Router = Backbone.Router.extend({
      routes: {
        'menu':   'menu',
        'game':   'game',
        'leaderboard': 'leaderboard',
        'settings':  'settings',
        'loading': 'loading'
      },

      menu: function() {
        console.log('menu');
        self.hideAllPages();
        self.menuView.$el.show();
      },

      game: function() {
        console.log('game');
        self.hideAllPages();
        self.gameView.$el.show();
      },

      leaderboard: function() {
        console.log('leaderboard');
        self.hideAllPages();
        self.leaderboardView.$el.show();
      },

      settings: function() {
        console.log('settings');
        self.hideAllPages();
        self.settingsView.$el.show();
      },

      loading: function() {
        console.log('loading');
        self.hideAllPages();
        self.loadingView.$el.show();
      }
    });

    var appRouter = new Router();

    Backbone.history.start();
  },

  hideAllPages: function() {
    $('.page-view').hide();
  }
});
