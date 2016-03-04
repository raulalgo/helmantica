'use strict';

import React from 'react';



var divStyle = {
  backgroundColor: 'rgb(255,255,0)',
  minWidth: '100%'
}

class ColorDisplay extends React.Component{

  constructor(props) {
    super(props);
  }

  defaultState () {
    
  }

  render() {
    var numero = 100;
    var htmlColor = this.rgb2hex(this.props.bgRed, this.props.bgGreen, this.props.bgBlue)

    divStyle.backgroundColor = "rgb(" + this.props.bgRed + "," + this.props.bgGreen + "," + this.props.bgBlue +  ")" ;
    return (
      <div id="colorDisplay" className={this.props.cdClass} style={divStyle} ><span className="colorLabel caps">{htmlColor}</span></div>
    );
  }

  componentToHex (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgb2hex (r,g,b)
  {
    return "#" + this.componentToHex(+r) + this.componentToHex(+g) + this.componentToHex(+b)
  }

}

export default ColorDisplay;