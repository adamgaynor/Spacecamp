SpaceCamp.Views.ToDoItemEditForm = Backbone.View.extend({
  template: JST['todo_items/form'],

  tagName: 'li',

  initialize: function (options) {
    this.collaborators = options.collaborators;
    this.listenTo(this.collaborators, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      item: this.model,
      collaborators: this.collaborators
    });
    this.$el.html(content);

    return this;
  }

});
