var React = require('react');
var ReactPropTypes = React.PropTypes;

var Display = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    value: ReactPropTypes.string
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {

    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onChange={this._onChange}
        value={this.props.allCalculations}
        autoFocus={true} />
    );
  },

  /**
   * @param {object} event
   */
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  }
});

module.exports = Display;