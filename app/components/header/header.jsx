/** @jsx React.DOM */

var React = require("react");
var Navbar =require("react-bootstrap").Navbar;
var Row =require("react-bootstrap").Row;
var Col =require("react-bootstrap").Col;
var Badge =require("react-bootstrap").Badge;

var Header = React.createClass({
	render: function () {
		var sidebarClass = this.props.sidebarIsOpen ? "open" : "";
		return (
			<Navbar id="header" fixedTop>
				<div id="panino" className={sidebarClass}>
					<i className="fa fa-bars" onClick={this.props.toggleSidebar}>
					</i>
				</div>
				<Row>
					<Col xs={10} xsOffset={1}>
						<img src="/assets/images/logo.png" />
						<i className="fa fa-user user-icon"></i>
						<Badge className="notification-badge">
							{this.props.alarmsCount}
						</Badge>
					</Col>
				</Row>
			</Navbar>
		);
	}
});

module.exports = Header;
