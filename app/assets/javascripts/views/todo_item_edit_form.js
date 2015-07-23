SpaceCamp.Views.ToDoItemEditForm = Backbone.View.extend({
  template: JST['todo_items/form'],

  tagName: 'article',

  initialize: function (options) {
    this.collaborators = options.collaborators;
    this.collaborator = options.collaborator;
    this.listenTo(this.collaborators, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      item: this.model,
      collaborators: this.collaborators,
      currentCollaborator: this.collaborator
    });
    this.$el.html(content);

    return this;
  }

});
