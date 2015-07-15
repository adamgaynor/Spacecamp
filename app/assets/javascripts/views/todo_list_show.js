SpaceCamp.Views.ToDoListShow = Backbone.View.extend({
  template: JST['todo_lists/show'],

  initialize: function (options) {
    this.list = options.list
  },

  render: function () {
    var content = this.template({ list: this.list });
    this.$el.html(content);
    return this;
  }
});
