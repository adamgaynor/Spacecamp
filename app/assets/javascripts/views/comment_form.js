SpaceCamp.Views.CommentForm = Backbone.View.extend({
	template: JST['comments/form'],

	tagName: "form",

	events: {
		'click button': 'submit'
	},

	className: 'comment-form',

	initialize: function (options) {
		this.discussion = options.discussion;
	},

	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);

		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var formData = this.$el.serializeJSON();
		this.model.set(formData);
		this.model.set("discussion_id", this.discussion.id);
		this.model.save(formData, {
			success: function () {
				this.collection.add(this.model, { merge: true });
				this.discussion.fetch();
			}.bind(this)
		});
	}

});
