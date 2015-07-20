SpaceCamp.Collections.Collaborators = Backbone.Collection.extend({
  url: function () {
    return this.project.url() + "/users";
  }
});
