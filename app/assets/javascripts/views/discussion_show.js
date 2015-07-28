SpaceCamp.Views.DiscussionShow = Backbone.CompositeView.extend({
	template: JST['discussions/show'],

	tagName: 'section',

	events: {
		'click button': 'deleteDiscussion'
	},

	initialize: function (options) {
		this.project = options.project;
		this.comments = options.comments;
    this.listenToOnce(this.model, "sync", this.render);
		this.listenTo(this.comments, "add remove", this.render);
    this.$el.attr("class", "discussion-show group");
  },

	render: function () {
		var content = this.template({
			project: this.project,
			discussion: this.model,
			comments: this.comments
		});
		this.$el.html(content);

		this.removeAllComments();
    this.model.comments().each(this.addComment.bind(this));
    this.addCreateComment();
    this.attachSubviews();

		return this;
	},

  removeAllComments: function () {
    var subviews = this.subviews('.comments');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.comments'));
  },

  addComment: function (comment) {
    var commentView = new SpaceCamp.Views.CommentShow({
      model: comment,
      collection: this.model.comments()
    });
    this.addSubview('.comments', commentView);
  },

	addCreateComment: function () {
    var comment = new SpaceCamp.Models.Comment();
    var createCommentForm = new SpaceCamp.Views.CommentForm({
      discussion: this.model,
      collection: this.model.comments(),
      model: comment
    });
    this.addSubview('.comments', createCommentForm);
  },

	deleteDiscussion: function (event) {
		event.preventDefault();
	}
});
