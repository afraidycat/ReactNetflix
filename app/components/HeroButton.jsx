var React = require('react');

var HeroButton = React.createClass({
  render: function() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
});

module.exports = HeroButton;
