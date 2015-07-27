SpaceCamp.Views.UserEditForm = Backbone.View.extend({
  template: JST['users/form'],

  tagName: 'form',

  // initialize: function (options) {
  //
  // },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

});
