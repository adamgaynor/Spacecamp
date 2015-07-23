SpaceCamp.Views.DiscussionsIndex = Backbone.CompositeView.extend({
  template: JST['discussions/index'],

  tagName: 'section',

  initialize: function (options) {
    this.discussions = options.discussions;
    this.project = options.project;
    this.project.fetch();
    this.$el.attr("class", "discussions-index");
    this.listenTo(this.project, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      project: this.project
    });
    this.$el.html(content);
    //remove all Discussions before we add them again
    this.removeAllDiscussions();
    //add a Discussion subview for each Discussion
    this.discussions.each(this.addDiscussion.bind(this));
    return this;
  },

  removeAllDiscussions: function () {
    var subviews = this.subviews('.discussions');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.discussions'));
  },

  addDiscussion: function (discussion) {
    var discussionView = new SpaceCamp.Views.DiscussionSummary({
      model: discussion,
      collection: this.discussions,
      project: this.project
    });
    this.addSubview(".discussions", discussionView);
  }
});
