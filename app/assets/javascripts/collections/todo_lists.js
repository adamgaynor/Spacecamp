SpaceCamp.Collections.ToDoLists = Backbone.Collection.extend({
  url: function () {
    return this.project.url() + "/todo_lists";
  },

  model: SpaceCamp.Models.ToDoList

});
