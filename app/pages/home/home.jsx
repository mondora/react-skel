/** @jsx React.DOM */

var React = require("react");
var Link = require("react-router").Link;
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var CollapsiblePanel = require("../../components/collapsible-panel/collapsible-panel.jsx");
var LineChart = require("../../components/line-chart/line-chart.jsx");

var Home = React.createClass({
	render: function () {
		var data = {
		   labels: ["January", "February", "March", "April", "May", "June", "July"],
		   datasets: [
			   {
				   label: "My First dataset",
				   fillColor: "rgba(220,220,220,0.2)",
				   strokeColor: "rgba(220,220,220,1)",
				   pointColor: "rgba(220,220,220,1)",
				   pointStrokeColor: "#fff",
				   pointHighlightFill: "#fff",
				   pointHighlightStroke: "rgba(220,220,220,1)",
				   data: [65, 59, 80, 81, 56, 55, 40]
			   },
			   {
				   label: "My Second dataset",
				   fillColor: "rgba(151,187,205,0.2)",
				   strokeColor: "rgba(151,187,205,1)",
				   pointColor: "rgba(151,187,205,1)",
				   pointStrokeColor: "#fff",
				   pointHighlightFill: "#fff",
				   pointHighlightStroke: "rgba(151,187,205,1)",
				   data: [28, 48, 40, 19, 86, 27, 90]
			   }
		   ]
		};
		var options = {};
		return (
			<div id="home">
				<Grid>
				   <Row>
					 <br />
					 <Col xs={12}>
						<CollapsiblePanel header="Panel">
							Content
						</CollapsiblePanel>
					 </Col>
					 <br />
					 <Col xs={12}>
						<LineChart width={1150} height={400} data={data} options={options} />
					 </Col>
				   </Row>
			   </Grid>
			</div>
		);
	}
});

module.exports = Home;
