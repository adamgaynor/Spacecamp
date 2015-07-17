SpaceCamp.Views.DiscussionSummary = Backbone.View.extend({
	template: JST['discussions/summary'],

	tagName: 'article',

	render: function () {
		var content = this.template({
			project: this.model,
			author: this.model.get("author_id")
		});
		this.$el.html(content);

		return this;
	}
}),
