SpaceCamp.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  tagName: 'section',

  events: {
    'click .add-collaborator': 'addCollaborator',
    'click .remove-collaborator': 'removeCollaborator'
  },

  initialize: function (options) {
    this.project = options.project;
    this.users = options.users;
    this.collaborators = this.project.collaborators();
    this.$el.attr("class", "users-list");
    this.listenTo(this.users, "sync", this.render);
    this.listenTo(this.project, "sync", this.render);
  },

  render: function () {
    collaborators = this.collaborators;
    users = this.users;
    var content = this.template({
      users: this.users,
      collaborators: collaborators
    });
    this.$el.html(content);

    return this;
  },

  addCollaborator: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var formData = {
      collaboration: {
        user_id: $target.data("user-id")
      }
    }
  },

  removeCollaborator: function (event) {
    event.preventDefault();
  }
});
