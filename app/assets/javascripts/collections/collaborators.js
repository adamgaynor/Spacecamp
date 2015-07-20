SpaceCamp.Collections.Collaborators = Backbone.Collection.extend({
  model: SpaceCamp.Models.Collaborator,

  initialize: function (options) {
    this.project = options.project;
  },

  url: function () {
    return this.project.url() + "/users";
  }
});
