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
    this.listenTo(this.collaborators, "add", this.render);
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
    var collaboration = new SpaceCamp.Models.Collaboration({
      project: this.project
    });
    var $target = $(event.currentTarget);
    var formData = {
      collaboration: {
        user_id: $target.data("user-id")
      }
    };
    collaboration.set(formData);
    collaboration.save({
      success: function () {
        var url = '#projects/' + this.project.id + '/add';
        this.project.fetch();
        //this.collaborators.add(this.users.get($target.data("user-id")));
        //Backbone.history.navigate(url, { trigger: true });
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  },

  removeCollaborator: function (event) {
    event.preventDefault();
  }
});
