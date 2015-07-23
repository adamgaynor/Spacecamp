SpaceCamp.Views.ToDoItemShow = Backbone.View.extend({
  template: JST['todo_items/show'],

  events: {
    'click .completion-box': 'completeTask',
    'mouseover': 'showEditButton'
  },

  tagName: 'li',

  initialize: function (options) {
    this.collaborators = options.collaborators;
    this.collaborator = this.collaborators.get(this.model.get("assigned_user_id"));
    this.$el.attr("class", "todo-item");
    this.listenTo(this.model, "change sync", this.render)
  },

  render: function () {
    var content = this.template({
      item: this.model,
      collaborator: this.collaborator
    });
    this.$el.html(content);

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

  showEditButton: function () {
    var editButton = this.$el.find(".show-item-edit-form") 
  }
});
