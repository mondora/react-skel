/** @jsx React.DOM */

var React = require("react");
var Link = require("react-router").Link;
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var AlarmViewer = require("../../components/alarm-viewer/alarm-viewer.jsx");

var Home = React.createClass({
	render: function () {
		// Dato che ho passato come proprietà alarmsTable
		// alla Home, adesso this.props conterrà la
		// proprietà alarmsTable
		//console.log(this.props);
		return (
			<div id="home">
				<Grid>
					<Row>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<Col xs={12}>
							<AlarmViewer alarmsTable={this.props.alarmsTable} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Home;
