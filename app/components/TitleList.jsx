var React = require('react');
var Main = require('Main');
var Item = require('Item');
var ListToggle = require('ListToggle');

var TitleList = React.createClass({
	apiKey: '0cc7422db67aea48a6397b61a2aeadf0',
	getInitialState: function() {
		return {data: [], mounted: false};
	},
	loadContent: function() {
		var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;

    fetch(requestUrl).then((response) => {
          return response.json();
        }).then((data) => {
          this.setState({data: data});
        }).then((err) => {
          console.log('There was an error. Nobody knows what happened');
          console.log(err);
        });
	},
	componentDidMount: function() {
		this.loadContent();
		this.setState({ mounted: true });
	},
	componentWillUnmount: function() {
		this.setState({ mounted: false });
	},
	render: function() {
		if(this.state.data.results) {
			var titles = this.state.data.results.map(function(title, i) {
				if(i < 5) {

					var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
					if(!title.name) {
						var name = title.original_title;
					} else {
						var name = title.name;
					}

					return (
						<Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
					);

				}
			});

		} else {
			var titles = '';
		}

		return (
			<div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
				<div className="Title">
					<h1>{this.props.title}</h1>
					<div className="titles-wrapper">
						{titles}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TitleList;
