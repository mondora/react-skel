/** @jsx React.DOM */

var constants = require("../constants.jsx");

var addAlarm = function (alarm) {
	this.dispatch(constants.ADD_ALARM, alarm);
};

module.exports = {
	addAlarm: addAlarm
};
