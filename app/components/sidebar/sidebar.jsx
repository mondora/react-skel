/** @jsx React.DOM */

var React = require("react");
var CollapsableMixin = require("react-bootstrap").CollapsableMixin;
var Link = require("react-router").Link;

var SidebarElement = React.createClass({
	getInitialState: function () {
		return {
			elementIsCollapsed: true
		};
	},
	toggleCollapse: function () {
		this.setState({
			elementIsCollapsed: !this.state.elementIsCollapsed
		});
	},
	render: function () {
		var iconClass = "fa " + this.props.item.icon;
		if (this.props.item.submenu) {
			var subelements = this.props.item.submenu.map(function (subelement) {
				return (
					<Link to={subelement.href}>
						<li>
							{subelement.text}
						</li>
					</Link>
				);
			});
			var ulClass = this.state.elementIsCollapsed ? "collapse" : "collapse in";
			var chevronClass = this.state.elementIsCollapsed ? "fa fa-chevron-left" : "fa fa-chevron-down";
			return (
				<li>
					<span className="app-fixed-width-30">
						<i className={iconClass}></i>
					</span>
					<span onClick={this.toggleCollapse}>
						{this.props.item.text}
					</span>
					<span className="app-fixed-width-30 pull-right">
						<i className={chevronClass}></i>
					</span>
					<ul className={ulClass}>
						{subelements}
					</ul>
				</li>
			);
		} else {
			return (
				<Link to={this.props.item.href}>
					<li onClick={this.toggleCollapse}>
						<span className="app-fixed-width-30">
							<i className={iconClass}></i>
						</span>
						<span>
							{this.props.item.text}
						</span>
					</li>
				</Link>
			);
		}
	}
});

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
					<SidebarElement item={item} />
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
