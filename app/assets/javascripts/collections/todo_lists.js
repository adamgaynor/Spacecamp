SpaceCamp.Collections.ToDoLists = Backbone.Collection.extend({
  url: function () {
    return this.project.url() + "/lists";
  }

});
