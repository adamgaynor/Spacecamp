SpaceCamp.Models.Project = Backbone.Model.extend({
  urlRoot: '/api/projects',

  toDoLists: function () {
    if (this._lists) return this._lists;
    this._lists = new SpaceCamp.Collections.ToDoLists([], { project: this });
    return this._lists;
  },

  parse: function (response) {
    if (response.toDoLists) {
      this.toDoLists().set(response.toDoLists, { parse: true });
      delete response.toDoLists;
    }

    return response;
  }
});
