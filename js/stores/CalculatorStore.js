/*
 * CalculatorStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalculatorConstants = require('../constants/CalculatorConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';
var _calculation = ""

var CalculatorStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _calculation;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case CalculatorConstants.CALCULATOR_UPDATE:
      //console.log('CALCULATOR_UPDATE');
      text = action.text;
      if (text !== '') {
        _calculation += text;
      }
      break;

    case CalculatorConstants.CALCULATOR_CALCULATE:
       //console.log('CALCULATOR_CALCULATE');
       _calculation = eval(_calculation);
      break;

    case CalculatorConstants.CALCULATOR_CLEAR:
       //console.log('CALCULATOR_CLEAR');
       _calculation = "";
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  CalculatorStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = CalculatorStore;
