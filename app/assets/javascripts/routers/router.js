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
    var project = new SpaceCamp.Models.Project();
    var newProjectView = new SpaceCamp.Views.ProjectsForm({
      project: project,
      projects: this.projects
    });
    this._swapView(newProjectView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
