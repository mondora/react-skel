/** @jsx React.DOM */

var _ = require("lodash");

var actions = {};

_.extend(actions, require("./alarm.jsx"));
_.extend(actions, require("./menu-item.jsx"));

module.exports = actions;
