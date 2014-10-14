/** @jsx React.DOM */

var React = require("react");
var Panel = require("react-bootstrap").Panel;

var CollapsiblePanel = React.createClass({
	getInitialState: function() {
		   return {
			   expanded: false
		   };
		 },
	render: function() {
	   return (
		 <Panel
			header={this.props.header}
			collapsable={true}
			expanded={this.state.expanded}
			onSelect={this._toggleExpand}>
			this.children
		 </Panel>
	   );
	},
	_toggleExpand: function() {
	   this.setState({expanded: !this.state.expanded});
	}
});

module.exports = CollapsiblePanel;
