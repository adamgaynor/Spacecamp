window.SpaceCamp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var projects = new SpaceCamp.Collections.Projects();
    new SpaceCamp.Routers.Router({
      projects: projects,
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   SpaceCamp.initialize();
// });
