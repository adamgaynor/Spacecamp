SpaceCamp.Models.Discussion = Backbone.Model.extend({
	url: function () {
    var url = "/api/discussions/";
    if (this.id) {
      url = url + this.id;
    }
    return url;
  }
});
