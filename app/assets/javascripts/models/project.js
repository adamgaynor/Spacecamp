SpaceCamp.Models.Project = Backbone.Model.extend({
  urlRoot: '/api/projects',

  toDoLists: function () {
    if (this._lists) return this._lists;
    this._lists = new SpaceCamp.Collections.ToDoLists([], { project: this });
    return this._lists;
  },

  discussions: function () {
    if (this._discussions) return this._discussions;
    this._discussions = new SpaceCamp.Collections.Discussions([], { project: this });
    return this._discussions
  },

  parse: function (response) {
    if (response.toDoLists) {
      this.toDoLists().set(response.toDoLists, { parse: true });
      delete response.toDoLists;
    }

    if (response.discussions) {
      this.discussions().set(response.discussions);
      delete response.discussions;
    }

    return response;
  }
});
