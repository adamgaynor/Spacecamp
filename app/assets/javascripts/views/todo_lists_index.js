SpaceCamp.Views.ToDoListsIndex = Backbone.CompositeView.extend({
  template: JST['todo_lists/index'],

  tagName: 'section',

  events: {
    'click .todo-list-form-show': 'showTodoListForm'
  },

  initialize: function (options) {
    this.toDoLists = options.toDoLists;
    this.project = options.project;
    this.collaborators = options.collaborators;
    this.project.fetch();
    this.$el.attr("class", "todo-lists-index");
    this.listenTo(this.project, "sync", this.render);
    this.listenTo(this.toDoLists, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      project: this.project
    });
    this.$el.html(content);
    //remove all ToDOLists before we add them again
    this.removeAllLists();
    //add a form to create a new ToDoList
    this.addCreateToDoList();
    //add a ToDoList subview for each ToDoList
    this.toDoLists.each(this.addToDoList.bind(this));
    this.attachSubviews();

    return this;
  },

  //functions dealing with ToDoList subviews
  removeAllLists: function () {
    var subviews = this.subviews('.todo-lists');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.todo-lists'));
  },

  addToDoList: function (toDoList) {
    var listView = new SpaceCamp.Views.ToDoListShow({
      model: toDoList,
      collection: this.toDoLists,
      collaborators: this.collaborators,
      project: this.project
    });
    this.addSubview(".todo-lists", listView);
  },

  addCreateToDoList: function () {
    var toDoList = new SpaceCamp.Models.ToDoList();
    var createToDoListForm = new SpaceCamp.Views.ToDoListForm({
      project: this.project,
      collection: this.toDoLists,
      model: toDoList
    });
    this.addSubview(".todo-lists", createToDoListForm);
  },

  showTodoListForm: function (event) {
    event.preventDefault();
    var todoList = this.$el.find('.todo-list-form');
    todoList.attr("class", "todo-list-form show");
  }
});
