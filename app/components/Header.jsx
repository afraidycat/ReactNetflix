var React = require('react');
var Logo = require('Logo');
var Navigation = require('Navigation');
var Search = require('Search');
var UserProfile = require('UserProfile');

var Header = React.createClass({
	render: function() {
		return (
			<header className="Header">
				<Logo />
				<Navigation />
				<Search onSubmit={this.props.onSubmit} />
				<UserProfile />
			</header>
		);
	}
});

module.exports = Header;
