
/*
A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
A starting point for tab-based application with multiple top-level windows. 
Requires Titanium Mobile SDK 1.8.0+.

In app.js, we generally take care of a few things:
 - Bootstrap the application with any data we need
 - Check for dependencies like device type, platform version or network connection
 - Require and open our top-level UI component
*/


(function() {

  if (Ti.version < 1.8) {
    alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
  }

  (function() {
    var ApplicationTabGroup, Window, height, isTablet, osname, version, width;
    osname = Ti.Platform.osname;
    version = Ti.Platform.version;
    height = Ti.Platform.displayCaps.platformHeight;
    width = Ti.Platform.displayCaps.platformWidth;
    isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
    if (isTablet) {
      Window = require('ui/tablet/ApplicationWindow');
    } else {
      Window = require('ui/handheld/ApplicationWindow');
    }
    ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
    new ApplicationTabGroup(Window).open();
  })();

}).call(this);