'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'


class ColorScale extends React.Component{
  redScale;
  greenScale;
  blueScale;
  increment;
  steps;

  redArray;
  greenArray;
  blueArray;
  colorArray;
  componentsArray;

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.colorScaler = this.colorScaler.bind(this);
    this.steps=9;
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
    this.colorArray = this.colorArrayScaler(color1,color2, this.steps);
    this.scaleBuilder();

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
    this.colorArray = this.colorArrayScaler(initialColor,finalColor, this.steps);
  }

  render() {
    var defaultColor = {
      redChannel: 48,
      greenChannel: 0,
      blueChannel: 150
    };
    return (
      <div>
        <div id="" className="cls mr ColorScale"> 
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.props.r1} bgGreen={this.props.g1} bgBlue={this.props.b1} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[1].r} bgGreen={this.colorArray[1].g} bgBlue={this.colorArray[1].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[2].r} bgGreen={this.colorArray[2].g} bgBlue={this.colorArray[2].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[3].r} bgGreen={this.colorArray[3].g} bgBlue={this.colorArray[3].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[4].r} bgGreen={this.colorArray[4].g} bgBlue={this.colorArray[4].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[5].r} bgGreen={this.colorArray[5].g} bgBlue={this.colorArray[5].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[6].r} bgGreen={this.colorArray[6].g} bgBlue={this.colorArray[6].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[7].r} bgGreen={this.colorArray[7].g} bgBlue={this.colorArray[7].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.colorArray[8].r} bgGreen={this.colorArray[8].g} bgBlue={this.colorArray[8].b} /></div>
          <div className="inline-block w10"><ColorDisplay ref="displayer" bgRed={this.props.r2} bgGreen={this.props.g2} bgBlue={this.props.b2} /></div>
        </div>

        <div className="cls mr">
          {this.componentArray}
        </div>
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
 
  colorArrayScaler (startColor,endColor, steps) {
    var fullArray = [];
    this.redArray = this.channelArrayScaler(startColor.r,endColor.r, steps);
    this.blueArray = this.channelArrayScaler(startColor.b,endColor.b, steps);
    this.greenArray = this.channelArrayScaler(startColor.g,endColor.g, steps);

    for (var i=0;i<steps;i++)
    {
      var fullColor = {
        r: this.redArray[i],
        g: this.greenArray[i],
        b: this.blueArray[i]
      }
      fullArray.push(fullColor);
    }
    return fullArray;
  }

  channelArrayScaler (c1,c2, steps) {
    var scaleArray = [];
    if(c1<c2){
      this.increment = Math.floor((c2-c1)/steps);
      for (var i=0;i<steps;i++)
      {
        scaleArray[i] = +c1 + (+this.increment * i);
      }
    }
    else{
      this.increment = Math.floor((c1-c2)/steps);
      for (var i=0;i<steps;i++)
      {
        scaleArray[i] = +c1 - (+this.increment * i);
      }
    }
    return scaleArray;
  }

  scaleBuilder () {
    //this.componentsArray = this.colorArray.map(function (i){
    //  return(
    //      <div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.colorArray[i].r} bgGreen={this.colorArray[i].g} bgBlue={this.colorArray[i].b} /></div>
    //    );
    //})
    //this.componentsArray = [];
    //for (var i in this.colorArray)
    //{
    //  if (i!=0)
    //  {
    //    this.componentsArray.push(<div className="inline-block"><ColorDisplay ref="displayer" bgRed={this.colorArray[i].r} bgGreen={this.colorArray[i].g} bgBlue={this.colorArray[i].b} /></div>)
    //  }
    //}
  }
}

export default ColorScale;