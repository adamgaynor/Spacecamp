SpaceCamp.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");
    this.toDoLists = options.toDoLists
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);
    //add a ToDoList subview for each ToDoList
    this.toDoLists.each(this.addToDoList.bind(this));
    this.attachSubviews();
    return this;
  },

  addToDoList: function (toDoList) {
    var listView = new SpaceCamp.Views.ToDoListShowView({
      toDoList: toDoList,
      toDoLists: this.toDoLists
    });
    this.addSubview(".todo-lists", listView);
  },

  addCreateToDoList: function () {
    var toDoList = new SpaceCamp.Models.ToDoList();
    var createToDoListForm = new SpaceCamp.Views.ToDoListForm({
      project: this.project,
      collection: this.toDoLists,
      model: list
    });
    this.addSubview(".todo-lists", createToDoListForm);
  }
});
