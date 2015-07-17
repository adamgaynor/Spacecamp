SpaceCamp.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'projectsIndex',
    'projects/new': 'newProject',
    'projects/:id': 'showProject',
    'projects/:project_id/discussions/new': 'newDiscussion',
    'discussions/:id': 'showDiscussion',
    'discussions/:id/edit': 'editDiscussion'
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

  showProject: function (id) {
    var project = this.projects.getOrFetch(id);
    var projectShow = new SpaceCamp.Views.ProjectShow({
      project: project,
      toDoLists: project.toDoLists(),
      discussions: project.discussions()
    });
    this._swapView(projectShow);
  },

  newDiscussion: function (project_id) {
    var discussion = new SpaceCamp.Models.Discussion();
    var project = this.projects.getOrFetch(project_id);
    var newDiscussionView = new SpaceCamp.Views.DiscussionForm({
      model: discussion,
      collection: project.discussions(),
      project: project
    });
    this._swapView(newDiscussionView);
  },

  showDiscussion: function (id) {

  },

  editDiscussion: function (id) {

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
