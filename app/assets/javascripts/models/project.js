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

  collaborators: function () {
    if (this._collaborators) return this._collaborators;
    this._collaborators = new SpaceCamp.Collections.Collaborators([], { project: this });
    return this._collaborators;
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

    if (response.collaborators) {
      this.collaborators().set(response.collaborators);
      delete response.collaborators;
    }

    return response;
  }
});
