/** @jsx React.DOM */

var React = require("react/addons");
// Libreria di utilities per manipolare
// gli oggetti in javascript
var _ = require("lodash");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Table = require("react-bootstrap").Table;


var AlarmCircle = React.createClass({
	getAlarmsDetails: function () {
		this.props.flux.actions.getAlarmsDetails(
			this.props.zone,
			this.props.time
		);
	},
	getClass: function (value) {
		return React.addons.classSet({
			"value-circle": true,
			"normal": (value === 0),
			"warning": (value > 0 && value < 3),
			"critical": (value >= 3)
		});
	},
	render: function () {
		var value = parseInt(this.props.value, 10);
		var circleClass = this.getClass(value);
		value = (value === 0) ? null : value;
		return (
			<div className={circleClass} onClick={this.getAlarmsDetails}>
				{value}
			</div>
		);
	}
});

var AlarmRow = React.createClass({
	render: function () {
		var self = this;
		var values = self.props.line.values.map(function (value, index) {
			var time = self.props.line.intervals[index];
			return (
				<Col xs={1}>
					<div className="circle-wrapper">
						<AlarmCircle
							value={value}
							time={time}
							zone={self.props.line.name}
							flux={self.props.flux}
						/>
					</div>
				</Col>
			);
		});
		var alarmsList = this.props.alarms
			.filter(function (alarm) {
				return (alarm.Zona === self.props.line.name);
			})
			.map(function (alarm) {
				var keys = _.map(alarm, function (value) {
					return (
						<td>
							{value}
						</td>
					);
				});
				return (
					<tr>
						{keys}
					</tr>
				);
			});
		var alarmsLabels = _.keys(this.props.alarms[0]).map(function (key) {
			return (
				<th>
					{key}
				</th>
			);
		});

		var alarmTable = null;
		if (alarmsList.length !== 0) {
			alarmTable = (
				<Table responsive striped hover>
					<thead>
						<tr>
							{alarmsLabels}
						</tr>
					</thead>
					<tbody>
						{alarmsList}
					</tbody>
				</Table>
			);
		}

		return (
			<Row>
				<div className="background-line"></div>
				<Col xs={2} xsOffset={1}>
					<div className="circle-wrapper">
						<div className="zone-circle">
							{this.props.line.name}
						</div>
					</div>
				</Col>
				{values}
				<Col xs={10} xsOffset={1}>
					{alarmTable}
				</Col>
			</Row>
		);
	}
});

var AlarmViewer = React.createClass({
	getValueList: function () {
		var self = this;
		// Il metodo keys ritorna un array contenente
		// i nomi delle proprietà dell'oggetto
		var keys = _.keys(self.props.alarmsTable);
		keys = _.without(keys, "TIME");
		var lines = keys.map(function (key) {
			var newLine = {};
			newLine.name = key;
			newLine.intervals = self.props.alarmsTable.TIME;
			newLine.values = self.props.alarmsTable[key];
			return newLine;
		});
		return lines;
	},
	render: function () {
		var self = this;
		var lines = self.getValueList();
		var rows = lines.map(function (line) {
			return (
				<AlarmRow
					line={line}
					alarms={self.props.alarms}
					flux={self.props.flux}
				/>
			);
		});
		//console.log(this.props.alarmsTable);
		return (
			<div className="alarm-viewer">
				{rows}
			</div>
		);
	}
});

module.exports = AlarmViewer;
