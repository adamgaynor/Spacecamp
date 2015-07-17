SpaceCamp.Views.DiscussionSummary = Backbone.View.extend({
	template: JST['discussions/summary'],

	tagName: 'article',

	initialize: function (options) {
		this.project = options.project;
	},

	render: function () {
		var content = this.template({
			discussion: this.model,
			project: this.project
		});
		this.$el.html(content);

		return this;
	}
});
