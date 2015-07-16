SpaceCamp.Collections.ToDoItems = Backbone.Collection.extend({
  url: function () {
    return this.todo_list.url() + "/todo_lists";
  },

  model: SpaceCamp.Models.ToDoItem
});
