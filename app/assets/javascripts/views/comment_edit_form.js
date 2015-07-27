SpaceCamp.Views.CommentEditForm = Backbone.View.extend({
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
  }
});
