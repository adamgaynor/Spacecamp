SpaceCamp.Views.UserEditForm = Backbone.View.extend({
  template: JST['users/form'],

  tagName: 'form',

  className: 'edit-user group',

  events: {
    'click button': 'submit',
    'change #avatar': 'fileInputChange'
  },

  initialize: function (options) {
    this.$el.attr("enctype", "multipart/form-data");
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  fileInputChange: function (event) {
    console.log(event.currentTarget.files[0]);
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      this._updatePreview(reader.result);
    }.bind(this)

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this._updatePreview("");
    }
  },

  _updatePreview: function (src) {
    this.$el.find("#avatar-preview").attr("src", src);
  }
});
