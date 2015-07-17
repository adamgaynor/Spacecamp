SpaceCamp.Views.DiscussionShow = Backbone.CompositeView.extend({
	template: JST['discussions/show'],

	tagName: 'section',

	initialize: function (options) {
		this.comments = options.comments;
    this.listenToOnce(this.model, "sync", this.render);
    this.$el.attr("class", "discussion-show group");
  },

	render: function () {
		var content = this.template({
			discussion: this.model,
			comments: this.comments
		});
		this.$el.html(content);

		return this;
	}

});
