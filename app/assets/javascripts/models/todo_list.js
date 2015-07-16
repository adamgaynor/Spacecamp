SpaceCamp.Models.ToDoList = Backbone.Model.extend({
  url: function () {
    var url = "/api/todo_lists/";
    if (this.id) {
      url = url + this.id;
    }
    return url;
  },

  toDoItems: function () {
    if (this._items) return this._items;
    this._items = new SpaceCamp.Collections.ToDoItems([], { toDoList: this });
    return this._items;
  },

  parse: function (response) {
    if (response.toDoItems) {
      this.toDoItems().set(response.toDoItems);
      delete response.toDoItems;
    }

    return response;
  }
});
