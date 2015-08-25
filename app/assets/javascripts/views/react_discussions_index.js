
SpaceCamp.Views.React_DiscussionsIndex = Backbone.View.extend({



  template: '<div class="widget-container"></div>',

  tagName: 'section',

  initialize: function (options) {
    this.url = options.url;
    this.$el.attr("class", "discussions-index");
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }

});
