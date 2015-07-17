SpaceCamp.Views.DiscussionShow = Backbone.CompositeView.extend({
	template: JST['discussions/show'],

	tagName: 'section',

	initialize: function (options) {
    this.project = options.project;
    this.listenToOnce(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");
    this.toDoLists = options.toDoLists;
    this.discussions = options.discussions;
    this.listenTo(this.toDoLists, "add", this.render);
  }

});
