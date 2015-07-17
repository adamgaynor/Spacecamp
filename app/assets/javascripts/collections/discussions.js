SpaceCamp.Collections.Discussions = Backbone.Collection.extend({
	url: function () {
    return this.project.url() + "/discussions";
  },

  model: SpaceCamp.Models.Discussion,

	getOrFetch: function (id) {
    var discussions = this;
    var discussion = this.get(id);
    if (discussion) {
      discussion.fetch();
    } else {
      discussion = new SpaceCamp.Models.Discussion({ id: id });
      discussion.fetch({
        success: function () {
          discussions.add(discussion);
        }
      });
    }
    return discussion;
  }
});
