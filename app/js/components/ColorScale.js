'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'


class ColorScale extends React.Component{
  redScale;
  greenScale;
  blueScale;
  increment;

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.colorScaler = this.colorScaler.bind(this);
  }

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

  }

  componentWillUpdate() {
    var initialColor = {
      r: this.props.r1,
      g: this.props.g1,
      b: this.props.b1
    }
    //alert('initialColor. r: ' + this.props.r1)
    var finalColor = {
      r: this.props.r2,
      g: this.props.g2,
      b: this.props.b2
    }
    this.colorScaler(initialColor,finalColor);
  }

  render() {
    var defaultColor = {
      redChannel: 48,
      greenChannel: 0,
      blueChannel: 150
    };
    return (
        <div id="ColorScale" className="cls mr"> 
          <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.props.r1} bgGreen={this.props.g1} bgBlue={this.props.b1} /></div>
          <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.redScale.step1} bgGreen={this.greenScale.step1} bgBlue={this.blueScale.step1} /></div>
          <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.redScale.step2} bgGreen={this.greenScale.step2} bgBlue={this.blueScale.step2} /></div>
          <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.redScale.step3} bgGreen={this.greenScale.step3} bgBlue={this.blueScale.step3} /></div>
          <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.props.r2} bgGreen={this.props.g2} bgBlue={this.props.b2} /></div>

        </div>
    );
  }

  handleChange(event) {
  }

  colorScaler(startColor, endColor){
    this.redScale = this.channelScaler(startColor.r, endColor.r);
    this.greenScale = this.channelScaler(startColor.g, endColor.g);
    this.blueScale = this.channelScaler(startColor.b, endColor.b);

  }

  channelScaler (c1, c2) {
    //var range = Math.abs(c1 - c2);
    //var increment = Math.floor(range/4);
    if (c1<c2) {
      this.increment = Math.floor((c2-c1)/4);
      return {
        start : +c1,
        step1 : +c1 + +this.increment,
        step2 : +c1 + (+this.increment *2),
        step3 : +c1 + (+this.increment *3),
        end: +c2
      }
    }
    else {
      this.increment = Math.floor((c1-c2)/4);
      return {
        start : +c1,
        step1 : +c1 - +this.increment,
        step2 : +c1 - (+this.increment *2),
        step3 : +c1 - (+this.increment *3),
        end: +c2
      }
    }
    
  }
}

export default ColorScale;