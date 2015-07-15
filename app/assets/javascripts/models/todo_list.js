SpaceCamp.Models.ToDoList = Backbone.Model.extend({
  url: function () {
    var url = "/api/todo_lists/";
    if (this.id) {
      url = url + this.id;
    }
    return url;
  }
});
