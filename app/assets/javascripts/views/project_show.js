SpaceCamp.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");

  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);

    return this;
  }
});
