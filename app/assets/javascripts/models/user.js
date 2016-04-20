SpaceCamp.Models.User = Backbone.Model.extend({

  toJSON: function() {
    return { user: _.clone( this.attributes ) };
  }

});


SpaceCamp.Models.CurrentUser = SpaceCamp.Models.User.extend({
  url: '/api/users/1',
  postUrl: function (id) {
    return '/api/users/' + this.id;
  },

  saveFormData: function (formData, options) {
    var method = "PUT";
    var model = this;

    $.ajax({
      url: _.result(model, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        model.set(model.parse(response));
        model.trigger('sync', model, response, options);

        // refresh the root page
        window.location.reload();
        Backbone.history.navigate('', true);
      },
      error: function (response) {
        options.error && options.error(model, response, options);
      }
    });
  }
});
