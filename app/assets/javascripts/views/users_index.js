SpaceCamp.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  tagName: 'section',

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
  }
});
