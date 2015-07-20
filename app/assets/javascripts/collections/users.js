SpaceCamp.Collections.Users = Backbone.Collection.extend({
  model: SpaceCamp.Models.User,

  url: '/api/users'
});
