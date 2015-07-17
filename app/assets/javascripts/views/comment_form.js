SpaceCamp.Views.CommentForm = Backbone.View.extend({
	template: JST['comments/form'],

	tagName: "form",

	initialize: function (options) {
		this.discussion = options.discussion;
		this.$el.attr("class", "comment-form");
		//this.listenTo(this.model, "sync", this.render);
	},

	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);

		return this;
	}
});
