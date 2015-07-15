SpaceCamp.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.listenToOnce(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");
    this.toDoLists = options.toDoLists
    this.listenTo(this.toDoLists, "add", this.render);
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);
    this.removeAllLists();
    //add a ToDoList subview for each ToDoList
    this.toDoLists.each(this.addToDoList.bind(this));
    this.addCreateToDoList();
    this.attachSubviews();
    return this;
  },

  removeAllLists: function () {
    var subviews = this.subviews('.todo-lists');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.todo-lists'));
  },

  addToDoList: function (toDoList) {
    var listView = new SpaceCamp.Views.ToDoListShow({
      model: toDoList,
      collection: this.toDoLists
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
  }
});
