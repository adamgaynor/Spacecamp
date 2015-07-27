SpaceCamp.Views.UserEditForm = Backbone.View.extend({
  template: JST['users/form'],

  tagName: 'form',

  className: 'edit-user group',

  initialize: function (options) {
    this.$el.attr("enctype", "multipart/form-data");
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

});
