SpaceCamp.Views.ToDoListShow = Backbone.CompositeView.extend({
  template: JST['todo_lists/show'],

  tagName: 'li',

  initialize: function (options) {
    this.$el.attr("class", "todo-list group");
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
