SpaceCamp.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.users = options.users;
    this.$el.attr("class", "users-list");
    this.listenTo(this.users, "sync", this.render);
  },

  render: function () {
    console.log(this.users);
    var content = this.template({
      users: this.users
    });
    this.$el.html(content);

    return this;
  }
});
