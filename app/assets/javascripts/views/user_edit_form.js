SpaceCamp.Views.UserEditForm = Backbone.View.extend({
  template: JST['users/form'],

  initialize: function (options) {
    
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);

    return this;
  },

});
