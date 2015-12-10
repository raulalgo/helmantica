'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'


class ColorScale extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.colorScaler = this.colorScaler.bind(this);
;  }

  componentWillMount () {
    var color1 = {
      r: this.props.r1,
      g: this.props.g1,
      b: this.props.b1
    }
    var color2 = {
      r: this.props.r2,
      g: this.props.g2,
      b: this.props.b2
    }
    this.colorScaler(color1,color2);



    //--------------------------------------
    this.setState({
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    });
  }

  componentWillUpdate

  render() {
    var defaultColor = {
      redChannel: 48,
      greenChannel: 0,
      blueChannel: 150
    };
    //this.state.color = defaultColor;
    return (
        <div id="ColorScale" className="cls mr"> 
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.state.r} bgGreen={this.state.g} bgBlue={this.state.b} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.state.r} bgGreen={this.state.g} bgBlue={this.state.b} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.state.r} bgGreen={this.state.g} bgBlue={this.state.b} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.state.r} bgGreen={this.state.g} bgBlue={this.state.b} /></div>

        </div>
    );
  }

  handleChange(event) {
    //event.target.value
    switch (event.target.name){
      case 'red':
        this.setState({
          r: event.target.value
        });
      break;
      case 'green':
        this.setState({
          g: event.target.value
        });
      break;
      case 'blue':
        this.setState({
          b: event.target.value
        });
      break;
    }
  }

  colorScaler(startColor, endColor){
    //alert("colorScaler")
    var redScale = channelScaler(startColor.r, endColor.r);
    var greenScale = channelScaler(startColor.g, endColor.g);
    var blueScale = channelScaler(startColor.b, endColor.b);

    this.setState({
      startColor: {},
      step1: {},
      step2: {},
      step3: {},
      endColor: {}
    })
  }

  channelScaler (c1, c2) {
    //defaulting to 4 steps
    var range = abs(c1 - c2);
    var increment = Math.floor(range/4);
    if (c1<c2) {
      var start = c1;
      var end = c2;
    }
    else {
      var start = c2;
      var end = c2;
    }
    return {
      start : start,
      step1 : start + increment,
      step2 : start + (increment *2),
      step3 : start + (increment *3),
      end: end
    }
  }
}

export default ColorScale;