window.SpaceCamp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var projects = new SpaceCamp.Collections.Projects();
    //var current_user = new SpaceCamp.Models.User();
    new SpaceCamp.Routers.Router({
      projects: projects,
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SpaceCamp.initialize();
});
