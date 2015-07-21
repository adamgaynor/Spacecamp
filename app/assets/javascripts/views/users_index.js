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
    this.collaborations = this.project.collaborations();
    this.collaborators = this.project.collaborators();
    this.$el.attr("class", "users-list");
    this.listenTo(this.users, "sync", this.render);
    this.listenTo(this.project, "sync", this.render);
    //this.listenTo(this.collaborators, "add", this.render);
  },

  render: function () {
    collaborations = this.collaborations;
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
    //model initialize(attributes, options)
    //attributes are saved into the model's attributes
    //options are just handled within the model
    var collaboration = new SpaceCamp.Models.Collaboration({
      project_id: this.project.id
    });
    var $target = $(event.currentTarget);
    var formData = {
      collaboration: {
        user_id: $target.data("user-id")
      }
    };
    collaboration.save(formData, {
      success: function () {
        this.collaborations.add(collaboration);
        this.project.fetch();
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
