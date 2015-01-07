var React = require('react');
var cx = require('react/lib/cx');

var Button = React.createClass({
  render: function(){

    var classes = cx({
        'button': true,
        'button-large': this.props.value === 0,
        'button-xlarge': this.props.value === "="
    });
    return <button onMouseDown={this.handleClick} className={classes}>{this.props.value}</button>
  },

  /**
  * Event handler for button click
  */
  handleClick: function(){
    if(this.props.onMouseDown) {
      this.props.onMouseDown(this, this.props.value);
    }
  }
});

module.exports = Button;