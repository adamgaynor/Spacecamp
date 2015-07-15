SpaceCamp.Views.ProjectsForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: "form",

  initialize: function (options) {
    this.project = options.project;
    //this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "project-form");
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);

    return this;
  }
})
