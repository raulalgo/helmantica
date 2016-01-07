'use strict';

import React from 'react';


class ColorDisplay extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
			<input type="range" name={this.props.nombre} min="0" max="255" defaultValue={this.props.valor} step="1" onChange={this.handleChange} />
			<input type="field" defaultValue={this.props.valor} />
		</div>
    );
  }

  handleChange(event) {
    this.props.onUserInput(this.props.nombre,event.target.name,event.target.value);
    alert(this.props.nombre)
  }
}

export default ColorDisplay;