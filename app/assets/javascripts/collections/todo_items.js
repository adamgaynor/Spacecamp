SpaceCamp.Collections.ToDoItems = Backbone.Collection.extend({
  url: function () {
    return this.toDoList.url() + "/todo_lists";
  },

  model: SpaceCamp.Models.ToDoItem
});
