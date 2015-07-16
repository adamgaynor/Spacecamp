SpaceCamp.Views.ToDoItemShow = Backbone.View.extend({
  template: JST['todo_items/show'],

  tagName: 'li',

  initialize: function (options) {
    this.$el.attr("class", "todo-item");
  },

  render: function () {
    var content = this.template({
      list_item: this.model
    });
    this.$el.html(content);

    return this;
  }
});
