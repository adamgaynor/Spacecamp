window.SpaceCamp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {

    // this.currentUser = new SpaceCamp.Models.CurrentUser();
    // this.currentUser.fetch();
    var projects = new SpaceCamp.Collections.Projects();
    //projects.fetch();
    new SpaceCamp.Routers.Router({
      projects: projects,
      $rootEl: $("#content")
    });
    //Backbone.history.stop();
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   SpaceCamp.initialize();
// });
