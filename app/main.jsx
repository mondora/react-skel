/** @jsx React.DOM */

var DefaultRoute = require("react-router").DefaultRoute;
var Fluxxor      = require("fluxxor");
var React        = require("react");
var Routes       = require("react-router").Routes;
var Route        = require("react-router").Route;

var Root    = require("./pages/root/root.jsx");
var User    = require("./pages/user/user.jsx");
var Home    = require("./pages/home/home.jsx");
var stores  = require("./stores/index.jsx");
var actions = require("./actions/index.jsx");

// Con questa chiamata lego gli stores definiti nella
// cartella "app/stores/" e le azioni definite nella
// cartella "app/actions" e la libreria Fluxxor creerà
// un'istanza di flux che li conterrà entrambi
var flux = new Fluxxor.Flux(stores, actions);

var getTopLevel = function () {
	return (
		<Routes location="history">
			<Route path="/" handler={Root} flux={flux}>
				<Route name="home" path="/" handler={Home} />
				<Route name="user" path="user/" handler={User} />
				<DefaultRoute handler={Home} />
			</Route>
		</Routes>
	);
};

React.renderComponent(
	getTopLevel(),
	document.body
);

window.React = React;
