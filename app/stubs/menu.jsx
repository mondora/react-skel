/** @jsx React.DOM */

var items = [
	{
		text: "Link 0",
		href: "http://localhost:8080/link0"
	},
	{
		text: "Link 1",
		href: "http://localhost:8080/link1"
	},
	{
		text: "Link 2",
		href: "http://localhost:8080/link2"
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
