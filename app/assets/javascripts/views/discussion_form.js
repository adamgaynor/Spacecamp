SpaceCamp.Views.DiscussionForm = Backbone.View.extend({
  template: JST['discussions/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
  },

  initialize: function (options) {
    this.project = options.project;
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
    this.model.save(formData, {
      success: function () {
        this.collection.add(this.model, { merge: true });
				Backbone.history.navigate('#projects/' + this.project.id, { trigger: true });
      }.bind(this),
      error: function (model, jqxhr) {
        //debugger;
      }
    });
  }
});
