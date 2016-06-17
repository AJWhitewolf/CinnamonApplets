const Applet = imports.ui.applet;
const Util = imports.misc.util;
const PopupMenu = imports.ui.popupMenu;
const St = imports.ui.St;
const Main = imports.ui.main;

function MyApplet(orientation, panel_height, instance_id) {
  this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
  __proto__: Applet.IconApplet.prototype,

  _init: function(orientation, panel_height, instance_id){
    Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

    this.set_applet_icon_name("force-exit");
    this.set_applet_tooltip(_("Open GitRemote Menu"));
  },

  on_applet_clicked: function() {

  }
};

function main(metadata, orientation, panel_height, instance_id){
  return new MyApplet(orientation, panel_height, instance_id);
}
