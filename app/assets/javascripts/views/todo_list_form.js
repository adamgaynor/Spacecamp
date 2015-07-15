SpaceCamp.Views.ToDoListForm = Backbone.View.extend({
  template: JST['todo_lists/form'],

  tagName: 'article',

  events: {
    'click button': 'submit'
  },

  initialize: function (options) {
    this.project = options.project
  },

  render: function () {
    var content = this.template({
      list: this.model,
      project: this.project
    });
    this.model.set("project_id", this.project.id);
  },

  submit: function (event) {
    event.preventDefault();
    //var formData = $(event.currentTarget).serializeJSON();
  }
});
