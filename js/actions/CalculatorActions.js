/*
 * CalculatorActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CalculatorConstants = require('../constants/CalculatorConstants');


var CalculatorActions = {

  onKeyPress: function(val){
    AppDispatcher.handleViewAction({
      actionType: CalculatorConstants.CALCULATOR_UPDATE,
      text: val
    });
  },
  
  onCalculate: function(){
    AppDispatcher.handleViewAction({
      actionType: CalculatorConstants.CALCULATOR_CALCULATE
    });
  },

  onClear: function(){
    AppDispatcher.handleViewAction({
      actionType: CalculatorConstants.CALCULATOR_CLEAR
    });
  }

};

module.exports = CalculatorActions;
