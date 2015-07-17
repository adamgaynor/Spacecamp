SpaceCamp.Models.Discussion = Backbone.Model.extend({
	url: function () {
    var url = "/api/discussions/";
    if (this.id) {
      url = url + this.id;
    }
    return url;
  },

	comments: function () {
		if (this._comments) return this._comments;
    this._comments = new SpaceCamp.Collections.Comments([], { discussion: this });
    return this._comments
	},

  toJSON: function() {
    return {
      discussion: _.clone(this.attributes)
    }
  },

	parse: function (response) {
		if (response.comments) {
      this.comments().set(response.comments);
      delete response.comments;
    }

    return response;
	}
});
