SpaceCamp.Views.CommentShow = Backbone.View.extend({
	template: JST['comments/show'],

	tagName: 'section',

	initialize: function (options) {
		this.$el.attr("class", "comment-form");
	},

	render: function () {
		var updatedData = new Date(this.model.attributes.updated_at);
		var timeSinceUpdate = this.getElapsedTime(updatedData);
		var content = this.template({
			comment: this.model,
			discussion: this.collection,
			time: timeSinceUpdate
		});
		this.$el.html(content);

		return this;
	},

	// processes the last date the comment was updated, and gives the
	// time ago in a readable format
	getElapsedTime: function (date) {
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - date) / 1000);
    //delta = delta + (relative_to.getTimezoneOffset() * 60);

    if (delta < 60) { return 'Less than a minute ago'; }
    else if (delta < 120) { return 'A minute ago'; }
    else if (delta < (60 * 60)) { return (parseInt(delta / 60)).toString() + ' minutes ago'; }
    else if (delta < (120 * 60)) { return 'An hour ago'; }
    else if (delta < (24 * 60 * 60)) { return '' + (parseInt(delta / 3600)).toString() + ' hours ago'; }
    else if (delta < (48 * 60 * 60)) { return '1 day ago'; }
    else { return (parseInt(delta / 86400)).toString() + ' days ago'; }
}
});
