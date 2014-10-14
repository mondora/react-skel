/** @jsx React.DOM */

var Fluxxor = require("fluxxor");
var constants = require("../constants.jsx");

var AlarmStore = Fluxxor.createStore({
	initialize: function () {
		this.alarms = [];
		this.bindActions(
			constants.ADD_ALARM, this.onAddAlarm
		);
	},
	onAddAlarm: function (payload) {
		this.alarms.push({
			antennaId: payload.antennaId,
			time: payload.time,
			status: "todo"
		});
	},
	getAlarms: function () {
		return {
			alarms: this.alarms
		};
	}
});

module.exports = AlarmStore;
