SpaceCamp.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  tagName: 'section',

  events: {
    'click .todo-list-form-show': 'showTodoListForm',
    'click .delete-project': 'deleteProject'
  },

  initialize: function (options) {
    this.project = options.project;
    this.listenToOnce(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");
    this.toDoLists = options.toDoLists;
    this.discussions = options.discussions;
    //invoking collaborators may be unecessary
    this.collaborators = options.collaborators;
    this.listenTo(this.toDoLists, "add", this.render);
  },

  render: function () {
    var content = this.template({
      project: this.project,
      extraDiscussionCount: this.project.discussions().length - 5
    });
    this.$el.html(content);
    //remove all Discussions before we add them again
    this.removeAllDiscussions();
    //take the most recent five discussions
    var recentDiscussions = this.discussions.slice(0,5);
    //add a Discussion summary subview for each of the five
    recentDiscussions.forEach(this.addDiscussion.bind(this));
    //remove all ToDOLists before we add them again
    this.removeAllLists();
    //add a form to create a new ToDoList
    this.addCreateToDoList();
    //add a ToDoList subview for each ToDoList
    this.toDoLists.each(this.addToDoList.bind(this));
    this.attachSubviews();
    return this;
  },

  //functions dealing with Discussion subviews
  removeAllDiscussions: function () {
    var subviews = this.subviews('.discussions');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.discussions'));
  },

  addDiscussion: function (discussion) {
    var discussionView = new SpaceCamp.Views.DiscussionSummary({
      model: discussion,
      collection: this.discussions,
      project: this.project
    });
    this.addSubview(".discussions", discussionView);
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
  },

  deleteProject: function (event) {
    event.preventDefault();
    if (confirm("Permanently delete this project?")) {
      this.project.destroy({
        success: function () {
          Backbone.history.navigate('', { trigger: true });
        }.bind(this)
      });
    }
  }
});
