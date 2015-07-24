SpaceCamp.Views.ToDoListForm = Backbone.View.extend({
  template: JST['todo_lists/form'],

  tagName: 'form',

  events: {
    'click .submit': 'submit',
    'click .cancel': 'cancel'
  },

  initialize: function (options) {
    this.project = options.project;
    this.$el.attr("class", "todo-list-form")
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.set(formData);
    formData.project_id = this.project.id;
    this.model.save(formData, {
      success: function () {
        this.model.fetch();
        this.collection.add(this.model);
      }.bind(this)
    });
  },

  cancel: function (event) {
    event.preventDefault();
    this.$el.attr("class", "todo-list-form");
  }
});
