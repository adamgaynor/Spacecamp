SpaceCamp.Collections.Projects = Backbone.Collection.extend({
  url: '/api/projects',

  model: SpaceCamp.Models.Project,

  getOrFetch: function (id) {
    var projects = this;
    var project = this.get(id);
    if (project) {
      project.fetch();
    } else {
      project = new SpaceCamp.Models.Project({ id: id });
      project.fetch({
        success: function () {
          projects.add(project);
        }
      });
    }
    return project;
  }
});
