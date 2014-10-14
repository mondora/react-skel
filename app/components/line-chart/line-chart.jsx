/** @jsx React.DOM */

var React = require("react");
var Chart = require("chart.js");

var LineChart = React.createClass({
	propTypes: {
	},
	componentDidMount: function () {
		var canvas = document.getElementById(this.id);
		var ctx = canvas.getContext("2d");
		var lineChart = new Chart(ctx).Line(this.props.data, this.props.options);
	},
	getId: function () {
		if (!this.id) {
			this.id = Math.random();
		}
		return this.id;
	},
	render: function() {
		return (
			<canvas id={this.getId()} width={this.props.width} height={this.props.height}></canvas>
		);
	}
});

module.exports = LineChart;
