var React = require('react');
var UserProfile = require('UserProfile');
var Hero = require('Hero');
var TitleList = require('TitleList');
var Item = require('Item');
var ListToggle = require('ListToggle');
var Header = require('Header');

var Main = React.createClass({
  apiKey: '0cc7422db67aea48a6397b61a2aeadf0',
	getInitialState: function() {
		return {data: []};
	},
	performSearch: function(e) {
		// stop form from submitting
		e.preventDefault();

		// get the value
		var val = $('.Search input').val();

		// Do the thing
		var requestUrl = 'https://api.themoviedb.org/3/search/multi?query=' + val + '&api_key=' + this.apiKey;

		$.ajax({
      url: requestUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

	},
	componentDidUpdate: function() {

	},
	render: function() {

		if(this.state.data.results) {
			console.log(this.state.data);
		}

		return (
			<div>
				<Header onSubmit={this.performSearch} />
				<Hero />
				<TitleList title="Top TV picks for Aaron" url='discover/tv?sort_by=popularity.desc&page=1' />
				<TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
				<TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
			</div>
		);
	}
});

module.exports = Main;
