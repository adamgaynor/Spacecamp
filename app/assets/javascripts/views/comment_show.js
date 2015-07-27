SpaceCamp.Views.CommentShow = Backbone.CompositeView.extend(
	_.extend({}, SpaceCamp.Mixins.ElapsedTime, {
		template: JST['comments/show'],

		tagName: 'article',

		events: {
			'click .edit-button': 'showEditForm'
		},

		initialize: function (options) {
			this.$el.attr("class", "comment-article");
			this.listenTo(this.collection, "add change", this.render);
		},

		render: function () {
			var updated = new Date(this.model.get("updated_at"));
			var timeSinceUpdate = this.getElapsedTime(updated);
			var content = this.template({
				comment: this.model,
				time: timeSinceUpdate
			});
			this.$el.html(content);

			this.removeAllForms();
	    this.addEditComment();
	    this.attachSubviews();

			return this;
		},

		removeAllForms: function () {
	    var subviews = this.subviews('.comment-edit-form');
	    var views = subviews.clone();
	    views.forEach(this.removeSubview.bind(this, '.comment-edit-form'));
	  },

	  addEditComment: function () {
	    var comment = this.model;
			//debugger
	    var createCommentEditForm = new SpaceCamp.Views.CommentEditForm({
	      model: comment,
	      collection: this.collection
	    });
	    this.addSubview(".comment-edit-form", createCommentEditForm);
	  },

	  showEditForm: function (event) {
	    event.preventDefault();
			debugger
	    var $target = $(event.delegateTarget);
	    var $form = $target.find(".comment-edit-form");
	    $form.addClass("show");
	  }
	})
);
