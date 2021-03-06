SpaceCamp.Mixins.ElapsedTime = {
  // processes the last date the comment was updated, and gives the
  // time ago in a readable format
  getElapsedTime: function (date) {
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - date) / 1000);

    if (delta < 60) { return 'less than a minute ago'; }
    else if (delta < 120) { return 'a minute ago'; }
    else if (delta < (60 * 60)) { return (parseInt(delta / 60)).toString() + ' minutes ago'; }
    else if (delta < (120 * 60)) { return 'an hour ago'; }
    else if (delta < (24 * 60 * 60)) { return '' + (parseInt(delta / 3600)).toString() + ' hours ago'; }
    else if (delta < (2 * 24 * 60 * 60)) { return '1 day ago'; }
    else if (delta < (365 * 24 * 60 * 60)) {
      return this.getMonthAndDay(date);
    } else {
      return this.getMonthAndDay(date, true);
    }
  },

  getMonthAndDay: function (date, includeYear) {
    var dateString = date.toDateString();
    dateString = dateString.split(" ");
    if (includeYear) {
      dateString = dateString.splice(1,3);
    } else {
      dateString = dateString.splice(1,2);
    }
    return dateString.join(" ");
  }
};
