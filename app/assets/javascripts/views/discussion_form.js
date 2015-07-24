SpaceCamp.Views.DiscussionForm = Backbone.View.extend({
  template: JST['discussions/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
  },

  initialize: function (options) {
    this.project = options.project;
    this.listenTo(this.project, "sync", this.render);
    this.$el.attr("class", "discussion-form")
  },

  render: function () {
    var content = this.template({
      discussion: this.model,
      project: this.project
    });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.set(formData);
		this.model.set("project_id", this.project.id);
    this.model.save(formData, {
      success: function () {
        var url = '#projects/' + this.project.id + '/discussions/' + this.model.id;
        this.collection.add(this.model, { merge: true });
				Backbone.history.navigate(url, { trigger: true });
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  }
});
