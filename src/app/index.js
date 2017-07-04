alert('React JS Works');

var React = require('react');
var ReactDOM = require('react-dom');

var SimpleComponent = React.createClass({
  //passing an object
  render:function () {
    return(
      <div id ="common-component">
      <h2> H2 level header - JSX in action </h2>
      <h3> H3 level header - JSX in action </h3>
      </div>
    );
  }
});

//insert component - render on html page

ReactDOM.render(<SimpleComponent />, document.getElementById('simple-component'));
ReactDOM.render(<SimpleComponent />, document.getElementById('h3-component'));
//ReactDOM.render(<SimpleComponent />, document.getElementById('common-component'));
