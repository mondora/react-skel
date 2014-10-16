/** @jsx React.DOM */

var constants = require("../constants.jsx");

var addMenuItem = function (menuItem) {
	this.dispatch(constants.ADD_MENU_ITEM, menuItem);
};

var loadMenuItems = function () {
	var self = this;
	var MenuAPI = require("../stubs/menu.jsx");
	MenuAPI.getItems(function (items) {
		//console.log(items);
		self.dispatch(constants.LOAD_MENU_ITEMS, {items: items});
	});
};

module.exports = {
	addMenuItem: addMenuItem,
	loadMenuItems: loadMenuItems
};
