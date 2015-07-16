SpaceCamp.Collections.ToDoItems = Backbone.Collection.extend({
  url: function () {
    return this.toDoList.url() + "/todo_lists";
  },

  model: SpaceCamp.Models.ToDoItem,

  getOrFetch: function (id) {
    var toDoItems = this;
    var toDoItem = this.get(id);
    if (toDoItem) {
      toDoItem.fetch();
    } else {
      toDoItem = new SpaceCamp.Models.ToDoItem({ id: id });
      toDoItem.fetch({
        success: function () {
          toDoItems.add(toDoItem);
        }
      });
    }
    return toDoItem;
  }
});
