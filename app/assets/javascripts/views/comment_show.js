SpaceCamp.Views.CommentShow = Backbone.View.extend(
	_.extend({}, SpaceCamp.Mixins.ElapsedTime, {
		template: JST['comments/show'],

		tagName: 'article',

		initialize: function (options) {
			this.$el.attr("class", "comment-article");
			this.listenTo(this.collection, "add", this.render);
		},

		render: function () {
			var updated = new Date(this.model.get("updated_at"));
			var timeSinceUpdate = this.getElapsedTime(updated);
			var content = this.template({
				comment: this.model,
				time: timeSinceUpdate
			});
			this.$el.html(content);

			return this;
		}
	})
);
