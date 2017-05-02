var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

//App css
require('style-loader!css-loader!applicationStyles');

ReactDOM.render(
  <div>
    <Main />
  </div>,
  document.getElementById('app')
);
