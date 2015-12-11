'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'


class ColorScale extends React.Component{
  redScale;
  greenScale;
  blueScale;

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



    //--------------------------------------
    //this.setState({
    //  r: Math.floor(Math.random()*255),
    //  g: Math.floor(Math.random()*255),
    //  b: Math.floor(Math.random()*255)
    //});
  }

  componentWillUpdate() {
    var initialColor = {
      r: this.props.r1,
      g: this.props.g1,
      b: this.props.b1
    }
    var finalColor = {
      r: this.props.r2,
      g: this.props.g2,
      b: this.props.b2
    }
    this.colorScaler(initialColor,finalColor);
    //this.setState({
    //  endColor: finalColor
    //})
  }

  render() {
    var defaultColor = {
      redChannel: 48,
      greenChannel: 0,
      blueChannel: 150
    };
    //this.state.color = defaultColor;
    return (
        <div id="ColorScale" className="cls mr"> 
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.props.r1} bgGreen={this.props.g1} bgBlue={this.props.b1} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.redScale.step1} bgGreen={this.greenScale.step1} bgBlue={this.blueScale.step1} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.redScale.step2} bgGreen={this.greenScale.step2} bgBlue={this.blueScale.step2} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.redScale.step3} bgGreen={this.greenScale.step3} bgBlue={this.blueScale.step3} /></div>
          <div className="left"><ColorDisplay ref="displayer" bgRed={this.props.r2} bgGreen={this.props.g2} bgBlue={this.props.b2} /></div>

        </div>
    );
  }

  handleChange(event) {
    //event.target.value
    //switch (event.target.name){
    //  case 'red':
    //    this.setState({
    //      r: event.target.value
    //    });
    //  break;
    //  case 'green':
    //    this.setState({
    //      g: event.target.value
    //    });
    //  break;
    //  case 'blue':
    //    this.setState({
    //      b: event.target.value
    //    });
    //  break;
    //}
  }

  colorScaler(startColor, endColor){
    //alert('colorScaler')

    this.redScale = this.channelScaler(startColor.r, endColor.r);
    this.greenScale = this.channelScaler(startColor.g, endColor.g);
    this.blueScale = this.channelScaler(startColor.b, endColor.b);

    //alert('redScale: start:' + this.redScale.start +', st1:' + this.redScale.step1)
    //this.setState({
    //  startColor: {
    //    r:this.redScale.start,
    //    g:greenScale.start,
    //    b:blueScale.start
    //  },
    //  step1: {
    //    r:this.redScale.step1,
    //    g:greenScale.step1,
    //    b:blueScale.step1
    //  },
    //  step2: {
    //    r:this.redScale.step2,
    //    g:greenScale.step2,
    //    b:blueScale.step2
    //  },
    //  step3: {
    //    r:this.redScale.step3,
    //    g:greenScale.step3,
    //    b:blueScale.step3
    //  },
    //  endColor: {
    //    r:this.redScale.end,
    //    g:greenScale.end,
    //    b:blueScale.end
    //  }
    //})
  }

  channelScaler (c1, c2) {
    //alert('channelScaler c1:' + c1)
    //defaulting to 4 steps
    var range = Math.abs(c1 - c2);
    var increment = Math.floor(range/4);
    if (c1<c2) {
      //var start = c1;
      //var end = c2;
      return {
        start : c1,
        step1 : c1 + increment,
        step2 : c1 + (increment *2),
        step3 : c1 + (increment *3),
        end: c2
      }
    }
    else {
      //var start = c2;
      //var end = c2;
      return {
        start : c1,
        step1 : c1 - increment,
        step2 : c1 - (increment *2),
        step3 : c1 - (increment *3),
        end: c2
      }
    }
    
  }
}

export default ColorScale;