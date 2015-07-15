SpaceCamp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/projects',

  parse: function (response) {
    if (response.projects) {
      this.projects().set(response.projects);
      delete response.projects;
    }

    return response;
  }
});
