SpaceCamp.Views.ToDoItemEditForm = Backbone.View.extend({
  template: JST["todo_lists/form"],

  tagName: 'article',

  events: {
    'click button': 'submit',
    'click .cancel': 'hideForm'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  }
});
