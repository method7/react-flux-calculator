/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the CalculatorStore and passes the new data to its children.
 */

var React = require('react');
var Display = require('./Display.react');
var Keyboard = require('./Keyboard.react');
var CalculatorStore = require('../stores/CalculatorStore');

/**
 * Retrieve the current Calculator data from the CalculatorStore
 */
function getCalculatorState() {
  return {
    allCalculations: CalculatorStore.getAll()
  };
}

var calculatorApp = React.createClass({

  getInitialState: function() {
    return getCalculatorState();
  },

  componentDidMount: function() {
    CalculatorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CalculatorStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Display 
          id="calculate"
          placeholder="www.linkedin.com/in/method7"
          allCalculations={this.state.allCalculations}/>
        <Keyboard />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the CalculatorStore
   */
  _onChange: function() {
    this.setState(getCalculatorState());
  }

});

module.exports = calculatorApp;