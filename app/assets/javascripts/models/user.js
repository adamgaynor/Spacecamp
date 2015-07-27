SpaceCamp.Models.User = Backbone.Model.extend({

  toJSON: function() {
    return { user: _.clone( this.attributes ) }
  }
  urlRoot: '/api/current_user' //,

  // parse: function (response) {
  //   if (response.projects) {
  //     this.projects().set(response.projects);
  //     delete response.projects;
  //   }
  //
  //   return response;
  // }
});


SpaceCamp.Models.CurrentUser = SpaceCamp.Models.User.extend({
  url: '/api/current_user'
});
