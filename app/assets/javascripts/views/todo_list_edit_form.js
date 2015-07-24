SpaceCamp.Views.ToDoListEditForm = Backbone.View.extend({
  template: JST["todo_lists/form"],

  tagName: 'form',

  events: {
    'click button': 'submit',
    'click .cancel': 'hideForm'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      list: this.model
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
    var $form = this.$el.find(".todo-list-edit-form");
    $form.removeClass("show");
  }

});
