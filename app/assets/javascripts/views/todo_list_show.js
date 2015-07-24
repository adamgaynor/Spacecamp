SpaceCamp.Views.ToDoListShow = Backbone.CompositeView.extend(
  //_.extend({}, SpaceCamp.Mixins.Orderable,
  {
  template: JST['todo_lists/show'],

  tagName: 'article',

  className: 'todo-list group',



  initialize: function (options) {
    this.project = options.project;
    this.collaborators = options.collaborators;
    // this.$el.attr("class", "todo-list group");
    this.listenTo(this.model.toDoItems(), "update add", this.render);
  },

  render: function () {
    var content = this.template({ list: this.model });
    //var sortableId = "#sortable" + this.model.id
    this.$el.html(content);

    this.removeAllForms();
    this.addEditToDoList();

    this.removeAllItems();
    this.model.toDoItems().each(this.addToDoItem.bind(this));
    this.addCreateToDoItem();
    this.attachSubviews();

    //this.$(sortableId).sortable();
    return this;
  },

  removeAllForms: function () {
    var subviews = this.subviews('.todo-list-edit-form');
    var views = subviews.clone();
    views.forEach(this.removeSubview.bind(this, '.todo-list-edit-form'));
  },

  addEditToDoList: function () {
    var toDoList = this.model;
    var createToDoListEditForm = new SpaceCamp.Views.ToDoListEditForm({
      model: toDoItem
    });
    this.addSubview(".todo-list-edit-form", createToDoListEditForm);
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

  // orderOptions: {
  //   modelElement: '.todo-item',
  //   modelName: 'item',
  //   subviewContainer: '.todo-items'
  // },
  //
  // events: {
  //   'sortreceive': 'receiveItem',
  //   'sortremove': 'removeItem',
  //   'sortstop': 'saveItems',
  //   'sortupdate': 'updateItem'
  // },
  //
  // updateItem: function (event, ui) {
  //   var $itemDisplay = ui.item;
  //   var itemId = $itemDisplay.data('item-id');
  //   var newOrder = $itemDisplay.index();
  //
  //   var itemClone = new SpaceCamp.Models.ToDoItem({
  //     id: itemId,
  //     to_do_list_id: this.model.id,
  //     order: newOrder
  //   });
  //
  //   itemClone.save();
  //   this.collection.add(itemClone, { silent: true });
  //   this.saveItems(event);
  // },
  //
  // receiveItem: function (event, ui) {
  //   var $itemDisplay = ui.item;
  //   var itemId = $itemDisplay.data('item-id');
  //   var newOrder = $itemDisplay.index();
  //
  //   var itemClone = new SpaceCamp.Models.ToDoItem({
  //     id: itemId,
  //     to_do_list_id: this.model.id,
  //     order: newOrder
  //   });
  //
  //   itemClone.save();
  //   this.collection.add(itemClone, { silent: true });
  //   this.saveItems(event);
  // },
  //
  // removeItem: function (event, ui) {
  //
  // },
  //
  // saveItems: function (event, ui) {
  //
  // },
});
//);
