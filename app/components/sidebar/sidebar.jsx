/** @jsx React.DOM */

var React = require("react");

var Sidebar = React.createClass({
	propTypes: {
		items: React.PropTypes.array
	},
	render: function() {
		var items;
		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items.map(function (item) {
				return (
					<li>
						{item.text}
					</li>
				);
			});
		}
		return (
			<ul>
				{items}
			</ul>
		);
	}
});

module.exports = Sidebar;
