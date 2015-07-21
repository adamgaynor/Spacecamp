SpaceCamp.Models.Collaboration = Backbone.Model.extend({
  initialize: function (options) {
    this.project = options.project;
  },

  url: function () {
    return '/api/projects/' + this.project.id + '/collaborations'
  }
});
