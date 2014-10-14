/** @jxs React.DOM */

var AlarmStore    = require("./alarm.jsx");
var MenuItemStore = require("./menu-item.jsx");

module.exports = {
	AlarmStore:    new AlarmStore(),
	MenuItemStore: new MenuItemStore()
};
