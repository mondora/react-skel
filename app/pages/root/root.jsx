/** @jsx React.DOM */

var React   = require("react");
var Sidebar = require("../../components/sidebar/sidebar.jsx");
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
				<Navbar id="header" fixedTop>
					<div id="panino" className={sidebarClass}>
						<i className="fa fa-bars" onClick={this.toggleSidebar}>
						</i>
					</div>
					<img src="/assets/images/logo.png" />
				</Navbar>
				<div id="content">
					<this.props.activeRouteHandler
						alarmsTable={this.state.alarmsTable}
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
	}
});

module.exports = Root;
