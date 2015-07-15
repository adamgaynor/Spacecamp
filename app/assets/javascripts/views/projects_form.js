SpaceCamp.Views.ProjectsForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: "form",

  events: {
    'click .new-project-button': 'submit'
  },

  initialize: function (options) {
    this.project = options.project;
    this.projects = options.projects;
    //this.listenTo(this.project, "sync", this.render);
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
        this.projects.add(this.project, { merge:true });
        Backbone.history.navigate('', { trigger: true });
      }.bind(this)
    });
  }
});
