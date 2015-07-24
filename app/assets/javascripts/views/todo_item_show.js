SpaceCamp.Views.ToDoItemShow = Backbone.CompositeView.extend({
  template: JST['todo_items/show'],

  events: {
    'click .completion-box': 'completeTask',
    'mouseover .item-info': 'showEditButton',
    //'mouseleave': 'hideEditButton',
    'click .show-item-edit-form': 'showEditForm'
  },

  tagName: 'li',

  initialize: function (options) {
    this.collaborators = options.collaborators;
    this.collaborator = this.collaborators.get(this.model.get("assigned_user_id"));
    this.$el.attr("class", "todo-item");
    this.listenTo(this.model, "change sync", this.render);
  },

  render: function () {
    this.collaborator = this.collaborators.get(this.model.get("assigned_user_id"));
    var content = this.template({
      item: this.model,
      collaborator: this.collaborator
    });
    this.$el.html(content);
    this.removeAllForms();
    this.addEditToDoItem();
    this.attachSubviews();

    return this;
  },

  completeTask: function (event) {
    event.preventDefault();
    var isComplete = this.model.get("completed");
    if (isComplete) {
      this.model.set("completed", false);
    } else {
      this.model.set("completed", true);
    }
    this.model.save({}, {
      success: function () {
        this.render();
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  },

  showEditForm: function (event) {
    $(event.currentTarget).removeClass("show");
    var $target = $(event.delegateTarget);
    var $form = $target.find(".todo-item-form");
    $form.addClass("show");
  },

  removeAllForms: function () {
    var subviews = this.subviews('.todo-item-edit-form');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.todo-item-edit-form'));
  },

  addEditToDoItem: function () {
    var toDoItem = this.model;
    var createToDoItemEditForm = new SpaceCamp.Views.ToDoItemEditForm({
      model: toDoItem,
      collaborators: this.collaborators,
      collaborator: toDoItem.get("assigned_user_id")
    });
    this.addSubview(".todo-item-edit-form", createToDoItemEditForm);
  },

  showEditButton: function (event) {
    var $target = $(event.currentTarget);
    var $itemList = $target.parentsUntil(".todo-lists")
      .parent()
      .first()
      .find(".show-item-edit-form");
    this._hideAllEditButtons($itemList);
    $itemList = $target.parentsUntil(".todo-lists")
      .parent()
      .first()
      .find(".show-list-edit-form");
    this._hideAllEditButtons($itemList);
    var editButton = this.$el.find(".show-item-edit-form");
    editButton.addClass("show");
  },

  // hideEditButton: function (event) {
  //   var $target = $(event.currentTarget);
  //   var $itemList = $target.parentsUntil(".todo-lists")
  //     .parent()
  //     .first()
  //     .find(".show-item-edit-form");    window.setTimeout(this._hideAllEditButtons.bind(this, $itemList), 1000);
  // },

  _hideAllEditButtons: function (itemList) {
    itemList.each(function (index) {
      $(itemList.get(index)).removeClass("show");
    });
  }
});
