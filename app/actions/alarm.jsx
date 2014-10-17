/** @jsx React.DOM */

var constants = require("../constants.jsx");

var loadAlarmsTable = function () {
	var self = this;
	var AlarmsAPI = require("../stubs/alarm-viewer.jsx");
	AlarmsAPI.getAlarms(function (alarmsTable) {
		self.dispatch(constants.LOAD_ALARMS, {alarmsTable: alarmsTable});
	});
};
var getAlarmsDetails = function (zone, time) {
	var self = this;
	var AlarmsAPI = require("../stubs/alarm-viewer.jsx");
	// Chiamo l'API con i parametri definiti dalla "posizione"
	// del click, che sono appunto zona e tempo

	/* Chiamata HTTP da browser a server in jQuery
	$.ajax({
		method: "GET",
		path: "getAlarmsByZoneAndTime",
		params: {
			zone: zone,
			time: time
		},
		success: function (result) {
			self.dispatch(constants.GOTTEN_ALARM_DETAILS, {alarmsList: alarmsList});
		}
	});
	*/

	AlarmsAPI.getDetails(zone, time, function (alarmsList) {
		// Quando l'azione resituisce un valore, emetti
		// l'evento GOTTEN_ALARM_DETAILS che viene poi
		// intercettato dallo store che sta ascoltando
		// per quell'evento
		self.dispatch(constants.GOTTEN_ALARM_DETAILS, {alarmsList: alarmsList});
	});
};

var getAlarmsGraphs = function (zone) {
	var self = this;
	var AlarmsAPI = require("../stubs/alarm-viewer.jsx");
	AlarmsAPI.getAlarmsGraphs(zone, function (alarmsGraphs) {
		// Quando l'azione resituisce un valore, emetti
		// l'evento GOTTEN_ALARMS_GRAPHS che viene poi
		// intercettato dallo store che sta ascoltando
		// per quell'evento
		self.dispatch(constants.GOTTEN_ALARMS_GRAPHS, {alarmsGraphs: alarmsGraphs});
	});
};

var getAlarmsCount = function () {
	var self = this;
	var AlarmsAPI = require("../stubs/alarm-viewer.jsx");
	AlarmsAPI.getAlarmsCount(function (alarmsCount) {
		self.dispatch(constants.GOTTEN_ALARMS_COUNT, {alarmsCount: alarmsCount});
	});
};

module.exports = {
	loadAlarmsTable: loadAlarmsTable,
	getAlarmsDetails: getAlarmsDetails,
	getAlarmsGraphs: getAlarmsGraphs,
	getAlarmsCount: getAlarmsCount
};
