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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount () {
    this.setState({
      r1: Math.floor(Math.random()*255),
      g1: Math.floor(Math.random()*255),
      b1: Math.floor(Math.random()*255),
      r2: Math.floor(Math.random()*255),
      g2: Math.floor(Math.random()*255),
      b2: Math.floor(Math.random()*255)
    });
  }

  render() {
    return (
      <DocumentTitle title="Helmantica">
        <section className="home-page cls">
            <ColorPicker name="uno" r={this.state.r1} g={this.state.g1} b={this.state.b1} onUserInput={this.handleChange} />
            <ColorPicker name="dos" r={this.state.r2} g={this.state.g2} b={this.state.b2} onUserInput={this.handleChange} />
            <ColorScale r1={this.state.r1} g1={this.state.g1} b1={this.state.b1} r2={this.state.r2} g2={this.state.g2} b2={this.state.b2} />
        </section>
      </DocumentTitle>
    );
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
  }

}

HomePage.propTypes = propTypes;

export default HomePage;