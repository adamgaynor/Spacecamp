SpaceCamp.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'projectsIndex'
  },

  initialize: function (options) {
    this.projects = options.projects;
    this.$rootEl = options.$rootEl;
  },

  projectsIndex: function () {
    var indexView = new SpaceCamp.Views.ProjectsIndex({

    });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
