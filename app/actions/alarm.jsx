/** @jsx React.DOM */

var constants = require("../constants.jsx");

var loadAlarmsTable = function () {
	var self = this;
	var AlarmsAPI = require("../stubs/alarm-viewer.jsx");
	AlarmsAPI.getAlarms(function (alarmsTable) {
		self.dispatch(constants.LOAD_ALARMS, {alarmsTable: alarmsTable});
	});
};

module.exports = {
	loadAlarmsTable: loadAlarmsTable
};
