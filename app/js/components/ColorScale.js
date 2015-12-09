'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'


class ColorScale extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount () {
    this.setState({
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    });
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
}

export default ColorScale;