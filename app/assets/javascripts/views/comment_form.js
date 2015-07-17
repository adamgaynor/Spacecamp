SpaceCamp.Views.CommentForm = Backbone.View.extend({
	template: JST['comments/form'],

	tagName: "form",

	events: {
		'click button': 'submit'
	},

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
	},

	submit: function (event) {
		event.preventDefault();
		var formData = this.$el.serializeJSON();
		this.model.set(formData);
		formData.project_id = this.discussion.id;
		this.model.save(formData, {
			success: function () {
				this.model.fetch();
				this.collection.add(this.model);
			}.bind(this)
		});
	}

});
