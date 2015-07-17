SpaceCamp.Views.DiscussionSummary = Backbone.View.extend({
	template: JST['discussions/summary'],

	tagName: 'article',

	render: function () {
		var content = this.template({
			discussion: this.model
		});
		this.$el.html(content);

		return this;
	}
});
