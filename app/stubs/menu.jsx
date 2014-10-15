/** @jsx React.DOM */

var items = [
	{
		text: "Menu",
		icon: "fa-home",
		href: "user",
		submenu: [
			{
				text: "subelement0",
				href: "user"
			},
			{
				text: "subelement1",
				href: "user"
			}
		]
	},
	{
		text: "Home",
		icon: "fa-home",
		href: "home"
	},
	{
		text: "User",
		icon: "fa-user",
		href: "user"
	}
];

var Menu = {
	getItems: function (cb) {
		setTimeout(function () {
			cb(items);
		}, 1000);
	}
};

module.exports = Menu;
