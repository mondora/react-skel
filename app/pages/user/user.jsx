/** @jsx React.DOM */

var React = require("react");
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var AlarmViewer = require("../../components/alarm-viewer/alarm-viewer.jsx");

var User = React.createClass({
	render: function () {
		return (
			<div id="user">
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
							<AlarmViewer
								alarmsTable={this.props.alarmsTable}
								alarms={this.props.alarms}
								flux={this.props.flux}
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = User;
