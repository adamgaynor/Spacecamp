SpaceCamp.Collections.Projects = Backbone.Collection.extend({
  url: '/api/projects',
  
  model: SpaceCamp.Models.Project
});
