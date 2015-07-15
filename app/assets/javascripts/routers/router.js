SpaceCamp.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'projectsIndex',
    'projects/new': 'newProject'
  },

  initialize: function (options) {
    this.projects = options.projects;
    this.$rootEl = options.$rootEl;
    this.projects.fetch();
  },

  projectsIndex: function () {
    var indexView = new SpaceCamp.Views.ProjectsIndex({
      projects: this.projects
    });
    this._swapView(indexView);
  },

  newProject: function () {
    var newProjectView = new SpaceCamp.Views.NewProject({
      model: project
    });
    this._swapView(newProjectView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
