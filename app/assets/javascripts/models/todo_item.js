SpaceCamp.Models.ToDoItem = Backbone.Model.extend({
  url: function () {
    var url = "/api/todo_items/";
    if (this.id) {
      url = url + this.id;
    }
    return url;
  }
});
