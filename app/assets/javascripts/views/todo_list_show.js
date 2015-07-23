SpaceCamp.Views.ToDoListShow = Backbone.CompositeView.extend({
  template: JST['todo_lists/show'],

  tagName: 'article',

  initialize: function (options) {
    this.project = options.project;
    this.collaborators = options.collaborators;
    this.$el.attr("class", "todo-list group");
    this.listenTo(this.model.toDoItems(), "update add", this.render);
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    this.removeAllItems();
    this.model.toDoItems().each(this.addToDoItem.bind(this));
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
      collection: this.model.toDoItems(),
      collaborators: this.collaborators
    });
    this.addSubview(".todo-items", itemView);
  },

  addCreateToDoItem: function () {
    var toDoItem = new SpaceCamp.Models.ToDoItem();
    var createToDoItemForm = new SpaceCamp.Views.ToDoItemForm({
      toDoList: this.model,
      collection: this.model.toDoItems(),
      model: toDoItem,
      collaborators: this.collaborators,
      project: this.project
    });
    this.addSubview(".todo-items", createToDoItemForm);
  }
});
