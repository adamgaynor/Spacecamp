SpaceCamp.Views.CommentEditForm = Backbone.View.extend({
  template: JST['comments/form'],

  tagName: "form",

  events: {
    'click .submit': 'submit'
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
    this.model.save(formData, {
			success: function () {
				this.model.fetch();
			}.bind(this)
		});

  }
});
