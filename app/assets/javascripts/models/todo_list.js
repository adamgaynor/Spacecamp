SpaceCamp.Models.ToDoList = Backbone.Model.extend({
  rootUrl: function () {
    return this.project.url() + "/lists";
  }
})
