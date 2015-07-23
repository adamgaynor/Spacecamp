SpaceCamp.Views.ToDoItemEditForm = Backbone.View.extend({
  template: JST['todo_items/form'],

  tagName: 'article',

  events: {
    'click button': 'submit',
    'click .cancel': 'hideForm'
  },

  initialize: function (options) {
    this.collaborators = options.collaborators;
    this.collaborator = options.collaborator;
    this.listenTo(this.collaborators, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      item: this.model,
      collaborators: this.collaborators,
      currentCollaborator: this.collaborator
    });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.find("form").serializeJSON();
    this.model.set(formData);
    this.model.save(formData, {
      success: function () {
        this.model.fetch();
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  },

  hideForm: function (event) {
    event.preventDefault();
    var $form = this.$el.find(".todo-item-form");
    $form.removeClass("show");
  }

});
