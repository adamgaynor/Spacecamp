SpaceCamp.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");

  },

  render: function () {
    var content;
  }
});
