SpaceCamp.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'projectsIndex',
    'user/edit': 'editUser',
    'projects/new': 'newProject',
    'projects/:id': 'showProject',
    'projects/:project_id/discussions/new': 'newDiscussion',
    'projects/:project_id/discussions/:discussion_id': 'showDiscussion',
    'discussions/:id/edit': 'editDiscussion',
    'projects/:project_id/add': 'addCollaborators',
    'projects/:project_id/discussions': 'discussionsIndex',
    'projects/:project_id/react_discussions': 'react_DiscussionsIndex',
    'projects/:project_id/todoLists': 'todoListsIndex'
  },

  initialize: function (options) {
    this.user = new SpaceCamp.Models.CurrentUser();
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

  editUser: function () {
    this.user.fetch({
      success: function () {
        var userEditView = new SpaceCamp.Views.UserEditForm({
          model: this.user
        });
        this._swapView(userEditView);
      }.bind(this)
    });
  },

  react_DiscussionsIndex: function (project_id) {
    var url = 1;


    var project = this.projects.getOrFetch(project_id);
    var discussions = project.discussions();
    var discussionsIndexView = new SpaceCamp.Views.DiscussionsIndex({
      discussions: discussions,
      project: project
    });
    this._swapView(discussionsIndexView);
  },

  newProject: function () {
    var project = new SpaceCamp.Models.Project();
    var newProjectView = new SpaceCamp.Views.ProjectsForm({
      router: this,
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
      discussions: project.discussions(),
      collaborators: project.collaborators()
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

  showDiscussion: function (project_id, discussion_id) {
    var project = this.projects.getOrFetch(project_id);
    var discussion = project.discussions().getOrFetch(discussion_id);
    var discussionShow = new SpaceCamp.Views.DiscussionShow({
      project: project,
      model: discussion,
      comments: discussion.comments()
    });
    this._swapView(discussionShow);
  },

  editDiscussion: function (id) {

  },

  addCollaborators: function (project_id) {
    var users = new SpaceCamp.Collections.Users();
    users.fetch();
    var project = this.projects.getOrFetch(project_id);
    var addCollaboratorsView = new SpaceCamp.Views.UsersIndex({
      project: project,
      users: users
    });
    this._swapView(addCollaboratorsView);
  },

  discussionsIndex: function (project_id) {
    var project = this.projects.getOrFetch(project_id);
    var discussions = project.discussions();
    var discussionsIndexView = new SpaceCamp.Views.DiscussionsIndex({
      discussions: discussions,
      project: project
    });
    this._swapView(discussionsIndexView);
  },

  todoListsIndex: function(project_id) {
    var project = this.projects.getOrFetch(project_id);
    var toDoLists = project.toDoLists();
    var toDoListsIndexView = new SpaceCamp.Views.ToDoListsIndex({
      toDoLists: toDoLists,
      project: project,
      collaborators: project.collaborators()
    });
    this._swapView(toDoListsIndexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
})
