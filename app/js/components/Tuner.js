'use strict';

import React from 'react';


class ColorDisplay extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <input type="range" name={this.props.nombre} min="0" max="255" defaultValue={this.props.valor} step="1" onChange={this.handleChange} />
    );
  }
}

export default ColorDisplay;