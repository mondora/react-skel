/** @jsx React.DOM */

var Fluxxor = require("fluxxor");
var constants = require("../constants.jsx");
var _ = require("lodash");

var AlarmStore = Fluxxor.createStore({
	initialize: function () {
		this.alarmsTable = {};
		this.alarms = [];
		this.alarmsGraphs = [];
		this.alarmsCount = 0;
		// Dice allo store di ascolare l'evento LOAD_ALARMS scatenato
		// dalle azione e di reagire a tale evento chiamando il metodo
		// this.onLoadAlarms
		this.bindActions(
			constants.LOAD_ALARMS, this.onLoadAlarms,
			constants.GOTTEN_ALARM_DETAILS, this.onGottenAlarmDetails,
			constants.GOTTEN_ALARMS_GRAPHS, this.onGottenAlarmsGraphs,
			constants.GOTTEN_ALARMS_COUNT, this.onGottenAlarmsCount
		);
	},
	onLoadAlarms: function (payload) {
		this.alarmsTable = payload.alarmsTable.allarmi;
		this.emit("change");
	},
	onGottenAlarmDetails: function (payload) {
		this.alarms = payload.alarmsList;
		this.emit("change");
	},
	onGottenAlarmsGraphs: function (payload) {
		this.alarmsGraphs = payload.alarmsGraphs.map(function (graph) {
			var newFormat = {};
			newFormat.labels = graph.Tempi;
			newFormat.datasets = _.map(graph.Linee, function (valoreLinea, nomeLinea) {
				return {
					label: nomeLinea,
					data: valoreLinea
				};
			});
			return newFormat;
		});
		this.emit("change");
	},
	onGottenAlarmsCount: function (payload) {
		this.alarmsCount = payload.alarmsCount;
		this.emit("change");
	},
	getAlarmsTable: function () {
		return this.alarmsTable;
	},
	getAlarmsGraphs: function () {
		return this.alarmsGraphs;
	},
	getAlarmsCount: function () {
		return this.alarmsCount;
	},
	getAllAlarms: function () {
		return this.alarms;
	}
});

module.exports = AlarmStore;
