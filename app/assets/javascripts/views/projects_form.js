SpaceCamp.Views.ProjectsForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: "form",

  events: {
    'click .new-project-button': 'submit'
  },

  initialize: function (options) {
    this.router = options.router;
    this.project = options.project;
    this.projects = options.projects;
    this.$el.attr("class", "project-form");
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.project.save(formData, {
      success: function () {
        this.projects.add(this.project, { merge: true });

        this.router.navigate('#projects/' + this.project.id, { trigger:true });
        //Backbone.history.navigate('#projects/' + this.project.id, { trigger: true });
      }.bind(this)
    });
  }
});
