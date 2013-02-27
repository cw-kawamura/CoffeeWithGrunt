(function() {
  var Util;

  Util = (function() {

    function Util() {}

    Util.alert = function(message, title) {
      if (!title) {
        title = '';
      }
      return Ti.UI.createAlertDialog({
        message: message,
        title: title
      }).show();
    };

    return Util;

  })();

  module.exports = Util;

}).call(this);
