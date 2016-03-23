'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import ColorPicker   from '../components/ColorPicker';
import ColorScale    from '../components/ColorScale';



const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {
  mezcla;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    this.mezcla = {
      r1: Math.floor(Math.random()*255),
      g1: Math.floor(Math.random()*255),
      b1: Math.floor(Math.random()*255),
      r2: Math.floor(Math.random()*255),
      g2: Math.floor(Math.random()*255),
      b2: Math.floor(Math.random()*255)

    }
    this.setState({
      r1: this.mezcla.r1,
      g1: this.mezcla.g1,
      b1: this.mezcla.b1,
      r2: this.mezcla.r2,
      g2: this.mezcla.g2,
      b2: this.mezcla.b2
    });
  }

  render() {
    return (
      <DocumentTitle title="Helmantica">
        <section className="home-page cls">
            <ColorPicker name="uno" r={this.state.r1} g={this.state.g1} b={this.state.b1} onUserInput={this.handleChange} />
            <ColorPicker name="dos" r={this.state.r2} g={this.state.g2} b={this.state.b2} onUserInput={this.handleChange} />
            <ColorScale r1={this.mezcla.r1} g1={this.mezcla.g1} b1={this.mezcla.b1} r2={this.mezcla.r2} g2={this.mezcla.g2} b2={this.mezcla.b2} />
        </section>
      </DocumentTitle>
    );
  }

  handleSubmit(owner, name, value) {
    switch(owner) {
      case 'uno':
        switch (name){
          case 'red':
            this.mezcla.r1= +value
          break;
          case 'green':
            this.mezcla.g1= +value
          break;
          case 'blue':
            this.mezcla.b1= +value
          break;
        }
      break;
      case 'dos':
        switch (name){
          case 'red':
            this.mezcla.r2= +value
          break;
          case 'green':
            this.mezcla.g2= +value
          break;
          case 'blue':
            this.mezcla.b2= +value
          break;
        }
      break;
    }
  }

  handleChange(owner,name,value) {
    //alert("In Home page:" + owner + ', ' + name + ', ' + value)
    switch(owner) {
      case 'uno':
        switch (name){
          case 'red':
            this.setState({
              r1: +value
            });
          break;
          case 'green':
            this.setState({
              g1: +value
            });
          break;
          case 'blue':
            this.setState({
              b1: +value
            });
          break;
        }
      break;
      case 'dos':
        switch (name){
          case 'red':
            this.setState({
              r2: +value
            });
          break;
          case 'green':
            this.setState({
              g2: +value
            });
          break;
          case 'blue':
            this.setState({
              b2: +value
            });
          break;
        }
      break;
    }
    this.handleSubmit(owner,name,value);
  }

}

HomePage.propTypes = propTypes;

export default HomePage;