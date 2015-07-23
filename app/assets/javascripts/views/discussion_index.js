SpaceCamp.Views.DiscussionsIndex = Backbone.CompositeView.extend({
  template: JST['discussions/index'],

  tagName: 'table',

  initialize: function (options) {
    this.discussions = options.discussions;
    this.project = options.project;
    this.$el.attr("class", "discussions");
  }
});
