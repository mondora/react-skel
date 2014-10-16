/** @jsx React.DOM */

var alarms = {
    "allarmi": {
        "TIME": [
            "14:00",
            "14:15",
            "14:30",
            "14:45",
            "15:00",
            "15:15",
            "15:30",
            "15:45"
        ],
        "NO": [
            "2",
            "1",
            "1",
            "0",
            "1",
            "3",
            "2",
            "1"
        ],
        "NE": [
            "1",
            "1",
            "3",
            "2",
            "0",
            "1",
            "1",
            "0"
        ],
        "CE": [
            "1",
            "2",
            "2",
            "2",
            "2",
            "1",
            "3",
            "3"
        ],
        "SU": [
            "2",
            "3",
            "1",
            "3",
            "1",
            "1",
            "2",
            "1"
        ]
    }
};

var AlarmsAPI = {
	getAlarms: function (cb) {
		setTimeout(function () {
			cb(alarms);
		}, 500);
	}
};

module.exports = AlarmsAPI;
