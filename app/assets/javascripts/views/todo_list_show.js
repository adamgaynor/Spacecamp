SpaceCamp.Views.ToDoListShow = Backbone.CompositeView.extend({
  template: JST['todo_lists/show'],

  tagName: 'li',

  initialize: function (options) {
    this.$el.attr("class", "todo-list group");
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    this.removeAllItems();
    this.toDoItems.each(this.addToDoItem.bind(this));
    this.addCreateToDoItem();
    this.attachSubviews();

    return this;
  },

  removeAllItems: function () {
    var subviews = this.subviews('.todo-items');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.todo-items'));
  },

  addToDoItem: function (toDoItem) {
    var itemView = new SpaceCamp.Views.ToDoItemShow({
      model: toDoItem,
      collection: this.collection
    });
    this.addSubview(".todo-items", itemView);
  },

  addCreateToDoItem: function () {
    var toDoItem = new SpaceCamp.Models.ToDoItem();
    var createToDoItemForm = new SpaceCamp.Views.ToDoItemForm({
      toDoList: this.model,
      collection: this.collection,
      model: toDoItem
    });
    this.addSubview(".todo-lists", createToDoItemForm);
  }
});
