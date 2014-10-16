/** @jsx React.DOM */

var React = require("react/addons");
// Libreria di utilities per manipolare
// gli oggetti in javascript
var _ = require("lodash");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var AlarmRow = React.createClass({
	getClass: function (value) {
		return React.addons.classSet({
			"value-circle": true,
			"normal": (value === 0),
			"warning": (value > 0 && value < 3),
			"critical": (value >= 3)
		});
	},
	render: function () {
		var self = this;
		var values = self.props.line.values.map(function (value) {
			value = parseInt(value, 10);
			var circleClass = self.getClass(value);
			value = (value === 0) ? null : value;
			return (
				<Col xs={1}>
					<div className="circle-wrapper">
						<div className={circleClass}>
							{value}
						</div>
					</div>
				</Col>
			);
		});
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
				<AlarmRow line={line} />
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
