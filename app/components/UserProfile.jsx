var React = require('react');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Aaron Pantoja</div>
          <div className="image"><img src="https://pbs.twimg.com/profile_images/750519497446924290/XUrbyQvt.jpg" alt="profile" /></div>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;
