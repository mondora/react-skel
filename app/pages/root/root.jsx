/** @jsx React.DOM */

var React   = require("react");
var Sidebar = require("../../components/sidebar/sidebar.jsx");

var Fluxxor         = require("fluxxor");
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Root = React.createClass({
	mixins: [
		FluxMixin,
		StoreWatchMixin("AlarmStore", "MenuItemStore")
	],
	getStateFromFlux: function () {
		var flux = this.getFlux();
		return {
			alarms: flux.store("AlarmStore").getAlarms().alarms,
			menuItems: flux.store("MenuItemStore").getMenuItems().menuItems
		};
	},
	render: function() {
		return (
			<div>
				<div id="sidebar">
					<Sidebar items={this.state.menuItems} />
				</div>
				<div id="content">
					<this.props.activeRouteHandler/>
				</div>
			</div>
		);
	},
	componentDidMount: function () {
		this.getFlux().actions.loadMenuItems();
	}
});

module.exports = Root;
