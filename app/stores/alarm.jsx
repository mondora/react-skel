/** @jsx React.DOM */

var Fluxxor = require("fluxxor");
var constants = require("../constants.jsx");

var AlarmStore = Fluxxor.createStore({
	initialize: function () {
		this.alarmsTable = {};
		// Dice allo store di ascolare l'evento LOAD_ALARMS scatenato
		// dalle azione e di reagire a tale evento chiamando il metodo
		// this.onLoadAlarms
		this.bindActions(
			constants.LOAD_ALARMS, this.onLoadAlarms
		);
	},
	onLoadAlarms: function (payload) {
		this.alarmsTable = payload.alarmsTable.allarmi;
		this.emit("change");
	},
	getAlarmsTable: function () {
		return this.alarmsTable;
	}
});

module.exports = AlarmStore;
