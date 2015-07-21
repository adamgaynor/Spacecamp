SpaceCamp.Collections.Collaborations = Backbone.Collection.extend({
  model: SpaceCamp.Models.Collaboration,

  // getOrFetch: function (id) {
  //   var collaborations = this;
  //   var collaboration = this.get(id);
  //   if (collaboration) {
  //     collaboration.fetch();
  //   } else {
  //     collaboration = new SpaceCamp.Models.Collaboration({ id: id });
  //     collaboration.fetch({
  //       success: function () {
  //         collaborations.add(collaboration);
  //       }
  //     });
  //   }
  //   return collaboration;
  // }
});
