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
	toggleSidebar: function () {
		// Creiamo l'oggetto js con proprietà
		// sidebarIsOpen negazione di sé stessa.
		// Lo passiamo poi al metodo setState
		// che aggiorna lo stato del componente
		// e scatena il rerendering dello stesso
		var newState = {
			sidebarIsOpen: !this.state.sidebarIsOpen
		};
		this.setState(newState);
		/** versione condensata
		this.setState({
			sidebarIsOpen: !this.state.sidebarIsOpen
		});
		*/
	},
	render: function() {
		var sidebarClass = this.state.sidebarIsOpen ? "open" : "";
		return (
			<div>
				<div id="sidebar" className={sidebarClass}>
					<Sidebar items={this.state.menuItems} />
				</div>
				<div id="panino" className={sidebarClass}>
					<button className="btn btn-default" onClick={this.toggleSidebar}>
						<i className="fa fa-bars"></i>
					</button>
				</div>
				<div id="content">
					<this.props.activeRouteHandler />
				</div>
			</div>
		);
	},
	componentDidMount: function () {
		this.getFlux().actions.loadMenuItems();
	}
});

module.exports = Root;
