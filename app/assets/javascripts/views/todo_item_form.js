SpaceCamp.Views.ToDoItemForm = Backbone.View.extend({
  template: JST['todo_items/form'],

  tagName: 'li',

  events: {
    'click button': 'submit',
    'click .todo-item-form-show': 'showForm',
    'click .cancel': 'hideForm'
  },

  initialize: function (options) {
    this.toDoList = options.toDoList;
    //this.project = options.project;
    this.collaborators = options.collaborators;
    this.listenTo(this.collaborators, 'sync', this.render);
    //this.$el.attr("class", "todo-item-form")
  },

  render: function () {
    var content = this.template({
      item: this.model,
      toDoList: this.toDoList,
      collaborators: this.collaborators
    });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.find("form").serializeJSON();
    this.model.set(formData);
    this.model.set("to_do_list_id", this.toDoList.id);
    this.model.set("order", this.collection.length);
    this.model.save(formData, {
      success: function () {
        this.collection.add(this.model);
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  },

  showForm: function (event) {
    event.preventDefault();
    var $form = this.$el.find(".todo-item-form");
    $form.attr("class", "todo-item-form show");

    var $link = this.$el.find(".todo-item-form-show");
    $link.attr("class", "todo-item-form-show hidden");
  },

  hideForm: function (event) {
    event.preventDefault();
    var $form = this.$el.find(".todo-item-form");
    $form.attr("class", "todo-item-form");

    var $link = this.$el.find(".todo-item-form-show");
    $link.attr("class", "todo-item-form-show");
  }
});
