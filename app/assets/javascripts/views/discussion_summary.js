SpaceCamp.Views.DiscussionSummary = Backbone.View.extend(
	_.extend({}, SpaceCamp.Mixins.ElapsedTime, {
		template: JST['discussions/summary'],

		tagName: 'tr',

		initialize: function (options) {
			this.project = options.project;
			this.$el.attr("class", "group");
		},

		render: function () {
			var updated = new Date(this.model.get("updated_at"));
			var timeSinceUpdate = this.getElapsedTime(updated);
			var content = this.template({
				discussion: this.model,
				project: this.project,
				time: timeSinceUpdate
			});
			this.$el.html(content);

			return this;
		}
	})
);
