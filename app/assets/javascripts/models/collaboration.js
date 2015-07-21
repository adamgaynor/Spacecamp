SpaceCamp.Models.Collaboration = Backbone.Model.extend({
  //any attributes given to a model go inside of the attributes of the model
  //(project_id)
  urlRoot: function () {
    if (this.isNew()) {
      return '/api/projects/' + this.get("project_id") + '/collaborations';
    } else {
      return '/api/collaborations';
    }
  }
});
