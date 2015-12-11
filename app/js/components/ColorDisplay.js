'use strict';

import React from 'react';



var divStyle = {
  backgroundColor: 'rgb(255,255,0)',
  minWidth: '250px',
  width: '250px',
  minHeight: '100px'
}

class ColorDisplay extends React.Component{

  constructor(props) {
    super(props);
  }

  defaultState () {
    
  }

  render() {
    var numero = 100;
    
    divStyle.backgroundColor = "rgb(" + this.props.bgRed + "," + this.props.bgGreen + "," + this.props.bgBlue +  ")" ;
    return (
      <div id="colorDisplay" style={divStyle} >{this.props.bgRed},{this.props.bgGreen},{this.props.bgBlue}</div>
    );
  }

}

export default ColorDisplay;