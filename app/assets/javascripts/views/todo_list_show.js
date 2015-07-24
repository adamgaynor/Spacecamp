SpaceCamp.Views.ToDoListShow = Backbone.CompositeView.extend(
  _.extend({}, SpaceCamp.Mixins.Orderable, {
    template: JST['todo_lists/show'],

    tagName: 'article',

    className: 'todo-list group',

    events: {
      'sortreceive': 'receiveCard',
      'sortremove': 'removeCard',
      'sortstop': 'saveCards'
    },

    receiveItem: function (event, ui) {
      var $itemDisplay = ui.item;
      var itemId = $itemDisplay.data('item-id');

    },

    removeItem: function (event, ui) {

    },

    saveItems: function (event, ui) {

    },

    initialize: function (options) {
      this.project = options.project;
      this.collaborators = options.collaborators;
      // this.$el.attr("class", "todo-list group");
      this.listenTo(this.model.toDoItems(), "update add", this.render);
    },

    render: function () {
      var content = this.template({ list: this.model });
      var sortableId = "#sortable" + this.model.id
      this.$el.html(content);

      this.removeAllItems();
      this.model.toDoItems().each(this.addToDoItem.bind(this));
      this.addCreateToDoItem();
      this.attachSubviews();

      this.$(sortableId).sortable();
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
  })
);
