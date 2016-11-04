/** @jsx React.DOM */
/* global window, document */

var React = require('react'),
  ScrumStandupTimer = require('../ScrumStandupTimer/ScrumStandupTimer.jsx'),
  App;

module.exports = App = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  render: function () {
    return (
      <html lang="en">
        <head>
          <title>{this.state.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/assets/App.css" />
        </head>

        <body>
          <ScrumStandupTimer airhorn={true} />

          <script src="/assets/App.js" type="text/javascript"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: 'window.renderApp(' + JSON.stringify(this.props) + ');'
          }}>
          </script>
        </body>
      </html>
    );
  }
});

if ('object' === typeof window) {
  window.renderApp = function (props) {
    var appFactory = React.createFactory(App);
    React.render(appFactory(props), document);
  };
}
