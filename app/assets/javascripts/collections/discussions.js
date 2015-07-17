SpaceCamp.Collections.Discussions = Backbone.Collection.extend({
	url: function () {
    return this.project.url() + "/discussions";
  },

  model: SpaceCamp.Models.Discussion
});
