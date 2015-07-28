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

  submit: function (event) {
    event.preventDefault();

    var fname = this.$("#fname").val();
    var lname = this.$("#lname").val();
    var avatar = this.$("#avatar")[0].files[0];

    var formData = new FormData();
    formData.append("user[fname]", fname);
    formData.append("user[lname]", lname);
    formData.append("user[avatar]", avatar);

    this.model.saveFormData(formData, {
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }.bind(this)
    });
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
