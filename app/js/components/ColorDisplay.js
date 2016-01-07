'use strict';

import React from 'react';



var divStyle = {
  backgroundColor: 'rgb(255,255,0)',
  minWidth: '100%',
  width: '75px',
  minHeight: '100px',
  fontSize: '12px'
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
      <div id="colorDisplay" className={this.props.cdClass} style={divStyle} >{this.props.bgRed},{this.props.bgGreen},{this.props.bgBlue}</div>
    );
  }

}

export default ColorDisplay;