/** @jsx React.DOM */

var Fluxxor = require("fluxxor");
var constants = require("../constants.jsx");

var MenuItemStore = Fluxxor.createStore({
	initialize: function () {
		this.menuItems = [];
		this.bindActions(
			constants.ADD_MENU_ITEM, this.onAddMenuItem,
			constants.LOAD_MENU_ITEMS, this.onLoadMenuItems
		);
	},
	onAddMenuItem: function (payload) {
		this.menuItems.push({
			text: payload.text,
			href: payload.href
		});
	},
	onLoadMenuItems: function (payload) {
		var self = this;
		payload.items.forEach(function (item) {
			self.menuItems.push(item);
		});
		this.emit("change");
	},
	getMenuItems: function () {
		return {
			menuItems: this.menuItems
		};
	}
});

module.exports = MenuItemStore;
