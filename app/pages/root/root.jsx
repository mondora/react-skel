/** @jsx React.DOM */

var React   = require("react");
var Sidebar = require("../../components/sidebar/sidebar.jsx");
var Header = require("../../components/header/header.jsx");
var Navbar = require("react-bootstrap").Navbar;

var Fluxxor         = require("fluxxor");
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Root = React.createClass({
	mixins: [
		FluxMixin,
		// Dice alla view di ascoltare gli eventi "change"
		// emessi dagli store che gli attacco nell'elenco
		// sottostante
		StoreWatchMixin(
			"AlarmStore",
			"MenuItemStore"
		)
	],
	getStateFromFlux: function () {
		var flux = this.getFlux();
		return {
			alarmsTable: flux.store("AlarmStore").getAlarmsTable(),
			alarmsGraphs: flux.store("AlarmStore").getAlarmsGraphs(),
			alarmsCount: flux.store("AlarmStore").getAlarmsCount(),
			// "Lega" la proprietà alarms dello state del componente
			// al risultato restituito dalla chiamata al metodo getAllAlarms
			// dello store "AlarmStore". L'oggetto restituito contiene la lista
			// di tutti gli allarmi in cui gli allarmi sono associati alle
			// proprietà dell'oggetto con nome corrispondente all'id
			// dell'allarme
			alarms: flux.store("AlarmStore").getAllAlarms(),
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
		//console.log("RENDERING...");
		//console.log(this.state.alarmsTable);
		//console.log(this.state.menuItems);
		return (
			<div>
				<div id="sidebar" className={sidebarClass}>
					<Sidebar items={this.state.menuItems} />
				</div>
				<div id="header">
					<Header
						sidebarIsOpen={this.state.sidebarIsOpen}
						alarmsCount={this.state.alarmsCount}
						toggleSidebar={this.toggleSidebar.bind(this)}
					/>
				</div>
				<div id="content">
					<this.props.activeRouteHandler
						alarmsTable={this.state.alarmsTable}
						alarmsGraphs={this.state.alarmsGraphs}
						alarms={this.state.alarms}
						flux={this.props.flux}
					/>
				</div>
			</div>
		);
	},
	componentDidMount: function () {
		this.getFlux().actions.loadMenuItems();
		this.getFlux().actions.loadAlarmsTable();
		this.getFlux().actions.getAlarmsGraphs("NO");
		var self = this;
		setInterval(function () {
			self.getFlux().actions.getAlarmsCount();
		}, 1000);
	}
});

module.exports = Root;
