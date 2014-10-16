/** @jsx React.DOM */

var React = require("react");
var Chart = require("chart.js");

var LineChart = React.createClass({
	render: function() {
		return (
			<canvas ref="line-chart" width={this.props.width} height={this.props.height}></canvas>
		);
	},
	componentDidMount: function () {
		var canvas = this.refs["line-chart"].getDOMNode();
		var ctx = canvas.getContext("2d");
		var lineChart = new Chart(ctx).Line(this.props.data, this.props.options);
	}
});

module.exports = LineChart;
