SpaceCamp.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  tagName: 'section',

  initialize: function (options) {
    this.project = options.project;
    this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "project-show group");
    this.toDoLists = options.toDoLists
  },

  render: function () {
    var content = this.template({ project: this.project });
    this.$el.html(content);


    this.attachSubviews();
    return this;
  },

  addToDoList: function (toDoList) {
    var listView = new TrelloClone.Views.ListShowView({
      model: toDoList,
      project: this.project
    });
    this.addSubview(".lists", listView);
  }
});
