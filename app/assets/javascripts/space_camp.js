window.SpaceCamp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var projects = new SpaceCamp.Collections.Projects();
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
