SpaceCamp.Views.ToDoItemForm = Backbone.View.extend({
  template: JST['todo_items/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
  },

  initialize: function (options) {
    this.toDoList = options.toDoList;
    this.$el.attr("class", "todo-item-form")
  },

  render: function () {
    var content = this.template({
      item: this.model,
      toDoList: this.toDoList
    });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.set(formData);
    formData.to_do_list_id = this.toDoList.id;
    this.model.save(formData, {
      success: function () {
        this.collection.add(this.model);
      }.bind(this)
    });
  }
});
