var React = require('react');
var CalculatorActions = require('../actions/CalculatorActions');
var Button = require('./_button.react');

var KeyBoard = React.createClass({
  getInitialState: function(){
    return {
      buttons: [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "X", 0, ".", "/", "=", "C"]
     };
  },
  
  onClickHandler: function(obj, val){
    if(val === "="){
      CalculatorActions.onCalculate();
    }
    else if(val === "C"){
      CalculatorActions.onClear();
    }
    else if(val === "X"){
      CalculatorActions.onKeyPress("*");
    }
    else{
      CalculatorActions.onKeyPress(val);
    }
  },
  
  render: function(){
    var self = this;
    
    var buttons = this.state.buttons.map(function(val){
      return <Button value={val} onMouseDown={self.onClickHandler} />;
    });
    
    return (
      <div className="button-container">{buttons}</div>
    )
  }
});

module.exports = KeyBoard;