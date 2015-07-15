SpaceCamp.Views.ProjectsIndex = Backbone.View.extend({
  template: JST['projects/index'],

  tagName: "ul",

  initialize: function (options) {
    this.projects = options.projects;
    this.listenTo(this.projects, "sync", this.render);
    this.$el.attr("class", "projects-list");
    //this.projects.fetch();
  },

  render: function () {
    var content = this.template({ projects: this.projects });
    this.$el.html(content);

    return this;
  }
})
