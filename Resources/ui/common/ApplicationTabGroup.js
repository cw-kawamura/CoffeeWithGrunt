(function() {
  var ApplicationTabGroup;

  ApplicationTabGroup = function(Window) {
    var self, tab1, tab2, win1, win2;
    self = Ti.UI.createTabGroup();
    win1 = new Window(L('home'));
    win2 = new Window(L('settings'));
    tab1 = Ti.UI.createTab({
      title: L('home'),
      icon: '/images/KS_nav_ui.png',
      window: win1
    });
    win1.containingTab = tab1;
    tab2 = Ti.UI.createTab({
      title: L('settings'),
      icon: '/images/KS_nav_views.png',
      window: win2
    });
    win2.containingTab = tab2;
    self.addTab(tab1);
    self.addTab(tab2);
    return self;
  };

  module.exports = ApplicationTabGroup;

}).call(this);
